import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'IPTV Belgique Prix 2025 : Comparatif Complet des Abonnements | IPTV2Belgie',
  description:
    'Découvrez les meilleurs prix IPTV en Belgique pour 2025. Comparez avec Proximus et Telenet. ✓ 20.000+ chaînes ✓ Essai gratuit ✓ À partir de 9,99€/mois',
  keywords:
    'iptv belgique, iptv belgique prix, abonnement iptv belgique, iptv belgique legal, iptv belgie français, meilleur iptv belgique 2025',
  openGraph: {
    title: 'IPTV Belgique Prix 2025 : Le Guide Complet',
    description:
      "Économisez jusqu'à 70% sur votre abonnement TV. Comparatif détaillé des prix IPTV en Belgique.",
    images: ['/assets/hero section/multiple screens in a bar.webp'],
    locale: 'fr_BE',
  },
  alternates: {
    canonical:
      'https://www.iptv2belgie.be/blog/iptv-belgique-prix-comparatif-2025',
  },
};

export default function IPTVBelgiquePrixBlog() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/hero section/multiple screens in a bar.webp"
          alt="IPTV sur plusieurs écrans dans un bar sportif belge"
          fill
          priority
          quality={85}
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IPTV Belgique Prix 2025 : Le Comparatif Définitif
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Économisez jusqu'à 840€ par an sur votre abonnement TV
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl"
          >
            Voir Nos Prix →
          </Link>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Table des Matières */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Sommaire</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#prix-comparaison"
                className="text-sky-400 hover:text-sky-300"
              >
                1. Comparaison des Prix IPTV vs Opérateurs Traditionnels
              </a>
            </li>
            <li>
              <a
                href="#pourquoi-iptv"
                className="text-sky-400 hover:text-sky-300"
              >
                2. Pourquoi l'IPTV est 70% Moins Cher
              </a>
            </li>
            <li>
              <a
                href="#contenu-inclus"
                className="text-sky-400 hover:text-sky-300"
              >
                3. Ce Qui Est Inclus Dans Nos Abonnements
              </a>
            </li>
            <li>
              <a
                href="#economie-calcul"
                className="text-sky-400 hover:text-sky-300"
              >
                4. Calculez Vos Économies
              </a>
            </li>
            <li>
              <a
                href="#installation"
                className="text-sky-400 hover:text-sky-300"
              >
                5. Installation et Configuration
              </a>
            </li>
            <li>
              <a href="#faq" className="text-sky-400 hover:text-sky-300">
                6. Questions Fréquentes sur les Prix
              </a>
            </li>
          </ul>
        </nav>

        {/* Section 1: Comparaison des Prix */}
        <section id="prix-comparaison" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Comparaison des Prix : IPTV2Belgie vs Proximus vs Telenet
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Fournisseur
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Prix/mois
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Chaînes
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    VOD
                  </th>
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Appareils
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-white font-semibold">
                    IPTV2Belgie
                  </td>
                  <td className="px-6 py-4 text-emerald-400 font-bold">
                    9,99€
                  </td>
                  <td className="px-6 py-4 text-gray-300">20.000+</td>
                  <td className="px-6 py-4 text-gray-300">100.000+</td>
                  <td className="px-6 py-4 text-gray-300">1-5</td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-white">Proximus Pickx</td>
                  <td className="px-6 py-4 text-red-400">79,99€</td>
                  <td className="px-6 py-4 text-gray-300">150+</td>
                  <td className="px-6 py-4 text-gray-300">5.000+</td>
                  <td className="px-6 py-4 text-gray-300">2</td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 text-white">Telenet Play</td>
                  <td className="px-6 py-4 text-red-400">84,95€</td>
                  <td className="px-6 py-4 text-gray-300">120+</td>
                  <td className="px-6 py-4 text-gray-300">3.000+</td>
                  <td className="px-6 py-4 text-gray-300">2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-sky-600/20 to-emerald-600/20 border border-sky-500 rounded-lg p-6 mt-6">
            <p className="text-white text-lg">
              💰 <strong>Économie annuelle avec IPTV2Belgie :</strong> Jusqu'à
              900€ par rapport à Telenet
            </p>
          </div>
        </section>

        {/* CTA Aggressif */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ⚡ Offre Limitée : -50% sur l'Abonnement Annuel
          </h3>
          <p className="text-white mb-6">
            Seulement 59,99€ au lieu de 119,88€ pour 12 mois complets
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300"
          >
            J'ÉCONOMISE MAINTENANT →
          </Link>
        </div>

        {/* Section 2: Pourquoi moins cher */}
        <section id="pourquoi-iptv" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pourquoi l'IPTV est 70% Moins Cher que le Câble
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-sky-400 mb-4">
                ❌ Coûts du Câble Traditionnel
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Infrastructure physique coûteuse</li>
                <li>• Techniciens pour installation</li>
                <li>• Décodeur propriétaire obligatoire</li>
                <li>• Frais cachés et suppléments</li>
                <li>• Contrats de 12-24 mois</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-emerald-500">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                ✓ Avantages IPTV
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Streaming via Internet existant</li>
                <li>• Installation instantanée</li>
                <li>• Compatible tous appareils</li>
                <li>• Prix transparent, sans frais cachés</li>
                <li>• Sans engagement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Contenu Inclus avec Images */}
        <section id="contenu-inclus" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ce Que Vous Obtenez Pour 9,99€/mois
          </h2>

          {/* Chaînes Belges */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              📺 Toutes les Chaînes Belges
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/belgie/DETWAALF belgie.webp"
                  alt="De Twaalf série belge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/club brugge - champions league.webp"
                  alt="Club Brugge Champions League"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/standard de liège players on the pitch.webp"
                  alt="Standard de Liège"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/cycling/cycling - belgium.webp"
                  alt="Cyclisme belgique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              VRT, RTBF, VTM, RTL-TVI, La Une, Canvas, et plus de 50 chaînes
              belges en HD
            </p>
          </div>

          {/* Sports Premium */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              ⚽ Sports Premium Inclus
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/france/park des princes stadium - psg france.webp"
                  alt="PSG Ligue 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/formula/Formula 1 - grand prix.webp"
                  alt="Formula 1 Grand Prix"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/mma/mma - ufc hero section ring.webp"
                  alt="UFC MMA"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              BeIN Sports, Eleven Sports, Eurosport, Sky Sports - Tous inclus
              sans supplément!
            </p>
          </div>

          {/* Plateformes Streaming */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              🎬 Contenus Netflix, Disney+, Prime Video
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/netflix/squid game netflix.webp"
                  alt="Squid Game Netflix"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/disney/mandalorian disney.webp"
                  alt="Mandalorian Disney+"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/amazon/the boys prime video.webp"
                  alt="The Boys Prime Video"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/hbo/house of dragons hbo.webp"
                  alt="House of Dragons HBO"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Intelligent */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 mb-12 border border-sky-500">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                Vous payez encore 80€/mois pour la TV?
              </h3>
              <p className="text-gray-300">
                Nos clients économisent en moyenne 70€ par mois. Calculez vos
                économies.
              </p>
            </div>
            <Link
              href="/#pricing"
              className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300"
            >
              Calculer mes économies
            </Link>
          </div>
        </div>

        {/* Section 4: Calculateur d'économies */}
        <section id="economie-calcul" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Calculez Vos Économies Annuelles
          </h2>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="space-y-6">
              <div>
                <p className="text-gray-300 mb-2">
                  Si vous payez actuellement :
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-400">50€/mois</p>
                    <p className="text-sm text-gray-400">Économie : 480€/an</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-400">80€/mois</p>
                    <p className="text-sm text-gray-400">Économie : 840€/an</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-400">100€/mois</p>
                    <p className="text-sm text-gray-400">Économie : 1080€/an</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Avec IPTV2Belgie à 9,99€/mois, vous pourriez :
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✈️ Financer des vacances en famille</li>
                  <li>📱 Acheter le dernier iPhone</li>
                  <li>🎮 Offrir une PS5 à vos enfants</li>
                  <li>💰 Épargner pour l'avenir</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Installation */}
        <section id="installation" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Installation en 3 Minutes
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Commandez
              </h3>
              <p className="text-gray-400">
                Choisissez votre forfait et payez en toute sécurité
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-lg font-semibold text-white mb-2">Recevez</h3>
              <p className="text-gray-400">
                Vos identifiants en moins de 10 minutes
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Profitez
              </h3>
              <p className="text-gray-400">
                Regardez sur tous vos appareils immédiatement
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-sky-600/20 to-emerald-600/20 rounded-lg border border-sky-500">
            <p className="text-white">
              <strong>Compatible avec :</strong> Smart TV, Android, iOS,
              Windows, Mac, Firestick, Chromecast, et plus
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Questions Fréquentes sur les Prix
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Y a-t-il des frais cachés?
              </h3>
              <p className="text-gray-300">
                Non, absolument aucun. Le prix affiché est le prix final. Pas de
                frais d'installation, pas de location de décodeur, pas de
                suppléments.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Puis-je tester avant d'acheter?
              </h3>
              <p className="text-gray-300">
                Oui! Nous offrons un essai gratuit de 24 heures pour tester la
                qualité et la stabilité de notre service.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Comment fonctionne le paiement?
              </h3>
              <p className="text-gray-300">
                Paiement sécurisé par virement SEPA. Vous recevez vos
                identifiants dès réception du paiement (généralement en 10
                minutes).
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Quelle est la différence entre les forfaits?
              </h3>
              <p className="text-gray-300">
                Tous les forfaits incluent les mêmes 20.000+ chaînes et 100.000+
                VOD. La seule différence est le nombre d'appareils simultanés
                (1, 2, 3, 4 ou 5).
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Puis-je résilier à tout moment?
              </h3>
              <p className="text-gray-300">
                Oui, sans engagement. Vous pouvez arrêter votre abonnement à
                tout moment, sans frais de résiliation.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA - Super Aggressive */}
        <div className="bg-gradient-to-r from-red-900 to-orange-900 rounded-xl p-10 text-center border-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-white mb-4">
            🔥 DERNIÈRE CHANCE : Offre Flash 24H
          </h2>
          <p className="text-2xl text-yellow-300 mb-6">
            12 MOIS au prix de 6 MOIS = 59,99€ seulement!
          </p>
          <p className="text-white mb-8">
            Cette offre expire dans quelques heures. Ne manquez pas 50% de
            réduction!
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-yellow-500 text-black px-10 py-5 rounded-lg text-xl font-black hover:bg-yellow-400 transition-all duration-300 shadow-2xl animate-pulse"
          >
            JE PROFITE DE L'OFFRE MAINTENANT →
          </Link>
          <p className="text-gray-300 mt-4 text-sm">
            Plus de 500 clients nous ont rejoint cette semaine
          </p>
        </div>

        {/* Conclusion */}
        <section className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Conclusion : Pourquoi Payer Plus?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            En 2025, payer 80€ ou plus pour la télévision n'a plus de sens. Avec
            IPTV2Belgie, vous obtenez
            <strong className="text-white">
              {' '}
              133x plus de chaînes
            </strong> et{' '}
            <strong className="text-white">
              {' '}
              20x plus de contenu VOD
            </strong>{' '}
            pour
            <strong className="text-emerald-400"> 8x moins cher</strong> que les
            opérateurs traditionnels.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Nos clients économisent en moyenne{' '}
            <strong className="text-emerald-400">840€ par an</strong>. Imaginez
            ce que vous pourriez faire avec cet argent. Rejoignez les milliers
            de Belges qui ont déjà fait le choix intelligent.
          </p>

          <div className="bg-gradient-to-r from-sky-600 to-emerald-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à économiser 70€ par mois?
            </h3>
            <Link
              href="/#pricing"
              className="inline-block bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              Commencer l'économie →
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
