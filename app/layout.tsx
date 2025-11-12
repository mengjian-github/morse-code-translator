import type { Metadata } from "next";
import { IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
});

const sourceSans = Source_Sans_3({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://morsecodetranslator.app'),
  title: {
    default: "Morse Code Translator - Free Online Morse Code Converter",
    template: "%s | Morse Code Translator"
  },
  description: "Instant morse code translator with live conversion, audio playback, downloads, and learning tools. Turn text into dits and dahs or decode CW back into words.",
  keywords: ["morse code translator", "morse code converter", "text to morse", "morse to text", "morse code audio", "morse code decoder", "online morse translator"],
  authors: [{ name: "MorseCodeTranslator.app" }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://morsecodetranslator.app',
    siteName: 'Morse Code Translator',
    title: 'Morse Code Translator - Free Online Morse Code Converter',
    description: 'Instant morse code translator with live conversion, audio playback, downloads, and learning tools. Turn text into dits and dahs or decode CW back into words.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morse Code Translator - Free Online Morse Code Converter',
    description: 'Instant morse code translator with live conversion, audio playback, downloads, and learning tools.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EYY0E1XFE8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EYY0E1XFE8');
        `}
      </Script>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tu21jyi47m");
        `}
      </Script>
      <body
        className={`${sourceSans.variable} ${plexMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
