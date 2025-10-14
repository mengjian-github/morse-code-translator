'use client';

import { useState, useEffect } from 'react';
import { morseToText, caesarEncode, caesarDecode, textToMorse, isValidMorse } from '../utils/morseCode';
import CopyButton from './CopyButton';

export default function WordDecoderConverter() {
  const [decoderType, setDecoderType] = useState<'morse' | 'caesar' | 'substitution'>('morse');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [caesarShift, setCaesarShift] = useState(3);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!inputText.trim()) {
      setOutputText('');
      setError('');
      return;
    }

    try {
      let result = '';

      if (decoderType === 'morse') {
        if (!isValidMorse(inputText)) {
          setError('Invalid morse code. Use dots (.), dashes (-), and spaces.');
          setOutputText('');
          return;
        }
        result = morseToText(inputText);
      } else if (decoderType === 'caesar') {
        result = caesarDecode(inputText, caesarShift);
      } else {
        result = inputText; // Substitution cipher requires manual solving
      }

      setOutputText(result);
      setError('');
    } catch (err) {
      setError('Error decoding. Please check your input.');
      setOutputText('');
    }
  }, [inputText, decoderType, caesarShift]);

  const handleClear = () => {
    setInputText('');
    setOutputText('');
    setError('');
  };

  const handleExample = () => {
    if (decoderType === 'morse') {
      setInputText('.... . .-.. .-.. --- / .-- --- .-. .-.. -..'); // HELLO WORLD
    } else if (decoderType === 'caesar') {
      setCaesarShift(3);
      setInputText('KHOOR ZRUOG'); // HELLO WORLD with shift 3
    } else {
      setInputText('SVOOL DLIOW'); // Example substitution
    }
  };

  const testAllShifts = () => {
    if (decoderType !== 'caesar') return;
    let results = 'Testing all Caesar cipher shifts:\n\n';
    for (let i = 1; i <= 25; i++) {
      const decoded = caesarDecode(inputText, i);
      results += `Shift ${i}: ${decoded}\n`;
    }
    setOutputText(results);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Word Decoder & Cryptogram Solver Tool
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Decoder Type
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => setDecoderType('morse')}
            className={`p-3 rounded-lg border-2 transition-all ${
              decoderType === 'morse'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100 font-medium'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300'
            }`}
          >
            Morse Code
          </button>
          <button
            onClick={() => setDecoderType('caesar')}
            className={`p-3 rounded-lg border-2 transition-all ${
              decoderType === 'caesar'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100 font-medium'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300'
            }`}
          >
            Caesar Cipher
          </button>
          <button
            onClick={() => setDecoderType('substitution')}
            className={`p-3 rounded-lg border-2 transition-all ${
              decoderType === 'substitution'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-900 dark:text-primary-100 font-medium'
                : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300'
            }`}
          >
            Substitution Cipher
          </button>
        </div>
      </div>

      {decoderType === 'caesar' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Caesar Shift Value: {caesarShift}
          </label>
          <input
            type="range"
            min="1"
            max="25"
            value={caesarShift}
            onChange={(e) => setCaesarShift(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
            <span>1</span>
            <span>13 (ROT13)</span>
            <span>25</span>
          </div>
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {decoderType === 'morse' ? 'Enter Morse Code' : 'Enter Encrypted Text'}
        </label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={
            decoderType === 'morse'
              ? '.... . .-.. .-.. --- (dots and dashes)'
              : decoderType === 'caesar'
              ? 'KHOOR ZRUOG (Caesar cipher text)'
              : 'ENCRYPTED TEXT HERE'
          }
          className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-mono focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
        />
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Decoded Output
        </label>
        <textarea
          value={outputText}
          readOnly
          placeholder="Decoded message will appear here..."
          className="w-full h-32 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white whitespace-pre-wrap resize-none"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <CopyButton text={outputText} label="Copy Decoded Text" />
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
        {decoderType === 'caesar' && (
          <button
            onClick={testAllShifts}
            className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-all font-medium"
          >
            Test All Shifts
          </button>
        )}
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Decoding Tips:</h3>
        {decoderType === 'morse' && (
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• Use spaces between morse letters</li>
            <li>• Use forward slash (/) for word breaks</li>
            <li>• Dots (.) for short signals, dashes (-) for long</li>
          </ul>
        )}
        {decoderType === 'caesar' && (
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• Adjust shift slider or test all 25 possible shifts</li>
            <li>• ROT13 uses shift value of 13</li>
            <li>• Look for readable English words in output</li>
          </ul>
        )}
        {decoderType === 'substitution' && (
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• Count letter frequencies in encrypted text</li>
            <li>• Most common letters likely represent E, T, A, O, I, N</li>
            <li>• Look for common short words (THE, AND, IS)</li>
            <li>• Use pattern recognition for repeated sequences</li>
          </ul>
        )}
      </div>

      {decoderType === 'substitution' && (
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">English Letter Frequency:</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Most Common: E, T, A, O, I, N, S, H, R, D, L, U<br/>
            Least Common: Z, Q, X, J, K, V, B, P, G, W, F, Y, C, M
          </p>
        </div>
      )}
    </div>
  );
}
