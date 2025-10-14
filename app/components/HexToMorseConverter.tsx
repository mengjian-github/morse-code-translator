'use client';

import { useState, useEffect } from 'react';
import { hexToText, textToMorse } from '../utils/morseCode';
import CopyButton from './CopyButton';

export default function HexToMorseConverter() {
  const [hexInput, setHexInput] = useState('');
  const [textOutput, setTextOutput] = useState('');
  const [morseOutput, setMorseOutput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!hexInput.trim()) {
      setTextOutput('');
      setMorseOutput('');
      setError('');
      return;
    }

    // Validate hex input
    const hexPattern = /^[0-9A-Fa-f\s]+$/;
    if (!hexPattern.test(hexInput)) {
      setError('Invalid input. Please use only hexadecimal digits (0-9, A-F) and spaces.');
      setTextOutput('');
      setMorseOutput('');
      return;
    }

    try {
      const text = hexToText(hexInput);
      setTextOutput(text);
      setMorseOutput(textToMorse(text));
      setError('');
    } catch (err) {
      setError('Error converting hexadecimal. Please check your input format.');
      setTextOutput('');
      setMorseOutput('');
    }
  }, [hexInput]);

  const handleExample = () => {
    setHexInput('48 45 4C 4C 4F');
  };

  const handleClear = () => {
    setHexInput('');
    setTextOutput('');
    setMorseOutput('');
    setError('');
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Hexadecimal to Morse Code Converter
      </h2>

      {/* Hex Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Enter Hexadecimal Code (hex pairs separated by spaces)
        </label>
        <textarea
          value={hexInput}
          onChange={(e) => setHexInput(e.target.value.toUpperCase())}
          placeholder="48 45 4C 4C 4F"
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
          Try Example (HELLO)
        </button>
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Hex Input Format:</h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Use 2-digit hex values (e.g., 48 for "H")</li>
          <li>• Separate each hex pair with a space</li>
          <li>• Use digits 0-9 and letters A-F</li>
          <li>• Hex converts to ASCII text, then to morse code</li>
        </ul>
      </div>
    </div>
  );
}
