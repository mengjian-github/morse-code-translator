import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Signal Tools',
      links: [
        { href: '/', label: 'Morse Translator' },
        { href: '/binary-to-morse', label: 'Binary Lab' },
        { href: '/picture-decoder', label: 'Picture Decoder' },
        { href: '/identifier-encoder', label: 'Identifier Encoder' },
      ],
    },
    {
      title: 'Code Suites',
      links: [
        { href: '/word-decoder', label: 'Word Decoder' },
        { href: '/cryptic-code-translator', label: 'Cryptic Code' },
        { href: '/beeper-code', label: 'Beeper Code' },
        { href: '/hexadecimal-cipher', label: 'Hex Cipher' },
      ],
    },
    {
      title: 'Learn & Build',
      links: [
        { href: '/translator-maker-guide', label: 'Translator Maker Guide' },
        { href: '/blog', label: 'Blog' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/terms', label: 'Terms' },
      ],
    },
  ];

  return (
    <footer className="mt-20 border-t border-white/10 bg-[rgba(2,12,26,0.95)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-white/80">
        <div className="grid gap-10 lg:grid-cols-[2fr,3fr]">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Morse Translator logo" width={56} height={56} className="rounded-2xl" />
              <div>
                <p className="text-lg font-semibold text-white">Morse Translator</p>
                <p className="text-sm uppercase tracking-[0.4em] text-white/50">Signal Simulation Lab</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70 max-w-md">
              Real-time CW translation, training telemetry, and accessibility-first controls for students, HAM operators, and assistive-tech users. Built with privacy, precision, and play in mind.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="signal-chip">5–45 WPM</span>
              <span className="signal-chip">300–1200 Hz</span>
              <span className="signal-chip">Waveforms · Sine / Square / Triangle / Saw</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60 mb-4">{col.title}</p>
                <ul className="space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-[0.35em] text-white/40">
          <p>© {currentYear} MorseCodeTranslator.app</p>
          <a href="mailto:support@morsecodetranslator.app" className="hover:text-white">support@morsecodetranslator.app</a>
        </div>
      </div>
    </footer>
  );
}
