'use client';

import { useState, useEffect } from 'react';
import { textToMorse } from '../utils/morseCode';
import CopyButton from './CopyButton';

export default function IdentifierEncoderTool() {
  const [identifierType, setIdentifierType] = useState('callsign');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (input) {
      setOutput(textToMorse(input.toUpperCase()));
    } else {
      setOutput('');
    }
  }, [input]);

  const examples = {
    callsign: 'W1AW',
    asset: 'ASSET-12345',
    device: 'IOT-A1B2C3',
    serial: 'SN:ABC789'
  };

  const handleExample = () => {
    setInput(examples[identifierType as keyof typeof examples]);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Identifier to Morse Code Encoder
      </h2>

      {/* Identifier Type Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Select Identifier Type
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => setIdentifierType('callsign')}
            className={`p-3 rounded-lg border-2 transition-all ${
              identifierType === 'callsign'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            <div className="text-2xl mb-1">📻</div>
            <div className="text-sm font-semibold">Call Sign</div>
          </button>
          <button
            onClick={() => setIdentifierType('asset')}
            className={`p-3 rounded-lg border-2 transition-all ${
              identifierType === 'asset'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            <div className="text-2xl mb-1">🏷️</div>
            <div className="text-sm font-semibold">Asset Tag</div>
          </button>
          <button
            onClick={() => setIdentifierType('device')}
            className={`p-3 rounded-lg border-2 transition-all ${
              identifierType === 'device'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            <div className="text-2xl mb-1">🔌</div>
            <div className="text-sm font-semibold">Device ID</div>
          </button>
          <button
            onClick={() => setIdentifierType('serial')}
            className={`p-3 rounded-lg border-2 transition-all ${
              identifierType === 'serial'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                : 'border-gray-300 dark:border-gray-600'
            }`}
          >
            <div className="text-2xl mb-1">🔢</div>
            <div className="text-sm font-semibold">Serial #</div>
          </button>
        </div>
      </div>

      {/* Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Enter Identifier
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`e.g., ${examples[identifierType as keyof typeof examples]}`}
          className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white text-lg font-mono focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Output */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Morse Code Output
        </label>
        <div className="w-full min-h-[100px] p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white font-mono text-lg">
          {output || <span className="text-gray-400">Morse code will appear here...</span>}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <CopyButton text={output} label="Copy Morse Code" />
        <button
          onClick={() => setInput('')}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        >
          Clear
        </button>
        <button
          onClick={handleExample}
          className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800 transition-all font-medium"
        >
          Load Example
        </button>
      </div>
    </div>
  );
}
