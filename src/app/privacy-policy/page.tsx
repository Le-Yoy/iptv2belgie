import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - IPTV2Belgie | GDPR Compliant',
  description:
    'Privacy policy voor IPTV2Belgie. We beschermen uw gegevens volgens GDPR. Geen logs, geen tracking. Veilig streamen met volledige privacy.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Data Protection
            </h2>
            <p>
              IPTV2Belgie respects your privacy. We operate in full compliance
              with GDPR (General Data Protection Regulation) and Belgian privacy
              laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address (for account access)</li>
              <li>Payment information (processed securely via SEPA)</li>
              <li>Device information (for service optimization)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              What We Don't Do
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We never log your viewing history</li>
              <li>We don't sell your data to third parties</li>
              <li>We don't track your online activities</li>
              <li>We don't share information with ISPs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Your Rights
            </h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Object to data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>For privacy concerns: privacy@iptv2belgie.be</p>
            <p className="mt-2">
              Data Protection Officer: Available via WhatsApp or Telegram
            </p>
          </section>

          <section className="pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400">Last updated: January 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
}
