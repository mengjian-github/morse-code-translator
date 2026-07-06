import type { Metadata } from 'next';
import Link from 'next/link';
import MorseTranslator from '../components/MorseTranslator';
import { absoluteUrl, buildOpenGraphMeta, buildSoftwareAppJsonLd } from '@/app/utils/seo';

const PAGE_URL = absoluteUrl('/morse-code-audio');

const faqs = [
  {
    question: 'Can I turn Morse code into audio online?',
    answer: 'Yes. Paste text or dots and dashes, then use Play Audio to hear the Morse sidetone in your browser without creating an account.',
  },
  {
    question: 'Can I download Morse code as a WAV file?',
    answer: 'Yes. After the translator creates output, use Download WAV to save an audio file with the selected WPM, tone frequency, waveform, and noise settings.',
  },
  {
    question: 'Is the Morse audio generated privately?',
    answer: 'The translation and audio generation run locally in the browser, so classroom drills, practice messages, and copied output do not need a server round trip.',
  },
];

const howToSteps = [
  {
    name: 'Enter text or Morse',
    text: 'Paste a word, classroom prompt, call sign, or dots and dashes into the translator panel.',
  },
  {
    name: 'Tune the sidetone',
    text: 'Set WPM, carrier frequency, waveform, and light noise so the audio matches your practice target.',
  },
  {
    name: 'Play, copy, or download WAV',
    text: 'Use the result actions to hear the signal, copy the translation, share it, or save a WAV file.',
  },
];

export const metadata: Metadata = {
  title: {
    absolute: 'Morse Code Audio Translator | Play and Download WAV',
  },
  description:
    'Use this Morse code audio translator to convert text or Morse, play sidetone, download WAV audio, copy output, and share practice messages privately.',
  keywords: [
    'morse code audio translator',
    'morse code audio',
    'morse code wav download',
    'text to morse audio',
    'morse code sound generator',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: buildOpenGraphMeta({
    title: 'Morse Code Audio Translator | Play and Download WAV',
    description:
      'Convert text or Morse into playable sidetone, download WAV audio, copy output, and share practice messages privately.',
    url: PAGE_URL,
  }),
};

export default function MorseCodeAudioPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      buildSoftwareAppJsonLd({
        name: 'Morse Code Audio Translator',
        description: 'Browser-based Morse audio translator with playback, WAV download, copy, and share actions.',
        url: PAGE_URL,
        applicationCategory: 'EducationalApplication',
        applicationSubCategory: 'AudioApplication',
        featureList: [
          'Text to Morse audio playback',
          'Morse to text decoding',
          'WAV audio download',
          'Copy and share translated output',
          'Adjustable WPM, tone frequency, waveform, and noise',
        ],
      }),
      {
        '@type': 'FAQPage',
        '@id': `${PAGE_URL}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      {
        '@type': 'HowTo',
        '@id': `${PAGE_URL}#howto`,
        name: 'How to create Morse code audio online',
        description: 'Convert text or Morse code into playable audio, then download a WAV file for practice.',
        step: howToSteps.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Morse Code Audio Translator', item: PAGE_URL },
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-12">
        <nav aria-label="Breadcrumb" className="text-xs text-white/60">
          <Link href="/" className="underline decoration-dotted underline-offset-4">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white/80">Morse Code Audio Translator</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] items-start">
          <div className="space-y-5">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/80">
              Audio-first Morse workflow
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Morse Code Audio Translator for playback, WAV download, copy, and share.
            </h1>
            <p className="text-lg text-white/80">
              This focused page keeps the full Translate → Listen → Copy / Download / Share path above the fold for students, HAM practice, puzzle makers, and accessibility workflows.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 text-sm text-white/80">
              <div className="glass-panel p-4">
                <p className="text-white font-semibold">Listen</p>
                <p className="text-white/60">Play adjustable sidetone instantly.</p>
              </div>
              <div className="glass-panel p-4">
                <p className="text-white font-semibold">Download</p>
                <p className="text-white/60">Save WAV drills with your settings.</p>
              </div>
              <div className="glass-panel p-4">
                <p className="text-white font-semibold">Share</p>
                <p className="text-white/60">Send output or copy a share-ready result.</p>
              </div>
            </div>
          </div>

          <MorseTranslator />
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            ['Classroom drills', 'Create short audio prompts, copy answers, and download WAV files for slides or LMS uploads.'],
            ['HAM listening practice', 'Tune WPM, frequency, waveform, and light noise before replaying the same message.'],
            ['Puzzle sharing', 'Translate clues into Morse, verify the text result, then share the output with teammates.'],
          ].map(([title, body]) => (
            <article key={title} className="glass-panel p-6">
              <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
              <p className="text-sm text-white/75">{body}</p>
            </article>
          ))}
        </section>

        <section id="howto" className="glass-panel p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-[0.4em] text-white/60">HOW TO</span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <h2 className="text-3xl font-bold text-white">How to play and download Morse code audio</h2>
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

        <section className="glass-panel p-6 space-y-4">
          <h2 className="text-3xl font-bold text-white">Morse audio translator FAQ</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-sm text-white/75">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-panel p-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need text-first decoding instead?</h2>
          <p className="text-white/75 mb-5">Return to the main Morse Code Translator or explore related long-tail tools.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">Main translator</Link>
            <Link href="/beeper-code" className="btn-ghost">Beeper code</Link>
            <Link href="/word-decoder" className="btn-ghost">Word decoder</Link>
            <Link href="/binary-to-morse" className="btn-ghost">Binary to Morse</Link>
          </div>
        </section>
      </div>
    </>
  );
}
