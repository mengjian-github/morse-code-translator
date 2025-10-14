import type { Metadata } from 'next';
import Link from 'next/link';
import WordDecoderConverter from '../components/WordDecoderConverter';
import ScrollToTopButton from '../components/ScrollToTopButton';

export const metadata: Metadata = {
  title: 'Word Decoder & Cryptogram Solver - Caesar Cipher, Substitution Cipher & Morse',
  description: 'Free online word decoder and cryptogram solver. Decode Caesar cipher, substitution cipher, and morse code puzzles. Solve cryptograms and encrypted word puzzles with our alphabet code solver.',
  keywords: ['word decoder', 'cryptogram alphabet code solver', 'caesar cipher decoder', 'substitution cipher solver', 'cryptogram solver', 'decode cipher', 'puzzle decoder'],
  alternates: {
    canonical: 'https://morsecodetranslator.app/word-decoder'
  },
  openGraph: {
    title: 'Word Decoder & Cryptogram Solver - Decode Ciphers and Morse Code',
    description: 'Solve cryptograms, Caesar ciphers, and morse code puzzles with our free word decoder tool.',
    url: 'https://morsecodetranslator.app/word-decoder',
  }
};

export default function WordDecoderPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Word Decoder & Cryptogram Solver',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free online tool to decode words, solve cryptograms, and translate various cipher types including morse code.',
    url: 'https://morsecodetranslator.app/word-decoder'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-primary-600 dark:text-primary-400">Word Decoder</span> & Cryptogram Solver
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Solve cryptograms, decode Caesar ciphers, crack substitution ciphers, and translate morse code puzzles. Your complete word decoder and alphabet code solver for puzzle enthusiasts.
          </p>
        </section>

        <section className="mb-16">
          <WordDecoderConverter />
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Understanding Word Decoding and Cryptograms
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Word decoding and cryptogram solving represent foundational skills in cryptography and puzzle-solving. A cryptogram is a type of puzzle where text has been encrypted using a substitution cipher, replacing each letter with another letter, number, or symbol. The word decoder challenge lies in determining which substitutions were made and reversing them to reveal the original message. Cryptogram alphabet code solvers use pattern recognition, letter frequency analysis, and linguistic knowledge to crack these encrypted messages without needing the original cipher key.
              </p>
              <p>
                Caesar cipher decoding represents the simplest form of substitution cipher where the entire alphabet shifts by a fixed number of positions. Named after Julius Caesar who reportedly used this technique for military communications, a Caesar cipher with shift 3 converts A to D, B to E, C to F, and so forth. Our word decoder includes Caesar cipher tools that can test all 25 possible shift values instantly, revealing which shift produces readable English text. This brute-force approach works because there are only limited Caesar cipher possibilities, making it an excellent introduction to cryptography for students and puzzle beginners.
              </p>
              <p>
                Substitution cipher solving requires more sophisticated techniques than simple Caesar cipher decoding because each letter can map to any other letter, creating 26 factorial possible combinations. Cryptogram alphabet code solvers succeed by analyzing letter frequency patterns in the encrypted text. In English, letters E, T, A, O, I, N appear most frequently, while Q, X, Z occur rarely. By identifying which encrypted symbols appear most often and comparing against known English letter frequencies, skilled cryptogram solvers can deduce likely letter mappings. Our word decoder tool helps visualize these frequency patterns to accelerate cryptogram solving.
              </p>
              <p>
                Morse code decoding connects with traditional cryptography through its historical use in secret communications and modern puzzle applications. While morse code technically represents encoding rather than encryption, cryptogram creators often combine morse code with other cipher techniques for layered puzzles. A message might first undergo Caesar cipher encryption, then convert to morse code, requiring solvers to decode morse code first and then apply cryptogram solving techniques. Our integrated word decoder handles these multi-step decoding challenges by providing tools for morse translation alongside cipher solving capabilities.
              </p>
              <p>
                Educational applications of word decoding and cryptogram solving extend across multiple subjects. Mathematics teachers use cryptograms to teach probability and statistics through frequency analysis. Language arts educators employ code-breaking exercises to reinforce spelling, vocabulary, and pattern recognition skills. History classes explore how cryptography influenced warfare and diplomacy throughout history. Computer science students learn fundamental encryption concepts by manually solving cryptograms before studying modern algorithmic approaches. Puzzle clubs and escape room enthusiasts develop word decoder skills for recreational challenges that combine logic with linguistic knowledge.
              </p>
              <p>
                Modern cryptogram solvers and word decoders serve practical purposes beyond puzzles. Linguists studying ancient texts use cryptanalysis techniques when encountering unknown writing systems. Genealogists decoding historical letters may encounter simple ciphers in personal correspondence. Geocaching enthusiasts regularly solve cryptogram-based cache puzzles requiring word decoder skills. Security professionals learn vulnerability assessment by understanding how easily basic substitution ciphers break under systematic analysis. The word decoder and cryptogram solver tools we provide offer both educational value for learners and practical utility for puzzle solvers across diverse applications.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              How to Use the Word Decoder & Cryptogram Solver
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Select Decoder Type
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Choose which type of code you want to decode: morse code to text, Caesar cipher with shift value, or substitution cipher cryptogram. Each decoder type uses different algorithms optimized for that specific encoding method.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Enter Encoded Text
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Paste or type your encrypted message, morse code pattern, or cryptogram puzzle into the input field. The word decoder automatically detects patterns and begins analysis as you type.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Adjust Settings and Solve
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    For Caesar cipher, adjust the shift value to find the correct decoding. For substitution ciphers, use the frequency analysis hints to map letters. The cryptogram alphabet code solver updates results in real-time as you make changes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Copy Decoded Message
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Once the word decoder reveals the original message, use the copy button to save your decoded text. Perfect for puzzle competitions, escape rooms, geocaching, or educational exercises where you need to submit answers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Cryptogram Solving Techniques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Letter Frequency Analysis
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Count how often each encrypted letter appears. The most common encrypted letters likely represent E, T, A, O, I, or N in English. Single-letter words are usually A or I. This statistical approach forms the foundation of cryptogram alphabet code solving.
                </p>
              </div>

              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Pattern Recognition
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Look for repeated letter patterns. Three-letter words ending in the same letter might be THE or AND. Double letters often represent LL, EE, OO, or SS. Common word patterns help word decoders identify likely substitutions quickly.
                </p>
              </div>

              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Word Structure Clues
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Apostrophes often indicate contractions like IT&apos;S, DON&apos;T, or I&apos;M. Words ending in -ING, -TION, or -LY provide multiple letter confirmations at once. These structural hints accelerate cryptogram solving significantly.
                </p>
              </div>

              <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Context and Common Sense
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  After making initial letter substitutions, read the partially decoded text and use context to guess remaining letters. Common phrases and logical sentence structure guide final word decoder decisions when statistical methods alone are insufficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Types of Ciphers and Codes
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Caesar Cipher (Shift Cipher)
                </h3>
                <p>
                  The simplest substitution cipher where each letter shifts by a fixed number of positions in the alphabet. With only 25 possible shifts, Caesar cipher decoding is straightforward using brute force testing. Historical yet still popular in puzzles and educational settings for teaching basic cryptography concepts.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Substitution Cipher (Cryptogram)
                </h3>
                <p>
                  More complex than Caesar cipher, substitution ciphers map each letter to any other letter without a simple pattern. Cryptogram alphabet code solvers must use frequency analysis and pattern recognition. Newspaper puzzle sections often feature daily cryptograms that challenge word decoder skills while providing entertainment and mental exercise.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Morse Code
                </h3>
                <p>
                  While technically encoding rather than encryption, morse code translates letters to dot-dash patterns. Morse code decoding requires knowing the international morse alphabet. Often combined with traditional ciphers in puzzle contexts, requiring multi-step word decoder approaches for complete message revelation.
                </p>
              </div>

              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  ROT13 Cipher
                </h3>
                <p>
                  A special case of Caesar cipher with 13-position shift. ROT13 is self-inverse, meaning encoding and decoding use the same operation. Popular in online forums for hiding spoilers and puzzle solutions. Simple enough for manual word decoder application, yet effective for casual obfuscation purposes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Common Cryptogram Uses and Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Puzzle Games & Entertainment
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Newspaper cryptogram puzzles, mobile puzzle apps, escape room challenges, and mystery games all feature coded messages. Word decoder skills turn cryptograms from frustrating obstacles into enjoyable brain teasers that provide satisfaction when solved.
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Educational Cryptography
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Schools teach cryptography fundamentals through cryptogram solving exercises. Students learn about frequency analysis, pattern recognition, and basic encryption concepts. Cryptogram alphabet code solver experience provides foundation for understanding modern cybersecurity.
                </p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Geocaching & Treasure Hunts
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Geocache coordinates and treasure hunt clues frequently use ciphers requiring word decoder tools. Puzzle caches combine GPS technology with cryptography, creating intellectual challenges beyond simple navigation. Successful cachers develop strong cryptogram solving abilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions About Word Decoding
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  What is the difference between encoding and encryption?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Encoding transforms data into different formats using publicly known methods (like morse code or Base64) without security intent. Encryption scrambles data to hide meaning using secret keys, providing security. Word decoders handle both: morse code represents encoding, while Caesar and substitution ciphers are simple encryption. Modern encryption uses complex algorithms far beyond basic cryptogram alphabet code solvers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  How long does it take to solve a cryptogram?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Cryptogram solving time depends on message length, cipher complexity, and solver experience. Beginners might spend 20-30 minutes on newspaper cryptograms, while experienced solvers finish in 5-10 minutes. Caesar cipher decoding takes seconds with our word decoder tool testing all shifts. Complex substitution ciphers with short messages lacking frequency patterns can take much longer.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Can cryptogram solvers crack any substitution cipher?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Cryptogram alphabet code solvers work best with messages containing at least 50-100 characters, providing sufficient data for frequency analysis. Very short messages lack statistical patterns making solving difficult. Messages in languages other than English require different frequency tables. Random character strings without linguistic structure cannot be solved since they lack patterns that word decoders exploit.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Are simple ciphers like Caesar and substitution still secure?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  No. Caesar cipher and basic substitution ciphers provide no real security in the digital age. Word decoder tools and even manual cryptanalysis crack these ciphers easily. They serve educational and entertainment purposes but should never protect sensitive information. Modern encryption uses algorithms like AES that resist even powerful computer-based attacks, unlike simple cryptograms that succumb to frequency analysis.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  How can I improve my cryptogram solving skills?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Practice regularly with daily newspaper cryptograms or online puzzle sites. Learn English letter frequency order (ETAOIN SHRDLU). Study common word patterns and frequently used short words. Start with easier puzzles and gradually increase difficulty. Use our word decoder tool to check your solutions and understand where your reasoning went wrong. Join puzzle communities to learn techniques from experienced cryptogram solvers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Related Decoding Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Morse Code Translator
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Decode morse code to text and encode text to morse with audio playback.
              </p>
            </Link>

            <Link href="/cryptic-code-translator" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cryptic Code Translator
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced cipher tools for decrypting complex encoding schemes and layered ciphers.
              </p>
            </Link>

            <Link href="/binary-to-morse" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Binary to Morse Converter
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Decode binary code to morse for multi-layer encoding puzzle challenges.
              </p>
            </Link>

            <Link href="/hexadecimal-cipher" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Hexadecimal Cipher
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convert hexadecimal codes to text and morse for programmer puzzles.
              </p>
            </Link>

            <Link href="/picture-decoder" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Picture Decoder
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Extract and decode morse code or ciphers from images and photographs.
              </p>
            </Link>

            <Link href="/beeper-code" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Beeper Code Decoder
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Decode numeric beeper codes and phone keypad messages to text.
              </p>
            </Link>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Solving Cryptograms and Decoding Words Now
          </h2>
          <p className="text-xl text-primary-50 mb-6 max-w-2xl mx-auto">
            Free cryptogram alphabet code solver and word decoder for Caesar cipher, substitution cipher, and morse code puzzles.
          </p>
          <ScrollToTopButton />
        </section>
      </div>
    </>
  );
}
