'use client';

import { getMorseCodeMap } from '../utils/morseCode';

export default function MorseCodeChart() {
  const morseMap = getMorseCodeMap();
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const numbers = '0123456789'.split('');
  const punctuation = ['.',',','?',"'",'!','/','(',')','&',':',';','=','+','-','_','"','$','@'];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Morse Code Reference Chart
      </h2>

      {/* Letters */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Letters</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {letters.map(letter => (
            <div key={letter} className="flex items-center justify-between p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <span className="font-bold text-gray-900 dark:text-white">{letter}</span>
              <span className="font-mono text-primary-700 dark:text-primary-400">{morseMap[letter]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Numbers */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Numbers</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {numbers.map(number => (
            <div key={number} className="flex items-center justify-between p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <span className="font-bold text-gray-900 dark:text-white">{number}</span>
              <span className="font-mono text-primary-700 dark:text-primary-400">{morseMap[number]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Punctuation */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Punctuation & Special Characters</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {punctuation.map(char => (
            <div key={char} className="flex items-center justify-between p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <span className="font-bold text-gray-900 dark:text-white">{char}</span>
              <span className="font-mono text-primary-700 dark:text-primary-400">{morseMap[char]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 p-4 bg-gray-50 dark:bg-slate-900 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key:</h4>
        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
          <p><span className="font-mono font-bold">.</span> = Dot (short signal)</p>
          <p><span className="font-mono font-bold">-</span> = Dash (long signal, 3× dot length)</p>
          <p><span className="font-mono font-bold">/</span> = Space between words</p>
        </div>
      </div>
    </div>
  );
}
