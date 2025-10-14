'use client';

import { useState, useEffect } from 'react';
import { binaryToText, textToMorse } from '../utils/morseCode';
import CopyButton from './CopyButton';

export default function BinaryToMorseConverter() {
  const [binaryInput, setBinaryInput] = useState('');
  const [textOutput, setTextOutput] = useState('');
  const [morseOutput, setMorseOutput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!binaryInput.trim()) {
      setTextOutput('');
      setMorseOutput('');
      setError('');
      return;
    }

    // Validate binary input
    const binaryPattern = /^[01\s]+$/;
    if (!binaryPattern.test(binaryInput)) {
      setError('Invalid input. Please use only 0, 1, and spaces.');
      setTextOutput('');
      setMorseOutput('');
      return;
    }

    try {
      const text = binaryToText(binaryInput);
      setTextOutput(text);
      setMorseOutput(textToMorse(text));
      setError('');
    } catch (err) {
      setError('Error converting binary. Please check your input format.');
      setTextOutput('');
      setMorseOutput('');
    }
  }, [binaryInput]);

  const handleExample = () => {
    setBinaryInput('01001000 01000101 01001100 01001100 01001111');
  };

  const handleClear = () => {
    setBinaryInput('');
    setTextOutput('');
    setMorseOutput('');
    setError('');
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Binary to Morse Code Converter
      </h2>

      {/* Binary Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Enter Binary Code (8-bit groups separated by spaces)
        </label>
        <textarea
          value={binaryInput}
          onChange={(e) => setBinaryInput(e.target.value)}
          placeholder="01001000 01000101 01001100 01001100 01001111"
          className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-mono focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>

      {/* Text Output */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Text Translation
        </label>
        <div className="w-full min-h-[60px] p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white">
          {textOutput || <span className="text-gray-400">Text will appear here...</span>}
        </div>
      </div>

      {/* Morse Output */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Morse Code Output
        </label>
        <div className="w-full min-h-[80px] p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white font-mono">
          {morseOutput || <span className="text-gray-400">Morse code will appear here...</span>}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <CopyButton text={morseOutput} label="Copy Morse Code" />
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        >
          Clear
        </button>
        <button
          onClick={handleExample}
          className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800 transition-all font-medium"
        >
          Try Example
        </button>
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Binary Input Format:</h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Use 8-bit binary numbers (e.g., 01001000 for "H")</li>
          <li>• Separate each byte with a space</li>
          <li>• Only use digits 0 and 1</li>
          <li>• Binary converts to ASCII text, then to morse code</li>
        </ul>
      </div>
    </div>
  );
}
