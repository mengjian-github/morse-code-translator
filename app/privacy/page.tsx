import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Morse Code Translator',
  description: 'Privacy policy for MorseCodeTranslator.app. Learn how we protect your data and respect your privacy.',
  alternates: {
    canonical: 'https://morsecodetranslator.app/privacy'
  }
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600 dark:text-gray-400">Privacy Policy</span>
      </nav>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Welcome to MorseCodeTranslator.app. We respect your privacy and are committed to protecting your personal data.
            This privacy policy explains how we handle your information when you use our morse code translation tools and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Usage Data</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may collect anonymous usage data to improve our services, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li>Browser type and version</li>
            <li>Pages visited and time spent on pages</li>
            <li>Date and time of visits</li>
            <li>Referring website addresses</li>
            <li>General geographic location (country/region)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Translation Data</h3>
          <p className="text-gray-700 dark:text-gray-300">
            All morse code translations are processed locally in your browser. We do not store, transmit, or have access to the
            text or morse code you translate. Your translations remain completely private.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We use the limited data we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Improve and optimize our website and translation tools</li>
            <li>Understand how users interact with our services</li>
            <li>Detect and prevent technical issues</li>
            <li>Ensure the security and integrity of our services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies and Tracking</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We use minimal cookies to enhance your experience:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
            <li><strong>Preference Cookies:</strong> Remember your settings (e.g., dark mode preference)</li>
            <li><strong>Analytics Cookies:</strong> Help us understand website usage (anonymous data only)</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect
            website functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We may use third-party services for analytics and hosting. These services have their own privacy policies:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Web hosting providers</li>
            <li>Analytics services (e.g., Google Analytics)</li>
            <li>Content delivery networks (CDNs)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We implement appropriate technical and organizational measures to protect your data. Since all translations
            are processed locally in your browser, your morse code translations never leave your device.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our services are intended for general audiences. We do not knowingly collect personal information from children
            under 13. If you believe we have inadvertently collected such information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Rights</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Access to the personal data we hold about you</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data</li>
            <li>Objection to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">International Data Transfers</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our services may be accessed from anywhere in the world. We ensure appropriate safeguards are in place for
            any international data transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We may update this privacy policy from time to time. We will notify users of any material changes by updating
            the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you have any questions about this privacy policy or our data practices, please contact us through:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Our website contact form</li>
            <li>The contact information provided on our website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">GDPR Compliance</h2>
          <p className="text-gray-700 dark:text-gray-300">
            For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR).
            We process your data based on legitimate interests in providing and improving our services. You have the right
            to lodge a complaint with your local data protection authority.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CCPA Compliance</h2>
          <p className="text-gray-700 dark:text-gray-300">
            For California residents, under the California Consumer Privacy Act (CCPA), you have the right to know what
            personal information we collect and how it's used. You may request deletion of your data or opt-out of any
            data sales (though we do not sell personal information).
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </article>
    </div>
  );
}
