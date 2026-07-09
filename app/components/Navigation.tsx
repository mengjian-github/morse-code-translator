'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreContainerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '/', label: 'Translator' },
    { href: '/morse-code-audio', label: 'Audio WAV' },
    { href: '/binary-to-morse', label: 'Binary Lab' },
    { href: '/picture-decoder', label: 'Picture Decoder' },
    { href: '/identifier-encoder', label: 'Identifier Encoder' },
    { href: '/word-decoder', label: 'Word Decoder' },
    { href: '/cryptic-code-translator', label: 'Cryptic Code' },
    { href: '/beeper-code', label: 'Beeper Code' },
    { href: '/hexadecimal-cipher', label: 'Hex Cipher' },
    { href: '/translator-maker-guide', label: 'Maker Guide' },
    { href: '/blog', label: 'Blog' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        moreContainerRef.current &&
        !moreContainerRef.current.contains(event.target as Node)
      ) {
        setIsMoreOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(2,13,30,0.92)] border-b border-white/10 shadow-[0_20px_60px_rgba(3,22,50,0.45)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Morse Code Translator"
              width="44"
              height="44"
              className="h-11 w-11 rounded-lg shadow-lg"
            />
            <div className="hidden sm:block">
              <p className="font-semibold text-white text-lg tracking-tight">Morse Translator</p>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Signal Lab</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                data-analytics-event="nav_main_click"
                data-analytics-prop-label={link.label}
              >
                {link.label}
              </Link>
            ))}
            <div
              ref={moreContainerRef}
              className="relative group"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button
                className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white inline-flex items-center gap-1"
                type="button"
                aria-expanded={isMoreOpen}
                aria-controls="more-navigation-menu"
                aria-haspopup="menu"
                onClick={() => setIsMoreOpen((open) => !open)}
                data-analytics-event="nav_more_click"
              >
                More
                <svg
                  className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id="more-navigation-menu"
                role="menu"
                className={`absolute right-0 mt-2 w-60 rounded-2xl bg-[rgba(3,14,30,0.95)] border border-white/10 shadow-xl transition-all ${
                  isMoreOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                }`}
              >
                <div className="py-2">
                  {navLinks.slice(5).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5"
                      onClick={() => setIsMoreOpen(false)}
                      data-analytics-event="nav_more_item_click"
                      data-analytics-prop-label={link.label}
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/blog" className="btn-ghost text-sm" data-analytics-event="nav_blog_click">
              Updates & Blog
            </Link>
            <Link href="/#translator" className="btn-primary text-sm" data-analytics-event="nav_launch_translator_click">
              Launch Translator
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd800]/70"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[rgba(2,13,30,0.95)]">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white/80 hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
                data-analytics-event="mobile_nav_click"
                data-analytics-prop-label={link.label}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Link href="/blog" className="btn-ghost text-center" data-analytics-event="mobile_nav_blog_click">
                Updates & Blog
              </Link>
              <Link href="/#translator" className="btn-primary text-center" data-analytics-event="mobile_nav_launch_translator_click">
                Launch Translator
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
