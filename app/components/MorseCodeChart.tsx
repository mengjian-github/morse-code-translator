'use client';

import { getMorseCodeMap } from '../utils/morseCode';

export default function MorseCodeChart() {
  const morseMap = getMorseCodeMap();
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const numbers = '0123456789'.split('');
  const punctuation = ['.',',','?','\'','!','/','(',')','&',':',';','=','+','-','_','"','$','@'];

  const renderCells = (items: string[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
      {items.map((symbol) => (
        <div key={symbol} className="flex items-center justify-between p-3 rounded-xl border border-[#e0e5ff] bg-white">
          <span className="font-bold text-[#0b1f3a]">{symbol}</span>
          <span className="font-plex text-[#0058a3]">{morseMap[symbol]}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="glass-panel--light rounded-3xl p-6 md:p-8">
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#8a94b7]">Reference</p>
          <h2 className="text-2xl font-bold text-[#0b1f3a]">Morse Code Reference Chart</h2>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0058a3]/10 text-[#0058a3] font-semibold text-sm">
          <span className="font-plex">· –</span> Instant cheat sheet
        </span>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#0b1f3a] mb-4">Letters</h3>
        {renderCells(letters)}
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#0b1f3a] mb-4">Numbers</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {numbers.map((number) => (
            <div key={number} className="flex items-center justify-between p-3 rounded-xl border border-[#e0e5ff] bg-white">
              <span className="font-bold text-[#0b1f3a]">{number}</span>
              <span className="font-plex text-[#0058a3]">{morseMap[number]}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#0b1f3a] mb-4">Punctuation & Special Characters</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {punctuation.map((char) => (
            <div key={char} className="flex items-center justify-between p-3 rounded-xl border border-[#e0e5ff] bg-white">
              <span className="font-bold text-[#0b1f3a]">{char}</span>
              <span className="font-plex text-[#0058a3]">{morseMap[char]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 rounded-2xl border border-[#e0e5ff] bg-white/90">
        <h4 className="font-semibold text-[#0b1f3a] mb-2">Key</h4>
        <div className="space-y-1 text-sm text-[#333]">
          <p><span className="font-plex font-bold">.</span> = Dot (short signal)</p>
          <p><span className="font-plex font-bold">-</span> = Dash (long signal, 3× dot length)</p>
          <p><span className="font-plex font-bold">/</span> = Space between words</p>
        </div>
      </div>
    </div>
  );
}
