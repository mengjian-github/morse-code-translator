import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Morse Code Translator Maker Guide - Build Your Own',
  description: 'Learn how to build your own morse code translator using JavaScript, Arduino, or Raspberry Pi. Complete tutorial for DIY morse code projects.',
  keywords: ['translator maker', 'build morse translator', 'DIY morse code', 'Arduino morse', 'JavaScript morse code'],
  alternates: {
    canonical: 'https://morsecodetranslator.app/translator-maker-guide'
  }
};

export default function TranslatorMakerGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Morse Code <span className="text-primary-600 dark:text-primary-400">Translator Maker</span> Guide
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Learn how to build your own morse code translator from scratch. Complete tutorials for web, Arduino, and Raspberry Pi projects.
        </p>
      </div>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Build a Morse Code Translator?
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Building your own morse code translator maker project offers valuable learning opportunities across multiple technical domains. For programmers, creating a morse code translator teaches string manipulation, algorithm design, and user interface development. Hardware enthusiasts learn about audio generation, LED control, and sensor input through physical morse code devices. Students gain hands-on experience with encoding systems, signal processing, and communication protocols.
            </p>
            <p>
              A translator maker project scales to any skill level. Beginners can start with simple text-to-morse converters using basic JavaScript. Intermediate makers add audio playback, visual morse displays, and real-time conversion. Advanced projects incorporate Arduino boards for physical morse key input, LED morse output, radio transmission integration, or machine learning for morse code recognition. The morse code translator maker journey grows with your skills.
            </p>
            <p>
              Beyond technical learning, building a morse code translator connects you with communications history. Understanding how morse code encoding works deepens appreciation for Samuel Morse&apos;s invention and its impact on global telecommunications. Creating a working translator makes abstract encoding concepts tangible, demonstrating how human language translates to electrical signals. This historical-technical connection makes translator maker projects uniquely educational and engaging.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Translator Maker Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              JavaScript Web Translator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Build a browser-based morse code translator using vanilla JavaScript, HTML5, and CSS3. Perfect for web developers and beginners.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="px-2 py-1 bg-blue-200 dark:bg-blue-800 rounded">Beginner</span>
              <span>30 minutes</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Arduino Morse Device
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Create a physical morse code translator with LED output and buzzer sounds using Arduino Uno or compatible boards.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="px-2 py-1 bg-green-200 dark:bg-green-800 rounded">Intermediate</span>
              <span>2 hours</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800">
            <div className="text-4xl mb-4">🥧</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Raspberry Pi Station
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Build an advanced morse code station with radio transmission, recording capabilities, and network features using Raspberry Pi.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="px-2 py-1 bg-purple-200 dark:bg-purple-800 rounded">Advanced</span>
              <span>4+ hours</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            JavaScript Morse Translator Tutorial
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Step 1: Create the Morse Code Map</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                First, define the morse code character mappings. This object converts letters and numbers to their morse code equivalents:
              </p>
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`const morseCodeMap = {
  'A': '.-',    'B': '-...',  'C': '-.-.', 'D': '-..',
  'E': '.',     'F': '..-.',  'G': '--.',  'H': '....',
  'I': '..',    'J': '.---',  'K': '-.-',  'L': '.-..',
  'M': '--',    'N': '-.',    'O': '---',  'P': '.--.',
  'Q': '--.-',  'R': '.-.',   'S': '...',  'T': '-',
  'U': '..-',   'V': '...-',  'W': '.--',  'X': '-..-',
  'Y': '-.--',  'Z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.',
  ' ': '/'
};`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Step 2: Build the Translation Function</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Create a function that converts text to morse code:
              </p>
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`function textToMorse(text) {
  return text
    .toUpperCase()
    .split('')
    .map(char => morseCodeMap[char] || char)
    .join(' ');
}

// Example usage:
console.log(textToMorse('HELLO'));
// Output: .... . .-.. .-.. ---`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Step 3: Add Audio Playback</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Use the Web Audio API to play morse code beeps:
              </p>
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`function playMorse(morseCode) {
  const audioContext = new AudioContext();
  const dotDuration = 80; // milliseconds
  let currentTime = audioContext.currentTime;

  for (const symbol of morseCode) {
    if (symbol === '.') {
      playTone(audioContext, currentTime, dotDuration);
      currentTime += dotDuration * 2 / 1000;
    } else if (symbol === '-') {
      playTone(audioContext, currentTime, dotDuration * 3);
      currentTime += dotDuration * 4 / 1000;
    } else if (symbol === ' ') {
      currentTime += dotDuration * 3 / 1000;
    }
  }
}

function playTone(ctx, startTime, duration) {
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.frequency.value = 600;
  gainNode.gain.value = 0.3;

  oscillator.start(startTime);
  oscillator.stop(startTime + duration / 1000);
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Arduino Morse Translator Project
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Components Needed</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Arduino Uno or compatible board</li>
                <li>LED (any color) and 220Ω resistor</li>
                <li>Piezo buzzer or speaker</li>
                <li>Push button switch</li>
                <li>Breadboard and jumper wires</li>
                <li>Optional: LCD display for showing text</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Basic Arduino Code</h3>
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm">
{`const int LED_PIN = 13;
const int BUZZER_PIN = 8;
const int DOT_DURATION = 200;

String morseCode[][2] = {
  {"A", ".-"},    {"B", "-..."},  {"C", "-.-."},
  {"D", "-.."},   {"E", "."},     {"F", "..-."},
  // ... add more characters
};

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUZZER_PIN, OUTPUT);
  Serial.begin(9600);
}

void playMorse(String morse) {
  for (int i = 0; i < morse.length(); i++) {
    if (morse[i] == '.') {
      digitalWrite(LED_PIN, HIGH);
      tone(BUZZER_PIN, 600);
      delay(DOT_DURATION);
      digitalWrite(LED_PIN, LOW);
      noTone(BUZZER_PIN);
      delay(DOT_DURATION);
    } else if (morse[i] == '-') {
      digitalWrite(LED_PIN, HIGH);
      tone(BUZZER_PIN, 600);
      delay(DOT_DURATION * 3);
      digitalWrite(LED_PIN, LOW);
      noTone(BUZZER_PIN);
      delay(DOT_DURATION);
    } else if (morse[i] == ' ') {
      delay(DOT_DURATION * 3);
    }
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-primary-50 dark:bg-primary-900/30 rounded-2xl p-6 md:p-8 border-2 border-primary-200 dark:border-primary-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Ideas for Your Translator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎮 Morse Code Game</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create an educational game where players decode morse code messages against the clock.
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💡 Smart Light Morse</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Control smart lights to flash morse code messages across rooms.
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">📱 Mobile App</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Build a React Native or Flutter app for morse code communication on smartphones.
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🤖 AI Morse Decoder</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use machine learning to recognize morse code patterns from audio or video.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-primary-100 dark:bg-primary-900/30 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Try Our Ready-Made Tools
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            While you&apos;re building your own translator, use our tools for testing and learning:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">📡</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Morse Code Translator</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Test your morse code outputs</p>
              </div>
            </Link>
            <Link href="/binary-to-morse" className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-primary-600 dark:text-primary-400 text-2xl">💾</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Binary Converter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Learn encoding methods</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
