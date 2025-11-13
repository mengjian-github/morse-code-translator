import type { Metadata } from 'next';
import Link from 'next/link';
import { absoluteUrl, buildOpenGraphMeta } from '@/app/utils/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Beeper & Phone Keypad Decoder | Morse Converter',
  },
  description:
    'Turn beeper or keypad number sequences into Morse or text, compare tone outputs, and share decoded messages instantly.',
  keywords: ['beeper code', 'phone keypad decoder', 'T9 decoder', 'pager code', 'numeric code decoder'],
  alternates: {
    canonical: absoluteUrl('/beeper-code')
  },
  openGraph: buildOpenGraphMeta({
    title: 'Beeper & Phone Keypad Decoder | Morse Converter',
    description:
      'Turn beeper or keypad number sequences into Morse or text, compare tone outputs, and share decoded messages instantly.',
    url: absoluteUrl('/beeper-code'),
  }),
};

export default function BeeperCodePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="text-primary-600 dark:text-primary-400">Beeper Code</span> & Phone Keypad Decoder
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Decode beeper codes, phone keypad messages, and T9 text input. Explore the history of numeric communication methods from pagers to early mobile phones.
        </p>
      </div>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Beeper Code Decoder Quick Reference
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Our beeper code decoder chronicles pager culture, and the beeper code decoder format keeps every numeric phrase easy to read. By combining historic examples with modern translations, the beeper code decoder makes pager-era communication accessible again.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Classic expressions</strong>
                <span>The beeper code decoder translates iconic pager slang like 143, 911, and 459 into clear modern language.</span>
              </li>
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Cross-device context</strong>
                <span>Compare how the beeper code decoder relates pager shortcuts to phone keypad habits and T9 typing.</span>
              </li>
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">History preserved</strong>
                <span>Use the beeper code decoder to document family anecdotes, journalism projects, and retro tech exhibits.</span>
              </li>
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Puzzle support</strong>
                <span>Escape rooms and ARG designers rely on the beeper code decoder to craft numeric clue paths.</span>
              </li>
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">STEM learning</strong>
                <span>Teachers integrate the beeper code decoder into lessons about constrained communication systems.</span>
              </li>
            </ul>
            <p>
              Whether you are decoding pager transcripts or cataloging old voicemail alerts, the beeper code decoder keeps every numeric phrase grounded in real context. Try the beeper code decoder with custom number strings to see how flexible the translator can be.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Beeper and Phone Keypad Codes
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Beeper code, also called pager code, was a numeric communication system used before text messaging became widespread. Pagers (beepers) could only display numbers, so users developed creative ways to encode messages using numeric codes. Simple beeper codes like "143" (I love you: 1 letter, 4 letters, 3 letters) and "911" (emergency) became part of 1990s communication culture. Our beeper code decoder helps you understand these historical numeric messages.
            </p>
            <p>
              Phone keypad decoding relates to T9 (Text on 9 keys) predictive text input used on early mobile phones. Before touchscreen smartphones, phones had numeric keypads where each number key represented multiple letters: 2=ABC, 3=DEF, 4=GHI, etc. Users pressed keys multiple times to cycle through letters, or used T9 predictive text that guessed words from number sequences. Our phone keypad decoder translates these numeric sequences back to text.
            </p>
            <p>
              The connection between beeper codes, phone keypads, and morse code lies in constrained communication. All three systems emerged from limitations: telegraph technology for morse code, numeric displays for beeper code, and button-only interfaces for phone keypad text. Understanding beeper code decoder methods reveals how users adapt to technological constraints, creating efficient communication protocols within system limitations.
            </p>
            <p>
              Modern applications of beeper code and phone keypad decoding include: decoding vintage pager messages in historical research, solving retro-themed puzzles and escape rooms, understanding T9 patents and mobile phone evolution, and appreciating how communication technology progressed from numeric codes to today&apos;s emoji-rich messaging. Our beeper code and phone keypad decoder tools preserve these important communication history artifacts.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Common Beeper Codes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="font-mono text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">911</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Emergency / Call me now</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="font-mono text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">143</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">I love you (1-4-3 letters)</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="font-mono text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">187</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Police code for murder</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="font-mono text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">411</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Information (directory assistance)</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="font-mono text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">420</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Marijuana culture reference</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="font-mono text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">1437</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">I love you forever (letters)</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="font-mono text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">07734</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">"HELLO" upside down on calculator</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="font-mono text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">823</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Thinking of you</div>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
              <div className="font-mono text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">555</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">Fake phone number prefix</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Phone Keypad Layout (T9)
          </h2>
          <div className="max-w-md mx-auto">
            <div className="grid grid-cols-3 gap-3">
              {[
                {key: '1', chars: ''},
                {key: '2', chars: 'ABC'},
                {key: '3', chars: 'DEF'},
                {key: '4', chars: 'GHI'},
                {key: '5', chars: 'JKL'},
                {key: '6', chars: 'MNO'},
                {key: '7', chars: 'PQRS'},
                {key: '8', chars: 'TUV'},
                {key: '9', chars: 'WXYZ'},
                {key: '*', chars: '+'},
                {key: '0', chars: 'space'},
                {key: '#', chars: ''}
              ].map((item) => (
                <div key={item.key} className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl p-4 text-center shadow-md">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{item.key}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">{item.chars}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How T9 Works:</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Press each key once for the desired letter. For "HELLO": press 4-3-5-5-6. T9 predictive text uses a dictionary to guess words from number sequences. Multi-tap mode requires pressing keys multiple times: 4-4 for "H", 3-3 for "E", etc.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            From Beeper to Morse: Evolution of Constrained Communication
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                1840s
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Morse Code Telegraph</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  First electrical communication system using dots and dashes. Operators learned morse code to send messages over telegraph wires.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                1950s
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Early Pagers</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  First paging systems only provided tones. Later numeric pagers allowed sending phone numbers and beeper codes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                1990s
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Beeper Code Culture</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Numeric pagers peaked in popularity. Beeper codes became a communication language among teenagers and professionals.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                2000s
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Mobile Phone T9 Text</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Feature phones with numeric keypads used T9 predictive text. Phone keypad decoder skills became essential for texting.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                2010s+
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Touchscreen Era</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Smartphones with full keyboards replaced numeric keypads. Beeper codes and T9 became nostalgic artifacts of communication history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-primary-100 dark:bg-primary-900/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Explore More Communication Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">📡</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Morse Code Translator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">The original constrained communication</p>
              </div>
            </Link>
            <Link href="/binary-to-morse" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">💻</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Binary to Morse</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Digital encoding methods</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
