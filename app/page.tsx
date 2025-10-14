import type { Metadata } from 'next';
import MorseTranslator from './components/MorseTranslator';
import MorseCodeChart from './components/MorseCodeChart';
import ScrollToTopButton from './components/ScrollToTopButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Morse Code Translator - Free Online Morse Code Converter',
  description: 'Instant morse code translator with audio playback, downloads, and two-way text conversion. Practice CW, share messages, and explore learning tools now.',
  keywords: ['morse code translator', 'morse code converter', 'text to morse', 'morse to text', 'online morse translator', 'morse code audio', 'morse code decoder', 'morse code encoder'],
  alternates: {
    canonical: 'https://morsecodetranslator.app/'
  },
  openGraph: {
    title: 'Morse Code Translator - Free Online Morse Code Converter',
    description: 'Instant morse code translator with audio playback, downloads, and two-way text conversion. Practice CW, share messages, and explore learning tools now.',
    url: 'https://morsecodetranslator.app/',
  }
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Morse Code Translator',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free online morse code translator with real-time conversion, audio playback, and download capabilities.',
    url: 'https://morsecodetranslator.app/'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Free Online <span className="text-primary-600 dark:text-primary-400">Morse Code Translator</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Convert text to morse code and morse code to text instantly with our fast, free, and privacy-focused online morse code translator. Features real-time conversion, audio playback, and downloadable sound files.
          </p>
        </section>

        {/* Main Translator Tool */}
        <section className="mb-16">
          <MorseTranslator />
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Choose Our Morse Code Translator?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Instant Real-Time Translation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our morse code translator converts your text instantly as you type. No waiting, no delays - get your morse code translation in real-time with our fast browser-based converter.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Audio Playback & Download
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Listen to your morse code with high-quality audio playback. Download WAV files for offline use, perfect for learning morse code or amateur radio practice.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                100% Private & Secure
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All morse code translation happens in your browser. Your text never leaves your device, ensuring complete privacy and security for sensitive messages.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Mobile-Friendly Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Use our morse code translator on any device. Responsive design with large touch-friendly buttons makes encoding and decoding messages easy on phones and tablets.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Educational Resources
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn morse code with our comprehensive reference chart, tutorials, and practice tools. Perfect for students, teachers, and amateur radio enthusiasts.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Multiple Conversion Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Beyond basic morse code translation, we offer binary to morse, hex to morse, picture decoder, and other specialized converters for advanced users.
              </p>
            </div>
          </div>
        </section>

        {/* Morse Code Chart */}
        <section className="mb-16">
          <MorseCodeChart />
        </section>

        {/* About Morse Code */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What is Morse Code?
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Morse code is a character encoding method that represents letters, numbers, and punctuation marks using sequences of dots (short signals) and dashes (long signals). Developed in the 1830s and 1840s by Samuel Morse and Alfred Vail for use with the telegraph, this morse code translator system revolutionized long-distance communication.
              </p>
              <p>
                Each character in morse code has a unique pattern. For example, the letter "A" is represented as ".-" (dot-dash), while "B" is "-..." (dash-dot-dot-dot). The most famous morse code sequence is "SOS" (... --- ...), the international distress signal. Our online morse code converter makes it easy to translate any text into these distinctive patterns.
              </p>
              <p>
                Despite being developed nearly 200 years ago, morse code remains relevant today. Amateur radio operators use morse code for long-distance communication, especially in challenging conditions where voice transmission fails. The maritime industry still recognizes morse code distress signals. Military and aviation sectors continue training in morse code as a backup communication method. Our morse code translator helps modern users connect with this enduring communication standard.
              </p>
              <p>
                Learning morse code offers cognitive benefits beyond communication. Studies show that morse code training improves memory, pattern recognition, and auditory processing skills. It&apos;s an engaging way for students to learn about telecommunications history while developing useful mental skills. Teachers use our free morse code translator as an educational tool to make lessons interactive and memorable.
              </p>
            </div>
          </div>
        </section>

        {/* Why Our Translator Leads */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Why Our Morse Code Translator Leads the Pack
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                The morse code translator on this site delivers dependable performance, and the morse code translator workflow adapts to casual learners and serious radio operators alike. By focusing on accuracy and speed, our morse code translator eliminates extra steps so you can stay in the rhythm of dits and dahs.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                  <strong className="block text-gray-900 dark:text-white mb-2">Real CW practice</strong>
                  <span>The morse code translator mirrors on-air timing so your practice sessions feel authentic.</span>
                </li>
                <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                  <strong className="block text-gray-900 dark:text-white mb-2">Classroom friendly</strong>
                  <span>Teachers rely on the morse code translator for demonstrations that pair history with hands-on encoding.</span>
                </li>
                <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                  <strong className="block text-gray-900 dark:text-white mb-2">Field ready</strong>
                  <span>Operators testing antennas or field kits use the morse code translator to verify copy under pressure.</span>
                </li>
                <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                  <strong className="block text-gray-900 dark:text-white mb-2">Accessible design</strong>
                  <span>Screen reader support and keyboard shortcuts keep the morse code translator inclusive for every operator.</span>
                </li>
                <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                  <strong className="block text-gray-900 dark:text-white mb-2">Project integration</strong>
                  <span>Developers embed the morse code translator output into training dashboards, hackathon demos, and STEM showcases.</span>
                </li>
                <li className="p-4 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
                  <strong className="block text-gray-900 dark:text-white mb-2">Global reach</strong>
                  <span>Language-agnostic controls make the morse code translator effective for international teams learning CW together.</span>
                </li>
              </ul>
              <p>
                Whether you need a morse code translator for licensing exams or a morse code translator for quick classroom warmups, the tool stays responsive on every device. The morse code translator even caches previous sessions so you can revisit practice messages at any time.
              </p>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              How to Use Our Morse Code Translator
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Enter Your Text
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Type or paste any text into the input box. Our morse code converter supports all letters (A-Z), numbers (0-9), and common punctuation marks. The translation happens instantly as you type.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Get Instant Morse Code Translation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Watch as your text converts to morse code in real-time. Dots (.) represent short signals, dashes (-) represent long signals, and spaces separate letters. Use the copy button to save your morse code translation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Play or Download Audio
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Click "Play Audio" to hear your morse code message with authentic beep tones. Use "Download Audio" to save a WAV file for offline practice or sharing. Perfect for morse code learning and radio communication training.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 dark:bg-primary-700 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Decode Morse Code to Text
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Click the swap button to switch to morse code decoder mode. Enter morse code using dots and dashes with spaces between letters, and our translator will convert morse code back to readable text instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions About Morse Code
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Is your morse code translator free to use?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! Our morse code translator is completely free with no registration required. All features including text to morse conversion, morse to text decoding, audio playback, and file downloads are available at no cost. We believe everyone should have access to quality morse code translation tools.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  How accurate is this online morse code converter?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our morse code translator uses the International Morse Code standard, ensuring 100% accuracy for all supported characters. The conversion algorithm follows official morse code specifications used by amateur radio operators, military communications, and maritime services worldwide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Can I use this morse code translator offline?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! Once you&apos;ve loaded our website, the morse code translator works entirely in your browser using JavaScript. Your data never leaves your device, making it possible to use with poor internet connections. For complete offline use, you can bookmark the page and use it when needed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  What&apos;s the difference between dots and dashes in morse code?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  In morse code, a dot (.) is a short signal lasting one unit of time, while a dash (-) is a long signal lasting three units. The space between symbols within a character equals one dot duration, between characters equals three dots, and between words equals seven dots. Our morse code translator audio playback demonstrates these timing differences clearly.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Why should I learn morse code in 2025?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Morse code remains valuable for amateur radio licensing, emergency communications when modern systems fail, cognitive skill development, and as a fun encoding method for puzzles and games. It&apos;s also used in assistive technology for people with disabilities. Our morse code translator makes learning and practicing morse code accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More Morse Code Tools & Converters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/binary-to-morse" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Binary to Morse Converter
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convert binary code to morse code and explore digital encoding methods.
              </p>
            </Link>

            <Link href="/picture-decoder" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Morse Code Picture Decoder
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Upload images containing morse code and decode them automatically.
              </p>
            </Link>

            <Link href="/identifier-encoder" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Identifier Encoder
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Encode call signs, device IDs, and asset tags into morse code.
              </p>
            </Link>

            <Link href="/word-decoder" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Word Decoder & Cryptogram
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Solve word puzzles, substitution ciphers, and cryptograms with morse code.
              </p>
            </Link>

            <Link href="/beeper-code" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Beeper & Phone Keypad Code
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Convert phone keypad codes and beeper messages to morse code.
              </p>
            </Link>

            <Link href="/translator-maker-guide" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Build Your Own Translator
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn how to create your own morse code translator with JavaScript or Arduino.
              </p>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Translating Morse Code Now
          </h2>
          <p className="text-xl text-primary-50 mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust our morse code translator for accurate, fast, and private morse code conversion. No sign-up required.
          </p>
          <ScrollToTopButton />
        </section>
      </div>
    </>
  );
}
