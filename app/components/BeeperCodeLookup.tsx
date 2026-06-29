'use client';

import { useState, useMemo } from 'react';

const beeperCodes: Record<string, string> = {
  '911': 'Emergency / Call me now',
  '143': 'I love you (1-4-3 letters)',
  '187': 'Police code for murder',
  '411': 'Information (directory assistance)',
  '420': 'Marijuana culture reference',
  '1437': 'I love you forever (letters)',
  '07734': '"HELLO" upside down on calculator',
  '823': 'Thinking of you',
  '555': 'Fake phone number prefix',
  '121': 'I need to talk to you',
  '177': 'I hate you',
  '1134': 'GO2HELL (becomes hello backwards)',
  '0451': 'You are the one',
  '637': 'Always and forever',
  '86': 'Out of / Over / Delete',
};

const phoneKeypad: Record<string, string> = {
  '2': 'ABC', '3': 'DEF', '4': 'GHI', '5': 'JKL',
  '6': 'MNO', '7': 'PQRS', '8': 'TUV', '9': 'WXYZ',
};

function textToKeypad(text: string): string {
  let result = '';
  for (const char of text.toUpperCase()) {
    if (char === ' ') {
      result += '0';
      continue;
    }
    for (const [key, letters] of Object.entries(phoneKeypad)) {
      if (letters.includes(char)) {
        result += key;
        break;
      }
    }
  }
  return result;
}

export default function BeeperCodeLookup() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<'lookup' | 'encode'>('lookup');

  const lookupResult = useMemo(() => {
    const trimmed = input.trim();
    if (!trimmed) return null;
    const normalized = trimmed.replace(/[^0-9]/g, '');
    return beeperCodes[normalized] || null;
  }, [input]);

  const encodeResult = useMemo(() => {
    const trimmed = input.trim();
    if (!trimmed) return null;
    return textToKeypad(trimmed);
  }, [input]);

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <button
          onClick={() => setMode('lookup')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            mode === 'lookup'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          Code Lookup
        </button>
        <button
          onClick={() => setMode('encode')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            mode === 'encode'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          Text to Keypad
        </button>
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={mode === 'lookup' ? 'Enter beeper code (e.g., 143)' : 'Enter text to convert'}
        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-900 text-gray-900 dark:text-white font-mono focus:ring-2 focus:ring-primary-500"
      />

      {mode === 'lookup' && lookupResult && (
        <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Meaning:</p>
          <p className="text-lg font-semibold text-gray-900 dark:text-white">{lookupResult}</p>
        </div>
      )}

      {mode === 'lookup' && input.trim() && !lookupResult && (
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-yellow-700 dark:text-yellow-400">
            Code not found in common beeper codes. Try another number or use Text to Keypad mode.
          </p>
        </div>
      )}

      {mode === 'encode' && encodeResult && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">Phone keypad sequence:</p>
          <p className="text-lg font-mono font-semibold text-gray-900 dark:text-white">{encodeResult}</p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        {Object.entries(beeperCodes).slice(0, 9).map(([code, meaning]) => (
          <button
            key={code}
            onClick={() => {
              setMode('lookup');
              setInput(code);
            }}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            <span className="font-mono font-bold">{code}</span>
            <span className="text-gray-500 dark:text-gray-400 text-xs block truncate">{meaning}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
