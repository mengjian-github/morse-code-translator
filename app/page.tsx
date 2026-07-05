import type { Metadata } from 'next';
import Link from 'next/link';
import MorseTranslator from './components/MorseTranslator';
import MorseCodeChart from './components/MorseCodeChart';
import ScrollToTopButton from './components/ScrollToTopButton';
import SignalVisualizer from './components/SignalVisualizer';
import { SITE_NAME, absoluteUrl, buildOpenGraphMeta } from './utils/seo';

const driverScenarios = [
  {
    title: 'Instant Translation',
    description:
      'Paste text or Morse, convert in place, copy the result, and play the audio without reloads. Useful for quick checks, classroom drills, or contest prep.',
    metrics: ['<1s first render', 'Bi-directional sync', 'Copy & WAV export'],
  },
  {
    title: 'Learning & Education',
    description:
      'Example buttons, ear-training audio, and clear output states help instructors build 5–15 minute learning blocks.',
    metrics: ['Example buttons', 'Projector-safe UI', 'FAQ + cheat sheets'],
  },
  {
    title: 'HAM & Signal Practice',
    description:
      'WPM, frequency, waveform, and noise controls make the Morse Code Translator useful for amateur radio practice.',
    metrics: ['5–45 WPM', '300–1200 Hz', 'QRM/QRN modeling'],
  },
  {
    title: 'Accessible Practice',
    description:
      'Large controls, keyboard-friendly paths, dark mode, and adjustable audio make the Morse Code Translator easier to use on mobile and desktop.',
    metrics: ['High contrast + keyboard first', 'Custom speed/tone', 'Copy + WAV export'],
  },
];

const toolSuiteLinks = [
  {
    href: '/morse-code-audio',
    title: 'Morse Code Audio Translator',
    description: 'Turn text or Morse into playable sidetone, copy the translation, download WAV, and share practice output from one focused task page.',
  },
  {
    href: '/beeper-code',
    title: 'Beeper Code Translator',
    description: 'Decode pager-style beeper numbers, compare them with Morse signals, and return to the main Morse code translator for audio practice.',
  },
  {
    href: '/picture-decoder',
    title: 'Morse Code Picture Decoder',
    description: 'Upload a photo, extract Morse-like symbols with OCR guidance, then validate the decoded text in the browser Morse code translator.',
  },
  {
    href: '/binary-to-morse',
    title: 'Binary to Morse Converter',
    description: 'Convert binary payloads into Morse code, review 8-bit / 16-bit tables, and route signals back to the main text-to-Morse workflow.',
  },
  {
    href: '/identifier-encoder',
    title: 'Identifier Encoder',
    description: 'Turn call signs or IoT asset IDs into Morse with validation templates.',
  },
  {
    href: '/word-decoder',
    title: 'Word Decoder & Cryptogram Hub',
    description: 'Decode hidden words with substitution, Caesar, and Vigenère helpers before checking plain text in the Morse Code Translator.',
  },
  {
    href: '/cryptic-code-translator',
    title: 'Cryptic Code Translator',
    description: 'Compare cryptic ciphers with Morse, explain each decode path, and link users to the free Morse code converter when signals use dots and dashes.',
  },
  {
    href: '/hexadecimal-cipher',
    title: 'Hexadecimal Cipher Converter',
    description: 'Hex ↔ ASCII ↔ Morse pipelines for firmware, CTF, and hacker demos.',
  },
  {
    href: '/translator-maker-guide',
    title: 'Translator Maker Guide',
    description: 'Step-by-step builds for JS, Arduino, or Micro:bit Morse translators.',
  },
];

const accessibilityPoints = [
  '100% keyboard reach with Screen Reader landmarks and logical headings.',
  '44px touch targets, responsive spacing, and auto dark mode for eye comfort.',
  'Audio, vibration, and visual cues can be toggled independently for AT flows.',
  'Speed and tone presets mirror the Google Morse Gboard implementation.',
];

const intlPoints = [
  'Decoder engine spans Latin, Cyrillic, Greek, Hebrew, Arabic, Persian, Wabun (JP), Hangul, Thai, and more.',
  'UI copy ships with EN / ES / DE / JA / KO seeds and is ready for further locales.',
  'Structured data + multilingual meta strengthen SEO and fend off scraper clones.',
  'Input pipeline supports RTL and IME compositions so characters are never dropped.',
];

const heroStats = [
  { label: 'Dial speed', value: '5–45 WPM' },
  { label: 'Frequency band', value: '300–1200 Hz' },
  { label: 'Wave set', value: 'Sine · Square · Triangle · Saw' },
];

const cockpitPanels = [
  {
    title: 'Text Input',
    accent: '#FFD800',
    description: 'Real-time sync with copy, paste, and keyboard shortcuts keeps the Morse Code Translator primed for speed-focused QA.',
  },
  {
    title: 'Morse Output',
    accent: '#0058A3',
    description: 'Bi-directional translation with punctuation, numerals, and multi-language alphabets proves the Morse Code Translator handles every script.',
  },
  {
    title: 'Audio Controls',
    accent: '#FF8C00',
    description: 'Dial WPM, frequency, waveform, and export WAV in one lab-style panel.',
  },
  {
    title: 'Accessibility',
    accent: '#333333',
    description: 'Large targets, keyboard reach, and adjustable audio for learners and educators.',
  },
];

const serpFaqs = [
  {
    question: 'How does the Morse Code Translator convert text to CW so fast?',
    answer:
      'A streaming parser keeps conversion in memory, so the tool responds as you type and pre-buffers audio envelopes for repeated practice runs.',
  },
  {
    question: 'Can the Morse Code Translator generate audio I can download?',
    answer:
      'Yes. You can export clean WAV files with your tone, waveform, and WPM preferences, then share drills or embed the output in lessons.',
  },
  {
    question: 'Is the Morse Code Translator safe for classrooms and HAM exams?',
    answer:
      'The conversion runs in your browser, the tool is free to use, and teachers can set speed and tone before playing practice audio.',
  },
  {
    question: 'Can I share Morse Code Translator output with students or teammates?',
    answer:
      'Yes. Copy, Play Audio, Download WAV, and Share sit next to the translated result, so you can move from translation to listening, saving, or sending without hunting for controls.',
  },
  {
    question: 'What accessibility support does the Morse Code Translator include?',
    answer:
      'Large targets, keyboard-first navigation, and adjustable audio controls make practice and accessibility workflows easier.',
  },
];

const howToSteps = [
  {
    name: 'Choose the direction',
    text: 'Use text to Morse for plain language, or swap direction to decode dots and dashes back to text.',
  },
  {
    name: 'Type or paste input',
    text: 'Enter text, dots, dashes, slashes, or spaces in the input box. The output updates in the adjacent panel.',
  },
  {
    name: 'Copy, play, or download',
    text: 'Copy the translated output, play the Morse audio, or download a WAV file with your selected speed and tone.',
  },
];

export const metadata: Metadata = {
  title: 'Morse Code Translator - Free Online Morse Code Converter',
  description:
    'Free Morse Code Translator to convert text to Morse, decode Morse to English, play audio, download WAV, and work privately in your browser with no signup.',
  keywords: [
    'morse code translator',
    'morse code converter',
    'text to morse',
    'morse to text',
    'online morse translator',
    'morse code audio',
    'morse code decoder',
    'morse code encoder',
  ],
  alternates: {
    canonical: absoluteUrl('/'),
  },
  openGraph: buildOpenGraphMeta({
    title: 'Morse Code Translator - Free Online Morse Code Converter',
    description:
      'Free Morse Code Translator to convert text to Morse, decode Morse to English, play audio, download WAV, and work privately in your browser with no signup.',
    url: absoluteUrl('/'),
  }),
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${absoluteUrl('/')}#organization`,
        name: SITE_NAME,
        url: absoluteUrl('/'),
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/logo.png'),
          width: 512,
          height: 512,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${absoluteUrl('/')}#website`,
        name: SITE_NAME,
        url: absoluteUrl('/'),
        inLanguage: 'en',
        publisher: { '@id': `${absoluteUrl('/')}#organization` },
      },
      {
        '@type': 'WebApplication',
        '@id': `${absoluteUrl('/')}#webapplication`,
        name: 'Morse Code Translator',
        url: absoluteUrl('/'),
        description: 'Free bidirectional Morse code translator with local text-to-Morse and Morse-to-text conversion, audio playback, copy output, WAV download, and share-ready results.',
        publisher: { '@id': `${absoluteUrl('/')}#organization` },
        applicationCategory: 'EducationalApplication',
        applicationSubCategory: 'CommunicationApplication',
        operatingSystem: 'Web',
        browserRequirements: 'Requires a modern browser with JavaScript and Web Audio support.',
        isAccessibleForFree: true,
        featureList: ['Text to Morse conversion', 'Morse to text decoding', 'Audio playback', 'Copy output', 'Download WAV audio', 'Share translated output'],
        offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'USD' },
      },
      {
        '@type': 'FAQPage',
        '@id': `${absoluteUrl('/')}#faq`,
        mainEntity: serpFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        '@id': `${absoluteUrl('/')}#howto`,
        name: 'How to use the Morse Code Translator',
        description: 'Translate text or Morse code, then copy, play, or download the output.',
        step: howToSteps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${absoluteUrl('/')}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Morse Code Translator', item: absoluteUrl('/') },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 md:py-12 space-y-10 md:space-y-16">
        {/* Hero */}
        <section className="space-y-5 md:space-y-8">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60">
            <Link href="/" className="underline decoration-dotted underline-offset-4">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Morse Code Translator</span>
          </nav>
          <div className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr] items-start">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs sm:text-sm">
                <span className="font-plex">· – ·</span>
                Free browser-based Morse translator
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Free bidirectional Morse Code Translator with audio playback, copy, and WAV download.
              </h1>
              <p className="hidden sm:block text-base md:text-lg text-white/80 max-w-2xl">
                Translate text to Morse or decode Morse back to text in your browser. Use the local converter, play audio, copy the output, or download a WAV for practice and lessons.
              </p>
              <div className="hidden sm:grid grid-cols-2 gap-2 text-xs sm:text-sm text-white/80">
                <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <p className="text-white/60 uppercase tracking-[0.28em]">Use path</p>
                  <p className="font-semibold text-white">Type → copy → play</p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <p className="text-white/60 uppercase tracking-[0.28em]">Privacy</p>
                  <p className="font-semibold text-white">Conversion runs locally</p>
                </div>
              </div>
              <div className="hidden sm:flex flex-wrap gap-3">
                <Link href="/#translator" className="btn-primary" data-analytics-event="hero_try_now_click">
                  Try it now
                </Link>
              </div>
            </div>
            <div className="scroll-mt-24">
              <MorseTranslator />
              <p className="mt-3 text-xs text-white/60">Core path: enter text or Morse, review the output, then copy, play audio, or download WAV from the same panel.</p>
            </div>
          </div>
        </section>

        <section className="glass-panel p-5 md:p-6" aria-labelledby="morse-code-translator-answer">
          <div className="grid gap-5 lg:grid-cols-[1.25fr,0.75fr] items-start">
            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-[0.4em] text-[#ffd800] uppercase">Quick answer</p>
              <h2 id="morse-code-translator-answer" className="text-2xl md:text-3xl font-bold text-white">
                What is the fastest way to translate Morse code online?
              </h2>
              <p className="text-white/80 text-base leading-relaxed">
                Use this free Morse Code Translator to convert text to Morse code, decode Morse back to English, play the result as audio, copy it, or download a WAV file. Everything runs locally in the browser, so quick classroom checks, HAM practice, and signal tests do not require sign-up.
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-3 text-sm text-white/80">
              <p className="font-semibold text-white">Best for today</p>
              <ul className="space-y-2">
                <li>• Convert plain text ↔ Morse in real time.</li>
                <li>• Listen at 5–45 WPM with custom tone and waveform.</li>
                <li>• Copy, share, or download the translated signal after output appears.</li>
              </ul>
              <Link href="/#translator" className="btn-primary text-sm" data-analytics-event="answer_block_try_translator_click">
                Open the translator
              </Link>
            </div>
          </div>
        </section>

        {/* Control deck preview */}
        <section className="grid gap-6 lg:grid-cols-4">
          {cockpitPanels.map((panel) => (
            <div
              key={panel.title}
              className="glass-panel p-5 flex flex-col gap-3"
              style={{ borderColor: `${panel.accent}30` }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: panel.accent }} />
                <p className="text-sm uppercase tracking-[0.4em] text-white/60">{panel.title}</p>
              </div>
              <p className="text-base text-white/80">{panel.description}</p>
            </div>
          ))}
        </section>

      {/* SEO + SERP primer */}
        <section className="glass-panel p-6 space-y-4">
          <h2 className="text-3xl font-bold text-white">Why This Converter Wins Clicks</h2>
          <p className="text-base text-white/80">
            morsecodetranslator.app puts the free text-to-Morse and Morse-to-text tool first, then keeps audio, copy, and download actions close to the result.
          </p>
          <p className="text-base text-white/80">
            Tone, waveform, and noise sliders cover the controls contest operators and STEM coaches expect while keeping the browser workflow simple.
          </p>
          <p className="text-base text-white/80">
            Learners, teachers, and radio hobbyists get cheat sheets, downloadable WAVs, and practical guides without account setup.
          </p>
          <p className="text-base text-white/80">
            FAQ schema, sitelinks, and descriptive meta titles help the page grab more of the SERP above the fold while promising practical outcomes—ham readiness, classroom confidence, and maker demos.
          </p>
          <p className="text-base text-white/80">
            Start a practice sprint, copy the translated output, or download audio; the next action stays obvious with clear CTAs and transparent pricing (free). If your workflow extends beyond plain text, jump into the <Link href="/binary-to-morse" className="text-[#ffd800] underline underline-offset-4">binary to Morse converter</Link>, <Link href="/beeper-code" className="text-[#ffd800] underline underline-offset-4">beeper code translator</Link>, <Link href="/word-decoder" className="text-[#ffd800] underline underline-offset-4">word decoder</Link>, or <Link href="/cryptic-code-translator" className="text-[#ffd800] underline underline-offset-4">cryptic code translator</Link> for deeper practice contexts.
          </p>
          <div className="grid gap-4 md:grid-cols-2 text-sm text-white/80">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-2">
              <p className="text-white font-semibold">SERP snippet checklist</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Title tag should open with “Morse Code Translator” plus a proof point, then stay within 55–60 characters for full display.</li>
                <li>Meta description uses “Morse Code Translator” again, hits 140–160 characters, and names the standout controls: audio, copy, and WAV download.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-2">
              <p className="text-white font-semibold">Rich result boosters</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Attach FAQ schema answering Morse Code Translator questions on privacy, latency, and WAV exports to win collapsible SERP panels.</li>
                <li>Use WebApplication, FAQPage, HowTo, and BreadcrumbList markup that matches visible page content.</li>
                <li>Link deep sections like “Practice CW” or “Translator Maker Guide” to encourage sitelinks under the Morse Code Translator listing.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dual track */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.4em] text-white/60">MODEL</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">Dual-Track Architecture: Signal Lab + Learning Loop</h2>
          <p className="text-white/80 text-base mb-8 max-w-4xl">
            The Morse Code Translator keeps the core converter, audio controls, and learning content in one flow so a session can move from contest prep to classroom practice without context switches.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">Signal Practice · Web</h3>
                <span className="signal-chip">Precision</span>
              </div>
              <ul className="space-y-3 text-sm text-white/80">
                <li>Four-dimensional control over WPM, frequency, waveform, and noise to mimic real CW paths—including QRM/QRN.</li>
                <li>HUD exposes seconds, characters, and word counts alongside copy and downloadable audio actions.</li>
                <li>MorseCodeChart, cheat sheets, and FAQs act as instant classroom materials.</li>
                <li>JSON-LD, SEO hygiene, and responsive layout keep the first tool interaction easy to find.</li>
              </ul>
            </article>
            <article className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">Learning Loop · Guides</h3>
                <span className="signal-chip">Engagement</span>
              </div>
              <ul className="space-y-3 text-sm text-white/80">
                <li>Guide pages and examples support decoding games and classroom prompts.</li>
                <li>The Maker Guide links to hardware/JS builds, motivating STEM classes and hobbyists.</li>
                <li>Blog series (How to Read Morse Fast, Top 10 STEM Projects, etc.) grow SEO and social reach.</li>
                <li>Utility pages and FAQ modules interlink to protect the topical cluster.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Driver scenarios */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.4em] text-white/60">SCENARIOS</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">Four Demand Pillars, Four Focused Feature Sets</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {driverScenarios.map((scenario) => (
              <div key={scenario.title} className="glass-panel p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{scenario.title}</h3>
                <p className="text-sm text-white/80 mb-4">{scenario.description}</p>
                <div className="flex flex-wrap gap-2">
                  {scenario.metrics.map((metric) => (
                    <span key={metric} className="signal-chip">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Telemetry */}
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.4em] text-white/60 mb-4">LIVE STATS</p>
            <h2 className="text-3xl font-bold text-white mb-4">Live Stats Turn a Translator Into a Trainer</h2>
            <p className="text-white/80 mb-4">
              The Morse Code Translator keeps live feedback close to the converter:
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Words, characters, symbols, and seconds refresh in sync so instructors can review outcomes quickly.</li>
              <li>WPM ties directly to total duration, supporting lesson pacing and operator training plans.</li>
              <li>Waveform presets plus frequency control cover every sidetone preference.</li>
              <li>QRM/QRN noise sliders recreate contest, test, or long-distance interference.</li>
            </ul>
          </div>
          <SignalVisualizer wpm={28} frequency={720} noiseLevel={0.25} caption="Instructor dashboard preview" variant="light" className="glass-panel--light" />
        </section>

        {/* Accessibility */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.4em] text-white/60">ACCESSIBILITY</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="glass-panel p-6 space-y-4">
              <h2 className="text-3xl font-bold text-white">Accessibility Is a Default, Not an Add-On</h2>
              <p className="text-white/80">
                Google treats Morse as an official accessibility input on Android and iOS, so this Morse Code Translator does the same. The main tool uses large controls, clear labels, and keyboard-friendly inputs; audio settings are adjustable before playback.
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                {accessibilityPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-[#ffd800]">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">AT Mode Quick Presets</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li>Use the responsive layout with large buttons and high-contrast panels.</li>
                <li>Lock a safe-speed window (e.g., 25 WPM and below) for consistent therapy sessions.</li>
                <li>Adjust audio and vibration feedback independently, then save as a preset.</li>
                <li>Copy translated output or download WAV audio for later review.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Internationalization */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.4em] text-white/60">GLOBAL</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <p className="lg:col-span-2 text-base text-white/80 bg-white/5 border border-white/15 rounded-3xl p-6">
              The Morse Code Translator understands Cyrillic, Kana, RTL scripts, and Wabun so multilingual classes do not need separate tools, and the Morse Code Translator keeps metadata and schema aligned with visible page content.
            </p>
            <div className="glass-panel--light rounded-3xl p-6">
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-4">Character Sets & Decoder Engine</h2>
              <ul className="space-y-3 text-sm text-[#0b1f3a]">
                {intlPoints.slice(0, 2).map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-[#0058a3]">🌐</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel--light rounded-3xl p-6">
              <h2 className="text-3xl font-bold text-[#0b1f3a] mb-4">Multilingual Experience</h2>
              <ul className="space-y-3 text-sm text-[#0b1f3a]">
                {intlPoints.slice(2).map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-[#0058a3]">🔤</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tool suite */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.4em] text-white/60">SUITE</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">Utility Cluster: Every Long-Tail Query Gets a Home</h2>
          <p className="text-base text-white/80 mb-8 max-w-4xl">
            Each supporting tool answers intent-specific questions but crosslinks back to the Morse Code Translator, reinforcing to search engines that the Morse Code Translator owns picture decoding, identifier encoding, and maker workflows.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {toolSuiteLinks.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="glass-panel p-6 hover:border-[#ffd800]/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                  <svg className="w-5 h-5 text-[#ffd800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-sm text-white/80">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* HowTo */}
        <section className="glass-panel p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.4em] text-white/60">HOW TO</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h2 className="text-3xl font-bold text-white">How to use this Morse Code Translator</h2>
          <ol className="grid gap-4 md:grid-cols-3">
            {howToSteps.map((step, index) => (
              <li key={step.name} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <span className="metric-pill mb-3 inline-flex">Step {index + 1}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{step.name}</h3>
                <p className="text-sm text-white/80">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.4em] text-white/60">FAQ</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-6">Answering Top Morse Code Translator Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {serpFaqs.map((faq) => (
              <article key={faq.question} className="glass-panel p-5 space-y-2">
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
                <p className="text-sm text-white/80">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Learning */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold tracking-[0.4em] text-white/60">LEARNING</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="glass-panel p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-white">Lesson Templates & Training Games</h3>
              <p className="text-sm text-white/80">
                Articles such as “How to Read Morse Code Fast (2025 Guide),” “Top 10 Morse Code Projects for STEM Classrooms,” and “Starlink SOS: Understanding Emergency Morse Signals” pair with interactive drills and downloadable PDFs so teachers can drop them straight into class.
              </p>
              <Link href="/blog" className="btn-ghost text-sm" data-analytics-event="learning_blog_click">
                Browse the blog
              </Link>
            </article>
            <article className="glass-panel p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-white">Maker & Dev Hub</h3>
              <p className="text-sm text-white/80">
                The Translator Maker Guide breaks JS, Arduino, Micro:bit, and Web Audio API builds into reusable modules—drawing in tinkerers while generating backlinks and UGC. Forks and PRs are welcome for new code tables or lesson ideas.
              </p>
              <Link href="/translator-maker-guide" className="btn-ghost text-sm" data-analytics-event="learning_maker_guide_click">
                Explore the maker guide
              </Link>
            </article>
          </div>
        </section>

        <section className="glass-panel p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Signal</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Students, HAM operators, makers, and accessibility users can translate, listen, copy, and download from the same surface—no sign-up required.
          </p>
          <ScrollToTopButton />
        </section>
      </div>
    </>
  );
}
