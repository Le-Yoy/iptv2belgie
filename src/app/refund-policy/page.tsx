import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy - 30 Days Guarantee | IPTV2Belgie',
  description:
    '30 dagen geld-terug-garantie. Niet tevreden? 100% terugbetaling zonder vragen. Risicoloos IPTV proberen in België.',
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Refund Policy
        </h1>

        <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            30-Day Money Back Guarantee
          </h2>
          <p className="text-gray-300">
            We're so confident you'll love our service that we offer a full
            refund within 30 days if you're not satisfied.
          </p>
        </div>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              How It Works
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Try our service risk-free for 30 days</li>
              <li>If unsatisfied, contact support via WhatsApp or Telegram</li>
              <li>Receive full refund within 24-48 hours</li>
              <li>No questions asked, no hidden conditions</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Eligibility
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request must be made within 30 days of purchase</li>
              <li>Available for all subscription plans</li>
              <li>One refund per customer</li>
              <li>Refund processed to original payment method</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Processing Time
            </h2>
            <p>SEPA transfers: 2-3 business days</p>
            <p>PayPal: Instant</p>
            <p>Bank transfer: 3-5 business days</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Contact for Refund
            </h2>
            <p>WhatsApp: +32 XXX XXX XXX</p>
            <p>Telegram: @iptv2belgie_support</p>
            <p>Email: refund@iptv2belgie.be</p>
          </section>

          <section className="pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              This policy is part of our Terms of Service
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
