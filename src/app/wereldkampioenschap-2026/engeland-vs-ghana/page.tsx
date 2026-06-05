import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Engeland - Ghana Live Kijken: WK 2026 Gratis Stream',
  description: 'Engeland - Ghana live kijken op het WK 2026, dinsdag 23 juni 2026. Aftrap 22:00 CEST. Volledige streamgids, tv-kanalen, gratis online.',
  openGraph: {
    title: 'Engeland - Ghana Live Kijken: WK 2026 Gratis Stream',
    description: 'Engeland - Ghana live kijken op het WK 2026, dinsdag 23 juni 2026. Aftrap 22:00 CEST. Volledige streamgids, tv-kanalen, gratis online.',
    type: 'article',
    locale: 'nl_BE',
    url: 'https://www.iptv2belgie.be/wereldkampioenschap-2026/engeland-vs-ghana',
  },
  alternates: {
    canonical: 'https://www.iptv2belgie.be/wereldkampioenschap-2026/engeland-vs-ghana',
  },
};

const sportsEventSchema = {"@context": "https://schema.org", "@type": "SportsEvent", "name": "Engeland vs Ghana - FIFA World Cup 2026", "startDate": "2026-06-23T20:00:00Z", "eventStatus": "https://schema.org/EventScheduled", "competitor": [{"@type": "SportsTeam", "name": "Engeland"}, {"@type": "SportsTeam", "name": "Ghana"}], "url": "https://www.iptv2belgie.be/wereldkampioenschap-2026/engeland-vs-ghana"};
const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Hoe laat begint Engeland - Ghana?", "acceptedAnswer": {"@type": "Answer", "text": "De wedstrijd begint op dinsdag 23 juni 2026 om 22:00 Belgische tijd (CEST)."}}, {"@type": "Question", "name": "Op welk kanaal is Engeland - Ghana te zien?", "acceptedAnswer": {"@type": "Answer", "text": "In België is de wedstrijd te volgen via RTBF (Franstalig, Auvio gratis) en VRT 1 (Nederlandstalig, VRT MAX gratis). Onze IPTV-dienst biedt alle officiële WK-feeds in HD/4K."}}, {"@type": "Question", "name": "Kan ik Engeland - Ghana gratis kijken?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, in België zijn RTBF en VRT gratis beschikbaar via Auvio en VRT MAX. Voor toegang tot alle WK-wedstrijden en internationale feeds is een IPTV-abonnement de meest betrouwbare keuze."}}, {"@type": "Question", "name": "Werkt onze IPTV-dienst op Smart TV en Firestick?", "acceptedAnswer": {"@type": "Answer", "text": "Ja. Onze service werkt op alle gangbare apparaten: Smart TV (Samsung, LG, Android TV), Firestick, smartphones, tablets en MAG-boxes. Activatie binnen 10 minuten."}}, {"@type": "Question", "name": "Is er garantie?", "acceptedAnswer": {"@type": "Answer", "text": "Ja, 30 dagen geld-terug-garantie zonder vragen. Geen contract, opzegbaar wanneer u wilt."}}]};

export default function WCMatchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-4xl mx-auto px-6 py-12 bg-slate-900 text-white min-h-screen">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/wereldkampioenschap-2026/" className="hover:text-sky-400 transition-colors">WK 2026</Link>
          <span className="mx-2">→</span>
          <span className="text-white">Engeland - Ghana</span>
        </nav>
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Engeland - Ghana: WK 2026 Live Kijken
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">Engeland speelt tegen Ghana.</p>
        </header>

        <div className="bg-slate-800 rounded-2xl p-6 mb-10 border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 text-sky-400">Wedstrijdgegevens</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div><dt className="text-gray-400">Datum</dt><dd className="text-white">dinsdag 23 juni 2026</dd></div>
            <div><dt className="text-gray-400">Aftrap</dt><dd className="text-white">22:00 CEST</dd></div>
            <div><dt className="text-gray-400">Fase</dt><dd className="text-white">Groepsfase</dd></div>
            <div><dt className="text-gray-400">Competitie</dt><dd className="text-white">FIFA WK 2026 - Groep L</dd></div>
          </dl>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Waar Engeland - Ghana kijken</h2>
        <ul className="space-y-2 mb-8 text-gray-300">
          <li><strong className="text-white">🇧🇪 België:</strong> RTBF (Auvio, gratis) en VRT 1 (VRT MAX, gratis)</li>
          <li><strong className="text-white">🇳🇱 Nederland:</strong> NOS (NPO Start)</li>
          <li><strong className="text-white">🇫🇷 Frankrijk:</strong> TF1 / beIN Sports</li>
          <li><strong className="text-white">🇬🇧 Verenigd Koninkrijk:</strong> BBC One / ITV1</li>
          <li><strong className="text-white">🇩🇪 Duitsland:</strong> ARD / ZDF</li>
          <li><strong className="text-white">🇪🇸 Spanje:</strong> RTVE (La 1)</li>
          <li><strong className="text-white">🇺🇸 Verenigde Staten:</strong> Fox Sports / Telemundo</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4">Aftraptijden wereldwijd</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-slate-700 rounded-xl overflow-hidden">
            <thead className="bg-slate-800 text-gray-400 uppercase text-xs">
              <tr><th className="text-left px-4 py-2">Regio</th><th className="text-left px-4 py-2">Aftrap</th></tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇧🇪 België (CEST)</td><td className="px-4 py-2 font-semibold text-white">22:00</td></tr>
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇬🇧 UK / Portugal (BST)</td><td className="px-4 py-2">21:00</td></tr>
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇺🇸 USA East (ET)</td><td className="px-4 py-2">16:00</td></tr>
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇺🇸 USA West (PT)</td><td className="px-4 py-2">13:00</td></tr>
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇲🇽 Mexico</td><td className="px-4 py-2">14:00</td></tr>
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇧🇷 Brazilië</td><td className="px-4 py-2">17:00</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-br from-sky-900/30 to-emerald-900/20 border border-sky-500/30 rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-bold mb-3">Engeland - Ghana gratis online kijken</h2>
          <p className="text-gray-300 mb-4">Onze premium IPTV-dienst zendt elke WK 2026 wedstrijd uit in HD en 4K — alle groepsfases, alle knockout-rondes, elke minuut. 49.000+ kanalen inclusief alle FIFA-omroepfeeds (BBC, ITV, Fox, TUDN, RTBF, beIN, ARD). Geen contracten, activatie binnen 10 minuten, werkt op elk apparaat.</p>
          <a href="https://wa.me/33773436514?text=Hoi!%20Ik%20wil%20Engeland%20-%20Ghana%20live%20kijken%20op%20WK%202026" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Krijg direct toegang via WhatsApp →</a>
          <p className="text-xs text-gray-500 mt-3">12.000+ tevreden abonnees · 30 dagen geld-terug-garantie · Antwoord binnen 5 minuten</p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Vorm en sleutelspelers</h2>
        <h3 className="text-lg font-semibold text-sky-400 mt-6 mb-2">Engeland</h3>
        <p className="text-gray-300 mb-4">Thomas Tuchel leidt Engeland in de WK 2026-wedstrijd tegen Ghana. </p>
        <h3 className="text-lg font-semibold text-sky-400 mt-6 mb-2">Ghana</h3>
        <p className="text-gray-300 mb-4">Carlos Queiroz leidt Ghana in de WK 2026-wedstrijd tegen Engeland. </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Veelgestelde vragen</h2>
        <div className="space-y-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Hoe laat begint Engeland - Ghana?</h3>
            <p className="text-gray-300">De wedstrijd begint op dinsdag 23 juni 2026 om 22:00 Belgische tijd (CEST).</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Op welk kanaal is Engeland - Ghana te zien?</h3>
            <p className="text-gray-300">In België is de wedstrijd te volgen via RTBF (Franstalig, Auvio gratis) en VRT 1 (Nederlandstalig, VRT MAX gratis). Onze IPTV-dienst biedt alle officiële WK-feeds in HD/4K.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Kan ik Engeland - Ghana gratis kijken?</h3>
            <p className="text-gray-300">Ja, in België zijn RTBF en VRT gratis beschikbaar via Auvio en VRT MAX. Voor toegang tot alle WK-wedstrijden en internationale feeds is een IPTV-abonnement de meest betrouwbare keuze.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Werkt onze IPTV-dienst op Smart TV en Firestick?</h3>
            <p className="text-gray-300">Ja. Onze service werkt op alle gangbare apparaten: Smart TV (Samsung, LG, Android TV), Firestick, smartphones, tablets en MAG-boxes. Activatie binnen 10 minuten.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Is er garantie?</h3>
            <p className="text-gray-300">Ja, 30 dagen geld-terug-garantie zonder vragen. Geen contract, opzegbaar wanneer u wilt.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <a href="https://wa.me/33773436514?text=Hoi!%20Ik%20wil%20Engeland%20-%20Ghana%20live%20kijken%20op%20WK%202026" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Bestel via WhatsApp →</a>
        </div>
      </article>
    </>
  );
}
