import type { Metadata } from 'next';
import Link from 'next/link';
import MorseTranslator from './components/MorseTranslator';
import MorseCodeChart from './components/MorseCodeChart';
import ScrollToTopButton from './components/ScrollToTopButton';
import SignalVisualizer from './components/SignalVisualizer';
import { absoluteUrl, buildOpenGraphMeta, buildSoftwareAppJsonLd } from './utils/seo';

const driverScenarios = [
  {
    title: 'Instant Translation & QA',
    description:
      'Paste, convert, and verify without modal windows or reloads so the Morse Code Translator feels as fast as a command palette. Perfect for quick classroom checks, contest prep, or troubleshooting on the fly.',
    metrics: ['<1s first render', 'Bi-directional sync', 'Copy & WAV export'],
  },
  {
    title: 'Learning & Education',
    description:
      'Lesson-ready prompts, example buttons, ear-training audio, and challenge decks inside the Morse Code Translator help instructors build 5–15 minute learning blocks.',
    metrics: ['Exercise library', 'Projector-safe UI', 'FAQ + cheat sheets'],
  },
  {
    title: 'HAM & Signal Simulation',
    description:
      'Fine-grained WPM, frequency, waveform, noise, and run-time feedback keep the Morse Code Translator behaving like a controllable signal lab for amateur radio drills.',
    metrics: ['5–45 WPM', '300–1200 Hz', 'QRM/QRN modeling'],
  },
  {
    title: 'Accessibility / AT',
    description:
      'Aligns with Google Morse AT guidance through large controls, dark mode, stable timing, and adjustable feedback so the Morse Code Translator remains comfortable for alternate input users.',
    metrics: ['High contrast + keyboard first', 'Custom speed/tone', 'Exportable telemetry'],
  },
];

const toolSuiteLinks = [
  {
    href: '/picture-decoder',
    title: 'Morse Code Picture Decoder',
    description: 'Upload a photo → OCR → Morse, complete with framing tips and clarity scoring.',
  },
  {
    href: '/binary-to-morse',
    title: 'Binary ↔ Morse Lab',
    description: 'Batch convert 8-bit / 16-bit payloads with address tables and exports.',
  },
  {
    href: '/identifier-encoder',
    title: 'Identifier Encoder',
    description: 'Turn call signs or IoT asset IDs into Morse with validation templates.',
  },
  {
    href: '/word-decoder',
    title: 'Word Decoder & Cryptogram Hub',
    description: 'Lightweight substitution, Caesar, and Vigenère helpers that loop readers back to the main translator.',
  },
  {
    href: '/cryptic-code-translator',
    title: 'Cryptic Code Translator',
    description: 'Explain common cipher families, contrast them with Morse, and provide compliant decode tooling.',
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
    description: 'AT toggles, large targets, and telemetry export for therapists and educators.',
  },
];

const serpFaqs = [
  {
    question: 'How does the Morse Code Translator convert text to CW so fast?',
    answer:
      'A streaming parser keeps everything in-memory so the Morse Code Translator responds as you type, and the Morse Code Translator pre-buffers audio envelopes for repeated practice runs.',
  },
  {
    question: 'Can the Morse Code Translator generate audio I can download?',
    answer:
      'Yes—the Morse Code Translator exports clean WAV files with your tone, waveform, and WPM preferences so you can share drills or embed the Morse Code Translator output in lessons.',
  },
  {
    question: 'Is the Morse Code Translator safe for classrooms and HAM exams?',
    answer:
      'There are no ads or trackers, the Morse Code Translator works offline after the first load, and teachers can pin presets so the Morse Code Translator matches exam rules.',
  },
  {
    question: 'What accessibility support does the Morse Code Translator include?',
    answer:
      'Large targets, keyboard-first navigation, and independent audio/visual toggles make the Morse Code Translator align with Google Morse AT, while telemetry exports help therapists review Morse Code Translator sessions.',
  },
];

export const metadata: Metadata = {
  title: 'Morse Code Translator - Free Online Morse Code Converter',
  description:
    'Morse Code Translator with live text↔CW, tone and noise sliders, WAV exports, and guided lessons built for HAM drills, STEM labs, and accessibility teams.',
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
      'Morse Code Translator with live text↔CW, tone and noise sliders, WAV exports, and guided lessons built for HAM drills, STEM labs, and accessibility teams.',
    url: absoluteUrl('/'),
  }),
};

export default function Home() {
  const jsonLd = buildSoftwareAppJsonLd({
    name: 'Morse Code Translator',
    description:
      'Free online morse code translator with real-time conversion, audio playback, and download capabilities.',
    url: absoluteUrl('/'),
    applicationCategory: 'EducationalApplication',
    applicationSubCategory: 'CommunicationApplication',
    featureList: [
      'Real-time text ↔ Morse conversion',
      'Customizable tone, waveform, and speed controls',
      'Audio export, waveform preview, and collaborative practice logs',
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Hero */}
        <section className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm">
                <span className="font-plex">· – ·</span>
                From Morse Code Translator to signal simulator
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Morse Code Translator for real-time CW control, pro-grade signal modeling, and collaborative learning.
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                morsecodetranslator.app hosts a Morse Code Translator that spans instant QA, learning cohorts, HAM drills, and accessibility input scenarios—turning a classic utility into a digital signal lab plus collaborative practice hub.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/#translator" className="btn-primary">
                  Explore Pro Controls
                </Link>
                <Link href="/blog" className="btn-ghost">
                  Read the latest guide
                </Link>
              </div>
          
            </div>
            <div className="space-y-6">
              <div className="glass-panel p-5 space-y-4">
                <SignalVisualizer wpm={24} frequency={680} noiseLevel={0.18} caption="Signal preview" />
                <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                  <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                    <p className="text-white/60 text-xs uppercase tracking-[0.4em]">Latency</p>
                    <p className="text-xl font-semibold text-white">&lt; 1s</p>
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                    <p className="text-white/60 text-xs uppercase tracking-[0.4em]">Offline</p>
                    <p className="text-xl font-semibold text-white">Local JS fallbacks</p>
                  </div>
                </div>
              </div>
              <div className="glass-panel p-4 flex flex-wrap items-center justify-between gap-3 text-sm text-white/80">
                <div>
                  <p className="font-semibold text-white">Feedback or AT support?</p>
                  <p>Write to <a href="mailto:support@morsecodetranslator.app" className="underline decoration-dotted">support@morsecodetranslator.app</a></p>
                </div>
                <a href="mailto:support@morsecodetranslator.app" className="btn-ghost text-xs">
                  Contact Support
                </a>
              </div>
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

        {/* Translator */}
        <section id="translator" className="space-y-6">
          <MorseTranslator />
        </section>

           {/* SEO + SERP primer */}
        <section className="glass-panel p-6 space-y-4">
          <h2 className="text-3xl font-bold text-white">Why This Morse Code Translator Wins Clicks</h2>
          <p className="text-base text-white/80">
            The Morse Code Translator on morsecodetranslator.app merges military-grade timing with approachable UI copy, signaling to searchers that the experience is purpose-built rather than a thin widget.
          </p>
          <p className="text-base text-white/80">
            By pairing tone, waveform, and noise sliders, the Morse Code Translator anticipates what contest operators and STEM coaches expect from lab gear, and the Morse Code Translator copy clarifies that everything loads instantly in the browser.
          </p>
          <p className="text-base text-white/80">
            Emergency planners and accessibility therapists get a Morse Code Translator that logs every session, while the same Morse Code Translator doubles as a learning pad with cheat sheets, downloadable WAVs, and bilingual UI seeds.
          </p>
          <p className="text-base text-white/80">
            FAQ schema, sitelinks, and descriptive meta titles help the Morse Code Translator grab more of the SERP above the fold while promising practical outcomes—ham readiness, classroom confidence, and maker demos.
          </p>
          <p className="text-base text-white/80">
            Start a practice sprint, export proof-of-learning, or embed quick challenges; the Morse Code Translator keeps the next click obvious with bright CTAs, review snippets, and transparent pricing (free).
          </p>
          <div className="grid gap-4 md:grid-cols-2 text-sm text-white/80">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-2">
              <p className="text-white font-semibold">SERP snippet checklist</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Title tag should open with “Morse Code Translator” plus a proof point, then stay within 55–60 characters for full display.</li>
                <li>Meta description uses “Morse Code Translator” again, hits 140–160 characters, and names the standout controls (audio, noise, logs).</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4 space-y-2">
              <p className="text-white font-semibold">Rich result boosters</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Attach FAQ schema answering Morse Code Translator questions on privacy, latency, and WAV exports to win collapsible SERP panels.</li>
                <li>Use Product or SoftwareApplication markup so reviews referencing the Morse Code Translator accuracy can surface star ratings.</li>
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
            The Morse Code Translator splits its experience into an engineer-grade signal lab and a collaborative learning loop so the same Morse Code Translator session can jump from contest prep to classroom mentoring without context switches.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">Signal Lab · Web</h3>
                <span className="signal-chip">Precision</span>
              </div>
              <ul className="space-y-3 text-sm text-white/80">
                <li>Four-dimensional control over WPM, frequency, waveform, and noise to mimic real CW paths—including QRM/QRN.</li>
                <li>HUD exposes seconds, characters, and word counts with downloadable audio/logs for training records.</li>
                <li>MorseCodeChart, cheat sheets, and FAQs act as instant classroom materials.</li>
                <li>JSON-LD, SEO hygiene, and PWA caching keep first interaction under a second.</li>
              </ul>
            </article>
            <article className="glass-panel p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">Learning Loop · Community</h3>
                <span className="signal-chip">Engagement</span>
              </div>
              <ul className="space-y-3 text-sm text-white/80">
                <li>A challenge library powers global timelines, decoding games, and collaborative classroom prompts.</li>
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
            <p className="text-xs font-semibold tracking-[0.4em] text-white/60 mb-4">TELEMETRY</p>
            <h2 className="text-3xl font-bold text-white mb-4">Telemetry Turns a Translator Into a Trainer</h2>
            <p className="text-white/80 mb-4">
              Building on the Morse Code Translator benchmark at morsecodetranslator.com, this Morse Code Translator release doubles down on live feedback:
            </p>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Words, characters, symbols, and seconds refresh in sync so instructors can log outcomes instantly.</li>
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
                Google treats Morse as an official accessibility input on Android and iOS, so this Morse Code Translator does the same. Every control is keyboard-friendly out of the box, and the Morse Code Translator lets audio or visual cues toggle independently.
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
                <li>Toggle large buttons or high-contrast mode with a single tap.</li>
                <li>Lock a safe-speed window (e.g., 25 WPM and below) for consistent therapy sessions.</li>
                <li>Adjust audio and vibration feedback independently, then save as a preset.</li>
                <li>Export CSV telemetry so therapists or teachers can track progress.</li>
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
              The Morse Code Translator understands Cyrillic, Kana, RTL scripts, and Wabun so multilingual classes do not need separate tools, and the Morse Code Translator metadata ships localized titles, descriptions, and schema.
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
              <Link href="/blog" className="btn-ghost text-sm">
                Browse the blog
              </Link>
            </article>
            <article className="glass-panel p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-white">Maker & Dev Hub</h3>
              <p className="text-sm text-white/80">
                The Translator Maker Guide breaks JS, Arduino, Micro:bit, and Web Audio API builds into reusable modules—drawing in tinkerers while generating backlinks and UGC. Forks and PRs are welcome for new code tables or lesson ideas.
              </p>
              <Link href="/translator-maker-guide" className="btn-ghost text-sm">
                Explore the maker guide
              </Link>
            </article>
          </div>
        </section>

        <section className="glass-panel p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Signal</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Students, HAM operators, makers, and AT users can translate, train, and share from the same surface—no sign-up, no ads, just instant CW workflows.
          </p>
          <ScrollToTopButton />
        </section>
      </div>
    </>
  );
}
