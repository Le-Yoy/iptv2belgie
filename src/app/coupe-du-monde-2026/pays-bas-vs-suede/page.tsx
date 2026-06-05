import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pays-Bas - Suède en Direct: Coupe du Monde 2026 Streaming',
  description: 'Pays-Bas - Suède en direct à la Coupe du Monde 2026, samedi 20 juin 2026. Coup d\'envoi 19:00 CEST. Guide streaming complet, chaînes TV, gratuit.',
  openGraph: {
    title: 'Pays-Bas - Suède en Direct: Coupe du Monde 2026 Streaming',
    description: 'Pays-Bas - Suède en direct à la Coupe du Monde 2026, samedi 20 juin 2026. Coup d\'envoi 19:00 CEST. Guide streaming complet, chaînes TV, gratuit.',
    type: 'article',
    locale: 'fr_BE',
    url: 'https://www.iptv2belgie.be/coupe-du-monde-2026/pays-bas-vs-suede',
  },
  alternates: {
    canonical: 'https://www.iptv2belgie.be/coupe-du-monde-2026/pays-bas-vs-suede',
  },
};

const sportsEventSchema = {"@context": "https://schema.org", "@type": "SportsEvent", "name": "Pays-Bas vs Suède - FIFA World Cup 2026", "startDate": "2026-06-20T17:00:00Z", "eventStatus": "https://schema.org/EventScheduled", "competitor": [{"@type": "SportsTeam", "name": "Pays-Bas"}, {"@type": "SportsTeam", "name": "Suède"}], "url": "https://www.iptv2belgie.be/coupe-du-monde-2026/pays-bas-vs-suede"};
const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "À quelle heure commence Pays-Bas - Suède ?", "acceptedAnswer": {"@type": "Answer", "text": "Le match débute le samedi 20 juin 2026 à 19:00 heure belge (CEST)."}}, {"@type": "Question", "name": "Sur quelle chaîne regarder Pays-Bas - Suède ?", "acceptedAnswer": {"@type": "Answer", "text": "En Belgique : RTBF (français, Auvio gratuit) et VRT 1 (néerlandais, VRT MAX gratuit). Notre service IPTV propose tous les flux officiels de la Coupe du Monde en HD/4K."}}, {"@type": "Question", "name": "Peut-on regarder Pays-Bas - Suède gratuitement ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui en Belgique, RTBF et VRT diffusent gratuitement via Auvio et VRT MAX. Pour accéder à tous les matchs et flux internationaux, un abonnement IPTV reste l'option la plus fiable."}}, {"@type": "Question", "name": "Notre service IPTV fonctionne sur Smart TV et Firestick ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui. Notre service fonctionne sur tous les appareils courants : Smart TV (Samsung, LG, Android TV), Firestick, smartphones, tablettes, boîtiers MAG. Activation en moins de 10 minutes."}}, {"@type": "Question", "name": "Y a-t-il une garantie ?", "acceptedAnswer": {"@type": "Answer", "text": "Oui, garantie satisfait ou remboursé de 30 jours, sans condition. Sans engagement."}}]};

export default function WCMatchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className="max-w-4xl mx-auto px-6 py-12 bg-slate-900 text-white min-h-screen">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/coupe-du-monde-2026/" className="hover:text-sky-400 transition-colors">Coupe du Monde 2026</Link>
          <span className="mx-2">→</span>
          <span className="text-white">Pays-Bas - Suède</span>
        </nav>
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Pays-Bas - Suède en Direct: Coupe du Monde 2026
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">Pays-Bas affronte Suède.</p>
        </header>

        <div className="bg-slate-800 rounded-2xl p-6 mb-10 border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 text-sky-400">Détails du match</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div><dt className="text-gray-400">Date</dt><dd className="text-white">samedi 20 juin 2026</dd></div>
            <div><dt className="text-gray-400">Coup d'envoi</dt><dd className="text-white">19:00 CEST</dd></div>
            <div><dt className="text-gray-400">Phase</dt><dd className="text-white">Phase de groupes</dd></div>
            <div><dt className="text-gray-400">Compétition</dt><dd className="text-white">Coupe du Monde FIFA 2026 - Groupe F</dd></div>
          </dl>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Où regarder Pays-Bas - Suède</h2>
        <ul className="space-y-2 mb-8 text-gray-300">
          <li><strong className="text-white">🇧🇪 Belgique:</strong> RTBF (Auvio, gratuit) et VRT 1 (VRT MAX, gratuit)</li>
          <li><strong className="text-white">🇳🇱 Pays-Bas:</strong> NOS (NPO Start)</li>
          <li><strong className="text-white">🇫🇷 France:</strong> TF1 / beIN Sports</li>
          <li><strong className="text-white">🇬🇧 Royaume-Uni:</strong> BBC One / ITV1</li>
          <li><strong className="text-white">🇩🇪 Allemagne:</strong> ARD / ZDF</li>
          <li><strong className="text-white">🇪🇸 Espagne:</strong> RTVE (La 1)</li>
          <li><strong className="text-white">🇺🇸 États-Unis:</strong> Fox Sports / Telemundo</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4">Heures de coup d'envoi dans le monde</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-slate-700 rounded-xl overflow-hidden">
            <thead className="bg-slate-800 text-gray-400 uppercase text-xs">
              <tr><th className="text-left px-4 py-2">Région</th><th className="text-left px-4 py-2">Coup d'envoi</th></tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇧🇪 Belgique (CEST)</td><td className="px-4 py-2 font-semibold text-white">19:00</td></tr>
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇬🇧 UK / Portugal (BST)</td><td className="px-4 py-2">18:00</td></tr>
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇺🇸 USA East (ET)</td><td className="px-4 py-2">13:00</td></tr>
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇺🇸 USA West (PT)</td><td className="px-4 py-2">10:00</td></tr>
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇲🇽 Mexico</td><td className="px-4 py-2">11:00</td></tr>
              <tr className="border-t border-slate-700"><td className="px-4 py-2">🇧🇷 Brésil</td><td className="px-4 py-2">14:00</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-br from-sky-900/30 to-emerald-900/20 border border-sky-500/30 rounded-2xl p-6 mb-10">
          <h2 className="text-2xl font-bold mb-3">Regarder Pays-Bas - Suède gratuitement en ligne</h2>
          <p className="text-gray-300 mb-4">Notre service IPTV premium diffuse chaque match de la Coupe du Monde 2026 en HD et 4K — phases de groupes, phases finales, chaque minute. 49 000+ chaînes y compris tous les flux officiels FIFA (BBC, ITV, Fox, TUDN, RTBF, beIN, ARD). Sans engagement, activation en moins de 10 minutes, sur tous les appareils.</p>
          <a href="https://wa.me/33773436514?text=Bonjour!%20Je%20voudrais%20regarder%20Pays-Bas%20-%20Suède%20en%20direct%20à%20la%20Coupe%20du%20Monde%202026" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Accès instantané via WhatsApp →</a>
          <p className="text-xs text-gray-500 mt-3">12 000+ abonnés satisfaits · Garantie satisfait ou remboursé 30 jours · Réponse sous 5 minutes</p>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Forme et joueurs clés</h2>
        <h3 className="text-lg font-semibold text-sky-400 mt-6 mb-2">Pays-Bas</h3>
        <p className="text-gray-300 mb-4">Ronald Koeman dirige Pays-Bas pour le match CdM 2026 contre Suède. </p>
        <h3 className="text-lg font-semibold text-sky-400 mt-6 mb-2">Suède</h3>
        <p className="text-gray-300 mb-4">Graham Potter dirige Suède pour le match CdM 2026 contre Pays-Bas. </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Questions fréquentes</h2>
        <div className="space-y-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">À quelle heure commence Pays-Bas - Suède ?</h3>
            <p className="text-gray-300">Le match débute le samedi 20 juin 2026 à 19:00 heure belge (CEST).</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Sur quelle chaîne regarder Pays-Bas - Suède ?</h3>
            <p className="text-gray-300">En Belgique : RTBF (français, Auvio gratuit) et VRT 1 (néerlandais, VRT MAX gratuit). Notre service IPTV propose tous les flux officiels de la Coupe du Monde en HD/4K.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Peut-on regarder Pays-Bas - Suède gratuitement ?</h3>
            <p className="text-gray-300">Oui en Belgique, RTBF et VRT diffusent gratuitement via Auvio et VRT MAX. Pour accéder à tous les matchs et flux internationaux, un abonnement IPTV reste l'option la plus fiable.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Notre service IPTV fonctionne sur Smart TV et Firestick ?</h3>
            <p className="text-gray-300">Oui. Notre service fonctionne sur tous les appareils courants : Smart TV (Samsung, LG, Android TV), Firestick, smartphones, tablettes, boîtiers MAG. Activation en moins de 10 minutes.</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-sky-400 mb-2">Y a-t-il une garantie ?</h3>
            <p className="text-gray-300">Oui, garantie satisfait ou remboursé de 30 jours, sans condition. Sans engagement.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <a href="https://wa.me/33773436514?text=Bonjour!%20Je%20voudrais%20regarder%20Pays-Bas%20-%20Suède%20en%20direct%20à%20la%20Coupe%20du%20Monde%202026" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">Commander via WhatsApp →</a>
        </div>
      </article>
    </>
  );
}
