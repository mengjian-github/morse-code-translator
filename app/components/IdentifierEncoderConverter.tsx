'use client';

import { useState, useEffect } from 'react';
import { textToMorse } from '../utils/morseCode';
import CopyButton from './CopyButton';

export default function IdentifierEncoderConverter() {
  const [identifierInput, setIdentifierInput] = useState('');
  const [morseOutput, setMorseOutput] = useState('');
  const [identifierType, setIdentifierType] = useState('callsign');

  useEffect(() => {
    if (!identifierInput.trim()) {
      setMorseOutput('');
      return;
    }

    try {
      const morse = textToMorse(identifierInput);
      setMorseOutput(morse);
    } catch (err) {
      setMorseOutput('');
    }
  }, [identifierInput]);

  const examples = {
    callsign: 'W1AW',
    asset: 'ASSET-12345',
    device: 'DEV-A1B2C3',
    serial: 'SN-987654',
    iot: 'IOT-SENSOR-01',
    beacon: 'BCN-NORTH-22'
  };

  const handleExample = () => {
    setIdentifierInput(examples[identifierType as keyof typeof examples]);
  };

  const handleClear = () => {
    setIdentifierInput('');
    setMorseOutput('');
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Identifier to Morse Code Encoder Tool
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Identifier Type
        </label>
        <select
          value={identifierType}
          onChange={(e) => setIdentifierType(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="callsign">Amateur Radio Call Sign</option>
          <option value="asset">Asset Tag / Equipment ID</option>
          <option value="device">Device ID / Serial Number</option>
          <option value="serial">Serial Number</option>
          <option value="iot">IoT Device Identifier</option>
          <option value="beacon">Navigation Beacon ID</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Enter Identifier
        </label>
        <input
          type="text"
          value={identifierInput}
          onChange={(e) => setIdentifierInput(e.target.value.toUpperCase())}
          placeholder="Enter call sign, asset tag, device ID, or identifier"
          className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-mono text-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Morse Code Output
        </label>
        <div className="w-full min-h-[100px] p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white font-mono text-xl">
          {morseOutput || <span className="text-gray-400 text-base">Morse code will appear here...</span>}
        </div>
      </div>

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
          Load Example
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Sign Examples:</h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• US: W1AW, K2ABC, N5XYZ</li>
            <li>• UK: G3ABC, M0XYZ</li>
            <li>• Canada: VE3ABC, VA7XYZ</li>
            <li>• Australia: VK2ABC</li>
          </ul>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Asset Tag Tips:</h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• Keep identifiers short for faster transmission</li>
            <li>• Use alphanumeric codes for clarity</li>
            <li>• Include location or type prefix</li>
            <li>• Avoid ambiguous characters</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
