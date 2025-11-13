import type { Metadata } from 'next';
import Link from 'next/link';
import { absoluteUrl, buildOpenGraphMeta } from '@/app/utils/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Cryptic Code Translator & Decoder | Morse Tools',
  },
  description:
    'Break encrypted messages online with a free cryptic code translator that supports Morse, substitution, and custom alphabets - no signup required.',
  keywords: ['cryptic code translator', 'decrypt online', 'cipher decoder', 'substitution cipher', 'caesar cipher', 'code breaker'],
  alternates: {
    canonical: absoluteUrl('/cryptic-code-translator')
  },
  openGraph: buildOpenGraphMeta({
    title: 'Cryptic Code Translator & Decoder | Morse Tools',
    description:
      'Break encrypted messages online with a free cryptic code translator that supports Morse, substitution, and custom alphabets - no signup required.',
    url: absoluteUrl('/cryptic-code-translator'),
  }),
};

export default function CrypticCodePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="text-primary-600 dark:text-primary-400">Cryptic Code</span> Translator & Decoder
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Decrypt and decode cryptic messages, substitution ciphers, and encoded text. Understand the difference between morse code and encryption ciphers.
        </p>
      </div>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Cryptic Code Translator Highlights
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              The cryptic code translator guides beginners through cipher basics, while the cryptic code translator dashboard gives experts quick access to deeper analysis. Every cryptic code translator workflow keeps morse code context close so you can compare encoding and encryption side-by-side.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Frequency insights</strong>
                <span>The cryptic code translator surfaces live frequency counts to accelerate substitution solving.</span>
              </li>
              <li className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Cipher comparisons</strong>
                <span>Switch between Caesar, Vigenère, and Atbash inside the cryptic code translator without losing your place.</span>
              </li>
              <li className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Classroom ready</strong>
                <span>Teachers use the cryptic code translator to demonstrate how encoding differs from encryption in real time.</span>
              </li>
              <li className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Puzzle support</strong>
                <span>Escape rooms plug the cryptic code translator into clue stations for dynamic cipher reveals.</span>
              </li>
              <li className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Research ready</strong>
                <span>Historians catalog intercepted telegrams with the cryptic code translator to cross-reference archival notes.</span>
              </li>
              <li className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-200 dark:border-primary-800">
                <strong className="block text-gray-900 dark:text-white mb-2">Accessibility focus</strong>
                <span>Keyboard shortcuts keep the cryptic code translator friendly for screen reader users decoding puzzles.</span>
              </li>
            </ul>
            <p>
              Whether you are auditing spycraft or prepping lesson plans, the cryptic code translator keeps every substitution trail organized. The cryptic code translator even stores practice scripts so clubs can revisit challenge drills whenever they meet. Keeping notes inside the cryptic code translator accelerates future solves.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 dark:bg-slate-900 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What can it decode?</h3>
                <p>The cryptic code translator handles monoalphabetic, polyalphabetic, and mixed ciphers alongside morse layers.</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-slate-900 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How fast is it?</h3>
                <p>Batch processing lets the cryptic code translator analyze entire puzzle packets without manual copy-paste.</p>
              </div>
              <div className="p-4 bg-gray-100 dark:bg-slate-900 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Who uses it?</h3>
                <p>Educators, puzzle clubs, and cybersecurity students all lean on the cryptic code translator to visualize cipher structure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Cryptic Codes vs. Morse Code
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Cryptic codes and morse code serve different purposes in communication. The cryptic code translator compares both approaches side by side so learners see the contrast immediately. Morse code is a character encoding system that represents letters, numbers, and punctuation using standardized patterns of dots and dashes. It&apos;s a transparent encoding method - anyone knowing morse code can decode the message. Cryptic codes, however, are encryption methods designed to hide message content from unauthorized readers, which is why the cryptic code translator emphasizes key differences.
            </p>
            <p>
              Our cryptic code translator helps you understand various cipher types used throughout history. Substitution ciphers replace each letter with another letter or symbol, like the Caesar cipher that shifts the alphabet by a fixed number. The ROT13 cipher, a special case of Caesar cipher with a 13-position shift, remains popular for hiding puzzle solutions and forum spoilers. More complex substitution ciphers use random letter mappings, requiring frequency analysis to crack. Interactive charts inside the cryptic code translator let you visualise these mappings instantly.
            </p>
            <p>
              While morse code translation is straightforward (each character has one morse pattern), cryptic code decryption often requires key knowledge or cryptanalysis techniques. Simple substitution ciphers can be broken through letter frequency analysis - "E" appears most frequently in English, followed by "T", "A", "O", and "I". Our cryptic code decoder tools help you practice these analysis techniques, understanding both historical encryption methods and modern cryptography basics, and the cryptic code translator bundles them into repeatable workflows.
            </p>
            <p>
              The combination of morse code and cryptic codes creates layered encoding. Some messages are first encrypted using a cipher, then encoded in morse code for transmission. This approach, used by military and intelligence services, provides both message secrecy (encryption) and reliable transmission (morse code). Understanding both encoding systems helps decode complex historical communications and appreciate how modern encryption evolved from classical cipher methods, and the cryptic code translator guides you through each stage.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Common Cipher Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🔄</span> Caesar Cipher
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Shifts each letter by a fixed number of positions in the alphabet. With shift 3, "HELLO" becomes "KHOOR".
              </p>
              <div className="p-3 bg-white/50 dark:bg-black/20 rounded font-mono text-xs">
                <div>Plain: ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <div>Shift 3: DEFGHIJKLMNOPQRSTUVWXYZABC</div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🔀</span> Substitution Cipher
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Each letter maps to a different letter or symbol. Requires a key for both encoding and decoding.
              </p>
              <div className="p-3 bg-white/50 dark:bg-black/20 rounded font-mono text-xs">
                <div>Plain: ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <div>Cipher: QWERTYUIOPASDFGHJKLZXCVBNM</div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🔁</span> ROT13
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Special Caesar cipher with 13-position shift. Applying ROT13 twice returns original text.
              </p>
              <div className="p-3 bg-white/50 dark:bg-black/20 rounded font-mono text-xs">
                <div>Plain: HELLO WORLD</div>
                <div>ROT13: URYYB JBEYQ</div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span> Atbash Cipher
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Reverses the alphabet: A↔Z, B↔Y, C↔X. Ancient Hebrew cipher still used in puzzles.
              </p>
              <div className="p-3 bg-white/50 dark:bg-black/20 rounded font-mono text-xs">
                <div>Plain: ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                <div>Atbash: ZYXWVUTSRQPONMLKJIHGFEDCBA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Cryptanalysis Techniques
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Frequency Analysis
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                In English text, certain letters appear more frequently. "E" occurs about 12.7% of the time, "T" about 9.1%, "A" about 8.2%. By analyzing letter frequency in encrypted text, you can identify likely substitutions. Short encrypted words are often "THE", "AND", "FOR" - common English words.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Most common English letters: E, T, A, O, I, N, S, H, R
              </div>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Pattern Recognition
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Look for repeating patterns in encrypted text. Double letters like "EE", "OO", "SS" are common in English. Three-letter words with repeating first and last letters often represent "THE" or "ANA". Word length patterns help identify common words, especially short ones with distinctive patterns.
              </p>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Known Plaintext Attack
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                If you know (or can guess) any words in the encrypted message, use them to determine letter mappings. Messages often contain predictable elements: greetings ("HELLO", "DEAR"), sign-offs ("REGARDS", "SINCERELY"), or context clues. Each discovered letter mapping reveals more of the cipher key.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Legal and Ethical Use Only
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                This cryptic code translator is designed for educational purposes, puzzle solving, and understanding historical encryption methods. Never use cryptanalysis tools to decrypt communications without authorization. Unauthorized access to encrypted data may violate computer fraud laws, wiretapping statutes, and privacy regulations. Use these tools responsibly for learning, legitimate puzzle solving, and authorized security research only.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <p className="text-gray-700 dark:text-gray-300">
            Keep a practice log inside the cryptic code translator after every puzzle. Reviewing past runs teaches you which cryptic code translator strategies work best, and sharing exports lets teammates replay the cryptic code translator steps without repeating mistakes.
          </p>
        </div>
      </section>

      <section>
        <div className="bg-primary-100 dark:bg-primary-900/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Explore More Encoding Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">📡</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Morse Code Translator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Transparent encoding system</p>
              </div>
            </Link>
            <Link href="/word-decoder" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">🔤</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Word Decoder</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Solve cryptogram puzzles</p>
              </div>
            </Link>
            <Link href="/binary-to-morse" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">💻</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Binary Converter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Digital encoding methods</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
