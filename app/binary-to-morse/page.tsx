import type { Metadata } from 'next';
import Link from 'next/link';
import BinaryToMorseConverter from '../components/BinaryToMorseConverter';
import { absoluteUrl, buildOpenGraphMeta } from '@/app/utils/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Binary to Morse Converter | Instant Binary Decoder',
  },
  description:
    'Convert binary strings to Morse audio and text in one click, preview the tone, and copy clean output for homework, puzzles, or radio practice.',
  keywords: ['binary to morse', 'binary to morse code', 'convert binary to morse', 'binary code converter', 'morse code binary'],
  alternates: {
    canonical: absoluteUrl('/binary-to-morse')
  },
  openGraph: buildOpenGraphMeta({
    title: 'Binary to Morse Converter | Instant Binary Decoder',
    description:
      'Convert binary strings to Morse audio and text in one click, preview the tone, and copy clean output for homework, puzzles, or radio practice.',
    url: absoluteUrl('/binary-to-morse'),
  }),
};

export default function BinaryToMorsePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Binary to <span className="text-primary-600 dark:text-primary-400">Morse Code Converter</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Convert binary code to morse code instantly with our free online binary to morse converter. Perfect for programmers, students, and encoding enthusiasts.
        </p>
      </div>

      <section className="mb-16">
        <BinaryToMorseConverter />
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Binary to Morse Code Conversion
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Binary to morse code conversion is a two-step process that bridges digital computing with classic telecommunications. Binary code, the fundamental language of computers, uses only two digits: 0 and 1. Our binary to morse code converter first translates binary numbers into text characters, then converts those characters into morse code patterns using dots and dashes.
            </p>
            <p>
              In binary to morse conversion, each 8-bit binary sequence (byte) represents a single character in ASCII encoding. For example, the binary code "01001000" equals 72 in decimal, which represents the letter "H" in ASCII. Our binary to morse code tool then converts "H" to "....", its morse code equivalent. This dual conversion process allows binary data from computers to be transmitted using traditional morse code communication methods.
            </p>
            <p>
              Understanding binary to morse code translation is valuable for several applications. Computer science students learning about data encoding can visualize how binary information translates across different communication protocols. Amateur radio enthusiasts can convert digital messages to morse code for transmission. Security researchers studying steganography explore binary to morse conversion as a method for encoding hidden messages. Puzzle creators use binary to morse code converters to design challenging cryptographic puzzles.
            </p>
            <p>
              The binary to morse code conversion process demonstrates the universal nature of information encoding. Whether data exists as electrical signals in computer circuits, radio waves in amateur communication, or audio tones in morse code, the underlying information remains consistent. Our free binary to morse converter makes this transformation accessible, allowing anyone to explore the connection between modern digital encoding and historical telecommunication methods.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            How to Use the Binary to Morse Converter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Step 1: Enter Binary Code
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Type or paste binary numbers into the input field. Use 8-bit binary sequences separated by spaces. For example: 01001000 01000101 01001100 01001100 01001111
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Step 2: View Text Translation
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                The converter automatically translates your binary code to readable text using ASCII encoding, showing the intermediate step in the conversion process.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Step 3: Get Morse Code Output
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                The binary to morse converter displays the final morse code translation using standard international morse code notation with dots, dashes, and spacing.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Step 4: Copy or Play Audio
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Use the copy button to save your morse code, or play the audio to hear the morse code beeps. Perfect for learning and verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Common Binary to Morse Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Educational Projects
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Students learning about encoding systems use binary to morse converters to understand how different communication protocols interact and translate information.
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Amateur Radio Communication
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Radio operators convert digital data to morse code for transmission, especially useful when integrating computer systems with traditional radio equipment.
              </p>
            </div>
            <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Puzzle Design & Geocaching
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Puzzle creators and geocache designers use binary to morse code conversion to create multi-layered encoding challenges that require multiple decryption steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Binary Code Basics
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Binary code is the most fundamental language of digital computers and electronics. Using only two values - typically represented as 0 and 1, or "off" and "on" - binary code can represent any type of information. In computing, binary to morse code conversion typically uses 8-bit bytes where each byte represents one ASCII character.
            </p>
            <p>
              The ASCII (American Standard Code for Information Interchange) system assigns binary values to text characters. Capital letter "A" is binary "01000001" (decimal 65), "B" is "01000010" (decimal 66), and so on. Our binary to morse code converter uses this standard ASCII mapping to translate binary digits into letters, numbers, and symbols before converting to morse code.
            </p>
            <p>
              When using a binary to morse code tool, understanding bit order is important. Most binary to morse converters expect binary input in 8-bit groups (bytes), with the most significant bit first. Each space-separated group of 8 binary digits converts to one character, which then becomes morse code. This standardization ensures consistent binary to morse code translation across different tools and platforms.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-primary-100 dark:bg-primary-900/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Related Encoding Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">↔️</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Text to Morse Translator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert regular text to morse code</p>
              </div>
            </Link>
            <Link href="/hexadecimal-cipher" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">🔢</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Hexadecimal to Morse</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Convert hex code to morse patterns</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
