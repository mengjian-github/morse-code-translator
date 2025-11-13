import type { Metadata } from 'next';
import Link from 'next/link';
import { absoluteUrl, buildOpenGraphMeta } from '@/app/utils/seo';

export const metadata: Metadata = {
  title: 'Terms of Service | Morse Code Translator',
  description: 'Terms of service for MorseCodeTranslator.app. Read our terms and conditions for using our morse code translation tools.',
  alternates: {
    canonical: absoluteUrl('/terms')
  },
  openGraph: buildOpenGraphMeta({
    title: 'Terms of Service | Morse Code Translator',
    description: 'Terms of service for MorseCodeTranslator.app. Read our terms and conditions for using our morse code translation tools.',
    url: absoluteUrl('/terms'),
  })
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-primary-600 dark:text-primary-400 hover:underline">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600 dark:text-gray-400">Terms of Service</span>
      </nav>

      <article className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Terms of Service
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 dark:text-gray-300">
            By accessing and using MorseCodeTranslator.app ("the Service"), you accept and agree to be bound by the terms
            and conditions of this agreement. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Description of Service</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            MorseCodeTranslator.app provides free online tools for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Converting text to morse code and vice versa</li>
            <li>Binary to morse code conversion</li>
            <li>Educational resources about morse code</li>
            <li>Additional encoding and decoding tools</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Use of Service</h2>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">3.1 Permitted Use</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You may use our services for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
            <li>Personal, educational, or professional purposes</li>
            <li>Learning morse code</li>
            <li>Translating messages for legitimate communication</li>
            <li>Research and development projects</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">3.2 Prohibited Use</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Use the service for any illegal purposes</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Introduce viruses, malware, or harmful code</li>
            <li>Scrape or harvest data from the website</li>
            <li>Interfere with the proper functioning of the service</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Impersonate others or misrepresent your affiliation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Intellectual Property Rights</h2>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">4.1 Our Content</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            All content on MorseCodeTranslator.app, including but not limited to text, graphics, logos, code, and software,
            is the property of MorseCodeTranslator.app or its content suppliers and is protected by international copyright laws.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">4.2 Your Content</h3>
          <p className="text-gray-700 dark:text-gray-300">
            You retain all rights to any text or content you input into our translation tools. We do not claim ownership
            of your content. All translations are processed locally in your browser and are not stored on our servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Disclaimer of Warranties</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            WE DO NOT WARRANT THAT:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>The service will be uninterrupted or error-free</li>
            <li>The results obtained from the service will be accurate or reliable</li>
            <li>Any errors in the software will be corrected</li>
            <li>The service will meet your specific requirements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-700 dark:text-gray-300">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MorseCodeTranslator.app SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR
            INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mt-4">
            <li>Your use or inability to use the service</li>
            <li>Any unauthorized access to or use of our servers</li>
            <li>Any interruption or cessation of transmission to or from the service</li>
            <li>Any bugs, viruses, or other harmful code that may be transmitted through the service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Indemnification</h2>
          <p className="text-gray-700 dark:text-gray-300">
            You agree to indemnify, defend, and hold harmless MorseCodeTranslator.app, its officers, directors, employees,
            and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of
            your use of the service or violation of these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Third-Party Links</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our service may contain links to third-party websites or services. We are not responsible for the content,
            privacy policies, or practices of any third-party sites. You acknowledge and agree that we shall not be liable
            for any damage or loss caused by your use of any third-party content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Modifications to Service</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We reserve the right to modify, suspend, or discontinue the service (or any part thereof) at any time with or
            without notice. We shall not be liable to you or any third party for any modification, suspension, or
            discontinuance of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to Terms</h2>
          <p className="text-gray-700 dark:text-gray-300">
            We reserve the right to modify these terms at any time. We will notify users of any material changes by updating
            the "Last updated" date at the top of this page. Your continued use of the service after any changes constitutes
            acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Privacy Policy</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Your use of the service is also governed by our{' '}
            <Link href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
              Privacy Policy
            </Link>
            . Please review our Privacy Policy to understand our data practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Governing Law</h2>
          <p className="text-gray-700 dark:text-gray-300">
            These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict
            of law provisions. Any disputes arising from these terms or your use of the service shall be resolved in
            accordance with these laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Severability</h2>
          <p className="text-gray-700 dark:text-gray-300">
            If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain
            in full force and effect. The invalid or unenforceable provision shall be replaced with a valid provision that
            most closely matches the intent of the original provision.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Entire Agreement</h2>
          <p className="text-gray-700 dark:text-gray-300">
            These terms, together with our Privacy Policy, constitute the entire agreement between you and MorseCodeTranslator.app
            regarding your use of the service and supersede all prior agreements and understandings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Contact Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            If you have any questions about these Terms of Service, please contact us through:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Our website contact form</li>
            <li>The contact information provided on our website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">16. Educational Purpose</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our tools and resources are provided primarily for educational purposes. While we strive for accuracy, we cannot
            guarantee that our tools are suitable for all professional or critical applications. Users should verify critical
            translations independently.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">17. User Responsibilities</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            As a user of our service, you are responsible for:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li>Maintaining the confidentiality of any account credentials</li>
            <li>Ensuring your use complies with applicable laws and regulations</li>
            <li>Verifying the accuracy of translations for critical applications</li>
            <li>Respecting the intellectual property rights of others</li>
          </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            By using MorseCodeTranslator.app, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
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
