'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Translator' },
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

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(2,13,30,0.92)] border-b border-white/10 shadow-[0_20px_60px_rgba(3,22,50,0.45)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Morse Code Translator"
              width={44}
              height={44}
              priority
              className="rounded-lg shadow-lg"
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
              >
                {link.label}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white inline-flex items-center gap-1">
                More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-[rgba(3,14,30,0.95)] border border-white/10 shadow-xl opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all">
                <div className="py-2">
                  {navLinks.slice(5).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/blog" className="btn-ghost text-sm">
              Updates & Blog
            </Link>
            <Link href="/#translator" className="btn-primary text-sm">
              Launch Translator
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd800]/70"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
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
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Link href="/blog" className="btn-ghost text-center">
                Updates & Blog
              </Link>
              <Link href="/#translator" className="btn-primary text-center">
                Launch Translator
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
