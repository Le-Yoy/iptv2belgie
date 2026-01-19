import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Legal IPTV Belgium | IPTV2Belgie',
  description:
    'Algemene voorwaarden IPTV2Belgie. 100% legale IPTV service in België. Transparante voorwaarden, geen verborgen kosten.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Service Agreement
            </h2>
            <p>
              By subscribing to IPTV2Belgie, you agree to these terms. Our
              service provides legal streaming access to television content as
              an alternative to traditional cable providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Subscription Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monthly subscriptions renew automatically</li>
              <li>No long-term contracts required</li>
              <li>Cancel anytime without penalties</li>
              <li>Prices include all features - no hidden fees</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Usage Policy
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal use only (not for commercial redistribution)</li>
              <li>Maximum devices as per your plan (1-5)</li>
              <li>Account sharing outside household prohibited</li>
              <li>VPN usage allowed for privacy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Payment
            </h2>
            <p>We accept:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>SEPA bank transfers</li>
              <li>PayPal</li>
              <li>Cryptocurrency</li>
            </ul>
            <p className="mt-3">
              All prices are in EUR and include VAT where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Service Availability
            </h2>
            <p>We maintain 99.9% uptime. In rare cases of maintenance:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Advance notice via email</li>
              <li>Maintenance typically 2-4 AM CET</li>
              <li>Service credits for extended outages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Customer Support
            </h2>
            <p>24/7 support available in Dutch, French, and English via:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>WhatsApp</li>
              <li>Telegram</li>
              <li>Email</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              IPTV2Belgie provides streaming services on an "as-is" basis. We
              are not liable for content provided by third-party broadcasters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Governing Law
            </h2>
            <p>
              These terms are governed by Belgian law. Any disputes will be
              resolved in Belgian courts.
            </p>
          </section>

          <section className="pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400">Last updated: January 2025</p>
            <p className="text-sm text-gray-400 mt-2">
              Questions? Contact legal@iptv2belgie.be
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
