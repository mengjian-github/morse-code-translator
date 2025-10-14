import type { Metadata } from 'next';
import Link from 'next/link';
import HexToMorseConverter from '../components/HexToMorseConverter';

export const metadata: Metadata = {
  title: 'Hexadecimal to Morse Code Converter - Hex Cipher Tool',
  description: 'Convert hexadecimal strings to morse code with our hex cipher tool. Translate hex bytes to ASCII, send dits and dahs, and explore flexible encoding workflows.',
  keywords: ['hexadecimal cipher', 'hex to morse', 'hex code converter', 'hexadecimal to morse code'],
  alternates: {
    canonical: 'https://morsecodetranslator.app/hexadecimal-cipher'
  }
};

export default function HexadecimalCipherPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="text-primary-600 dark:text-primary-400">Hexadecimal</span> to Morse Code Converter
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Convert hexadecimal code to morse code instantly. Perfect for programmers, cryptographers, and anyone working with hex data encoding.
        </p>
      </div>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Hexadecimal to Morse Converter Essentials
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              The hexadecimal to morse converter bridges raw byte streams and audible CW practice, and the hexadecimal to morse converter presents every step in plain language. With repeatable workflows, the hexadecimal to morse converter keeps hardware labs, classrooms, and hobby projects aligned.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Byte visualizer</strong>
                <span>The hexadecimal to morse converter shows ASCII equivalents before you turn bytes into dits and dahs.</span>
              </li>
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Firmware testing</strong>
                <span>Engineers export diagnostic bytes through the hexadecimal to morse converter for low-bandwidth logging.</span>
              </li>
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">STEM alignment</strong>
                <span>Teachers illustrate base conversions by pairing the hexadecimal to morse converter with binary demos.</span>
              </li>
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Security drills</strong>
                <span>Analysts trace payload patterns with the hexadecimal to morse converter to spot obfuscated beacons.</span>
              </li>
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Accessible outputs</strong>
                <span>Audio and text exports from the hexadecimal to morse converter keep mixed teams in sync.</span>
              </li>
              <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Rapid iteration</strong>
                <span>Paste live sensor data into the hexadecimal to morse converter to hear transmissions instantly.</span>
              </li>
            </ul>
            <p>
              Whether you monitor IoT devices or decode retro challenge caches, the hexadecimal to morse converter keeps every translation reproducible. Save presets inside the hexadecimal to morse converter to standardize lab procedures and teaching plans.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <HexToMorseConverter />
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Hexadecimal to Morse Conversion
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Hexadecimal to morse code conversion bridges modern computing with classic telecommunications. Hexadecimal (hex) is a base-16 numbering system using digits 0-9 and letters A-F, commonly used in programming to represent binary data compactly. Our hexadecimal cipher converter translates hex values to ASCII text, then encodes that text in morse code, enabling morse code transmission of hex-encoded data.
            </p>
            <p>
              In hex to morse conversion, each pair of hexadecimal digits represents one byte (8 bits) or ASCII character. For example, hex "48" equals decimal 72, which represents "H" in ASCII encoding. Our hex cipher tool converts "48" to "H", then to morse code "....". This multi-step conversion allows programmers to encode hex dumps, memory addresses, color codes, and other hexadecimal data into transmittable morse code signals.
            </p>
            <p>
              Understanding hexadecimal cipher conversion is valuable across multiple technical domains. Software developers debugging programs can convert hex error codes to morse for audio output, helping identify issues without screen access. Hardware engineers testing embedded systems use hex to morse converters to verify device memory contents through audio morse code beacons. Security researchers analyzing malware might encounter hex-encoded morse patterns as an obfuscation technique. Network administrators troubleshooting protocols decode hex packet data to understand transmission patterns.
            </p>
            <p>
              The hexadecimal to morse code converter demonstrates how information maintains integrity across different representation systems. Whether data exists as bits in computer memory, hex digits in programmer tools, ASCII text in documents, or morse code beeps in audio signals, the underlying information remains consistent. This flexibility makes hex cipher conversion valuable for bridging communication gaps between digital systems and human-readable morse code outputs.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Hexadecimal Basics for Morse Encoding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Hex Digit Values
              </h3>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex justify-between"><span>0-9:</span><span className="text-primary-600 dark:text-primary-400">Decimal values 0-9</span></div>
                <div className="flex justify-between"><span>A:</span><span className="text-primary-600 dark:text-primary-400">Decimal 10</span></div>
                <div className="flex justify-between"><span>B:</span><span className="text-primary-600 dark:text-primary-400">Decimal 11</span></div>
                <div className="flex justify-between"><span>C:</span><span className="text-primary-600 dark:text-primary-400">Decimal 12</span></div>
                <div className="flex justify-between"><span>D:</span><span className="text-primary-600 dark:text-primary-400">Decimal 13</span></div>
                <div className="flex justify-between"><span>E:</span><span className="text-primary-600 dark:text-primary-400">Decimal 14</span></div>
                <div className="flex justify-between"><span>F:</span><span className="text-primary-600 dark:text-primary-400">Decimal 15</span></div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Common Hex Examples
              </h3>
              <div className="space-y-2 text-sm">
                <div><span className="font-mono font-bold">0x48</span> → "H" → <span className="font-mono">....</span></div>
                <div><span className="font-mono font-bold">0x41</span> → "A" → <span className="font-mono">.-</span></div>
                <div><span className="font-mono font-bold">0xFF</span> → (255/extended ASCII)</div>
                <div><span className="font-mono font-bold">0x20</span> → (space) → <span className="font-mono">/</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Use Cases for Hexadecimal Cipher Conversion
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 dark:bg-purple-700 text-white rounded-lg flex items-center justify-center text-2xl">
                💻
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Software Debugging & Development
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Programmers use hex to morse converters when debugging systems without visual displays. Embedded systems, headless servers, and IoT devices can output hex error codes as morse code beeps, allowing developers to diagnose issues through audio alone. Hex cipher conversion makes debugging possible in environments where screen output isn&apos;t available.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 dark:bg-purple-700 text-white rounded-lg flex items-center justify-center text-2xl">
                🔧
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Hardware Testing & Verification
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Hardware engineers test memory chips, firmware, and circuit boards using hex to morse conversion. Devices can broadcast memory contents as morse code, allowing engineers to verify data integrity without complex test equipment. Hexadecimal cipher tools enable audio-based hardware verification, particularly useful for field testing and embedded systems diagnostics.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 dark:bg-purple-700 text-white rounded-lg flex items-center justify-center text-2xl">
                🔐
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Security Research & Cryptography
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Security professionals encounter hex-encoded data regularly: hash values, cryptographic keys, malware signatures, and network packet dumps. Converting hexadecimal cipher data to morse code allows audio transmission of sensitive information through air-gapped systems or in environments where digital transfer isn&apos;t secure. Hex to morse converters support secure communication protocols in high-security settings.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 dark:bg-purple-700 text-white rounded-lg flex items-center justify-center text-2xl">
                🎨
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Creative Encoding Projects
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Artists and educators use hexadecimal to morse conversion in interactive installations, escape rooms, and STEM projects. Color codes (like #FF5733 for colors in web design) can encode messages in morse, creating multi-layered puzzles. Hex cipher conversion enables creative projects that combine digital art, programming concepts, and classic morse code communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Hex Encoding Examples
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Example 1: Simple Text</div>
              <div className="font-mono text-sm space-y-1">
                <div><span className="text-gray-500">Hex:</span> 48 45 4C 4C 4F</div>
                <div><span className="text-gray-500">Text:</span> HELLO</div>
                <div><span className="text-gray-500">Morse:</span> .... . .-.. .-.. ---</div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Example 2: With Numbers</div>
              <div className="font-mono text-sm space-y-1">
                <div><span className="text-gray-500">Hex:</span> 53 4F 53 32 30 32 35</div>
                <div><span className="text-gray-500">Text:</span> SOS2025</div>
                <div><span className="text-gray-500">Morse:</span> ... --- ... ..--- ----- ..--- ..... </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-slate-900 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Example 3: Color Code</div>
              <div className="font-mono text-sm space-y-1">
                <div><span className="text-gray-500">Hex:</span> 23 46 46 35 37 33 33</div>
                <div><span className="text-gray-500">Text:</span> #FF5733</div>
                <div><span className="text-gray-500">Note:</span> Web color codes can encode messages!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-primary-100 dark:bg-primary-900/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            More Encoding Converters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/binary-to-morse" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">💾</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Binary to Morse</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert binary code to morse</p>
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">🔤</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Text to Morse</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Standard text conversion</p>
              </div>
            </Link>
            <Link href="/identifier-encoder" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">🏷️</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Identifier Encoder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Encode device IDs and tags</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
