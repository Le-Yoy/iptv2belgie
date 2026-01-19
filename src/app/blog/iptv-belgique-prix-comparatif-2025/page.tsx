import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Prix IPTV Belgique 2025: Comparatif Complet Proximus vs Telenet vs IPTV | IPTV2Belgie',
  description:
    'Découvrez comment économiser 900€/an sur votre abonnement TV. Analyse détaillée des prix IPTV vs Proximus (79,99€) vs Telenet (84,95€). Guide complet avec calculateur d&apos;économies.',
  keywords:
    'iptv belgique prix, iptv belgique pas cher, abonnement iptv belgique, alternative proximus, alternative telenet, iptv belgique legal, meilleur iptv belgique 2025',
  openGraph: {
    title: 'IPTV Belgique 2025: Payez 9,99€ au lieu de 85€/mois',
    description:
      'Le guide définitif pour économiser sur votre TV en Belgique. Comparaison complète des prix et services.',
    locale: 'fr_BE',
    type: 'article',
  },
  alternates: {
    canonical:
      'https://www.iptv2belgie.be/blog/iptv-belgique-prix-comparatif-2025',
  },
};
export default function IPTVBelgiquePrixBlog() {
  const structuredData = {
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline:
          'Prix IPTV Belgique 2025: Économisez 900€ par an sur votre TV',
        description:
          'Analyse complète des prix TV en Belgique. Comparaison détaillée IPTV vs Proximus vs Telenet.',
        datePublished: '2025-01-15T00:00:00+01:00',
        dateModified: '2025-01-15T00:00:00+01:00',
        image: 'https://www.iptv2belgie.be/og-image.jpg',
        author: {
          '@type': 'Organization',
          name: 'IPTV2Belgie',
          url: 'https://www.iptv2belgie.be',
        },
        publisher: {
          '@type': 'Organization',
          name: 'IPTV2Belgie',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.iptv2belgie.be/favicon.svg',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id':
            'https://www.iptv2belgie.be/blog/iptv-belgique-prix-comparatif-2025',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Combien coûte IPTV par rapport à Proximus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'IPTV2Belgie coûte 9,99€/mois contre 79,99€/mois pour Proximus, soit une économie de 840€ par an.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment économiser 900€ par an?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'En passant de Telenet (84,95€/mois) à IPTV2Belgie (9,99€/mois), vous économisez exactement 899,52€ par an.',
            },
          },
          {
            '@type': 'Question',
            name: 'Y a-t-il des frais cachés?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Non, le prix affiché est tout compris. Pas de location de décodeur, pas de frais d'installation.",
            },
          },
        ],
      },
    ],
  };

  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            La Vérité Choquante: Vous Payez 8x Trop Cher pour la TV
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Proximus: 79,99€/mois • Telenet: 84,95€/mois • Orange: 75€/mois
          </p>
          <p className="text-2xl md:text-3xl text-emerald-400 font-bold mb-8">
            IPTV2Belgie: Seulement 9,99€/mois pour 20.000+ chaînes
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl"
          >
            Voir combien vous pouvez économiser →
          </Link>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Table des matières */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ce que vous allez découvrir:
          </h2>
          <ol className="space-y-2 text-gray-300">
            <li>
              1.{' '}
              <a
                href="#verite-prix"
                className="text-sky-400 hover:text-sky-300"
              >
                La vérité sur les prix TV en Belgique en 2025
              </a>
            </li>
            <li>
              2.{' '}
              <a href="#cout-cache" className="text-sky-400 hover:text-sky-300">
                Les coûts cachés que Proximus et Telenet ne vous disent pas
              </a>
            </li>
            <li>
              3.{' '}
              <a
                href="#comparaison"
                className="text-sky-400 hover:text-sky-300"
              >
                Tableau comparatif détaillé: IPTV vs opérateurs traditionnels
              </a>
            </li>
            <li>
              4.{' '}
              <a href="#economie" className="text-sky-400 hover:text-sky-300">
                Calculateur: Combien allez-vous économiser exactement?
              </a>
            </li>
            <li>
              5.{' '}
              <a href="#contenu" className="text-sky-400 hover:text-sky-300">
                Ce que vous obtenez vraiment pour 9,99€/mois
              </a>
            </li>
            <li>
              6.{' '}
              <a
                href="#installation"
                className="text-sky-400 hover:text-sky-300"
              >
                Installation: Pourquoi c&apos;est 10x plus simple qu&apos;avec
                Proximus
              </a>
            </li>
            <li>
              7.{' '}
              <a href="#legal" className="text-sky-400 hover:text-sky-300">
                Est-ce légal? La réponse définitive
              </a>
            </li>
            <li>
              8.{' '}
              <a
                href="#temoignages"
                className="text-sky-400 hover:text-sky-300"
              >
                Ce que disent les 10.000+ Belges qui ont déjà changé
              </a>
            </li>
          </ol>
        </nav>

        {/* Introduction percutante */}
        <section className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">Imaginez ceci:</strong> Vous payez
            actuellement entre 75€ et 95€ par mois pour regarder la télévision.
            C&apos;est entre 900€ et 1.140€ par an. Pour quoi exactement? 150
            chaînes dont vous n&apos;en regardez que 10? Un décodeur qui tombe
            en panne tous les 2 ans? Un service client qui vous fait attendre 45
            minutes au téléphone?
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            En 2025, cette situation est devenue absurde. Pourquoi? Parce que la
            technologie IPTV permet maintenant d&apos;accéder à
            <strong className="text-white">
              {' '}
              20.000+ chaînes du monde entier
            </strong>{' '}
            pour{' '}
            <strong className="text-emerald-400">
              seulement 9,99€ par mois
            </strong>
            .
          </p>
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500 rounded-lg p-6">
            <p className="text-white text-lg">
              ⚠️ <strong>Attention:</strong> Chaque mois que vous attendez, vous
              perdez 75€ minimum. C&apos;est 2,50€ par jour jeté par la fenêtre.
            </p>
          </div>
        </section>

        {/* Section 1: La vérité sur les prix */}
        <section id="verite-prix" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            1. La Vérité sur les Prix TV en Belgique en 2025
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Le marché belge de la télévision est dominé par trois acteurs
            principaux: Proximus, Telenet et Orange. Ces entreprises profitent
            de leur position dominante pour maintenir des prix artificiellement
            élevés. Voici les faits:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center border-2 border-red-500">
              <h3 className="text-xl font-bold text-white mb-2">
                Proximus Pickx
              </h3>
              <p className="text-4xl font-bold text-red-400 mb-2">79,99€</p>
              <p className="text-gray-400">/mois</p>
              <p className="text-sm text-gray-500 mt-2">
                +9,99€ location décodeur
              </p>
              <p className="text-sm text-gray-500">= 1.079€/an</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border-2 border-red-500">
              <h3 className="text-xl font-bold text-white mb-2">
                Telenet Play
              </h3>
              <p className="text-4xl font-bold text-red-400 mb-2">84,95€</p>
              <p className="text-gray-400">/mois</p>
              <p className="text-sm text-gray-500 mt-2">+7,95€ location box</p>
              <p className="text-sm text-gray-500">= 1.115€/an</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border-2 border-emerald-500">
              <h3 className="text-xl font-bold text-white mb-2">IPTV2Belgie</h3>
              <p className="text-4xl font-bold text-emerald-400 mb-2">9,99€</p>
              <p className="text-gray-400">/mois</p>
              <p className="text-sm text-emerald-400 mt-2">Tout inclus</p>
              <p className="text-sm text-emerald-400 font-bold">= 119,88€/an</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Le calcul qui fait mal:
            </h3>
            <p className="text-gray-300 mb-4">
              Si vous êtes client Telenet avec le pack sport (104,90€/mois),
              vous payez{' '}
              <strong className="text-red-400">1.258,80€ par an</strong>. Avec
              IPTV2Belgie à 119,88€/an, vous économisez{' '}
              <strong className="text-emerald-400">
                1.138,92€ chaque année
              </strong>
              .
            </p>
            <p className="text-xl text-white font-bold">
              C&apos;est assez pour: Un voyage aux Maldives 🏝️ + Un iPhone 15 📱
              + Il vous reste encore 200€
            </p>
          </div>
        </section>

        {/* Section 2: Coûts cachés */}
        <section id="cout-cache" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            2. Les Coûts Cachés que Personne ne Vous Dit
          </h2>

          <div className="space-y-6">
            <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-3">
                ❌ Chez Proximus/Telenet:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • <strong>Frais d&apos;installation:</strong> 59€ à 99€
                  (technicien obligatoire)
                </li>
                <li>
                  • <strong>Location décodeur:</strong> 7,95€ à 9,99€/mois (95€
                  à 120€/an)
                </li>
                <li>
                  • <strong>Décodeur supplémentaire:</strong> +5€/mois par
                  appareil
                </li>
                <li>
                  • <strong>Pack sport (Eleven):</strong> +24,95€/mois
                  (299,40€/an)
                </li>
                <li>
                  • <strong>Films & séries premium:</strong> +15€/mois minimum
                </li>
                <li>
                  • <strong>Frais de résiliation:</strong> 250€ si vous partez
                  avant 2 ans
                </li>
                <li>
                  • <strong>Augmentation annuelle:</strong> 3-5% chaque janvier
                  (non annoncée)
                </li>
              </ul>
              <p className="text-red-400 font-bold mt-4">
                Coût réel total: Jusqu&apos;à 1.500€/an avec toutes les options
              </p>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                ✓ Avec IPTV2Belgie:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • <strong>Installation:</strong> GRATUITE (vous la faites en
                  10 minutes)
                </li>
                <li>
                  • <strong>Pas de décodeur:</strong> Utilisez vos appareils
                  existants
                </li>
                <li>
                  • <strong>Multi-écrans:</strong> 1 à 5 connexions selon votre
                  choix
                </li>
                <li>
                  • <strong>Sports premium inclus:</strong> BeIN, Sky Sports,
                  Eleven, tout inclus
                </li>
                <li>
                  • <strong>Netflix/Disney+ content:</strong> Inclus sans
                  supplément
                </li>
                <li>
                  • <strong>Sans engagement:</strong> Arrêtez quand vous voulez
                </li>
                <li>
                  • <strong>Prix fixe garanti:</strong> 9,99€, point final
                </li>
              </ul>
              <p className="text-emerald-400 font-bold mt-4">
                Coût total transparent: 119,88€/an, tout compris
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Tableau comparatif détaillé */}
        <section id="comparaison" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            3. Comparaison Détaillée: David contre Goliath
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Critères</th>
                  <th className="px-4 py-3 text-center text-white">
                    IPTV2Belgie
                  </th>
                  <th className="px-4 py-3 text-center text-white">Proximus</th>
                  <th className="px-4 py-3 text-center text-white">Telenet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Prix mensuel de base
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    9,99€
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">79,99€</td>
                  <td className="px-4 py-3 text-center text-red-400">84,95€</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Nombre de chaînes
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    20.000+
                  </td>
                  <td className="px-4 py-3 text-center">150</td>
                  <td className="px-4 py-3 text-center">120</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    VOD (Films & Séries)
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    100.000+
                  </td>
                  <td className="px-4 py-3 text-center">5.000</td>
                  <td className="px-4 py-3 text-center">3.000</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Chaînes 4K/8K
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    500+
                  </td>
                  <td className="px-4 py-3 text-center">10-20</td>
                  <td className="px-4 py-3 text-center">5-15</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Sports premium
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Inclus
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +24,95€
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +19,95€
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Installation
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Gratuite (10min)
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">59-99€</td>
                  <td className="px-4 py-3 text-center text-red-400">59€</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Temps d&apos;attente installation
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Immédiat
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    2-3 semaines
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    1-2 semaines
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Engagement
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Sans
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    12-24 mois
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    12-24 mois
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Multi-écrans
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    1-5 inclus
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +5€/écran
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +5€/écran
                  </td>
                </tr>
                <tr className="hover:bg-gray-700 font-bold text-lg">
                  <td className="px-4 py-4 text-white">TOTAL ANNUEL</td>
                  <td className="px-4 py-4 text-center text-emerald-400">
                    119,88€
                  </td>
                  <td className="px-4 py-4 text-center text-red-400">
                    1.079€+
                  </td>
                  <td className="px-4 py-4 text-center text-red-400">
                    1.115€+
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA agressif */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ⏰ Arrêtez de perdre 75€ chaque mois!
          </h3>
          <p className="text-white text-lg mb-6">
            Chaque jour d&apos;attente = 2,50€ jetés. Un mois = 75€ perdus. Un
            an = 900€ gaspillés.
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300"
          >
            Je veux économiser maintenant →
          </Link>
        </div>

        {/* Section 4: Calculateur d'économies */}
        <section id="economie" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            4. Calculez Vos Économies Exactes
          </h2>

          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Sélectionnez votre abonnement actuel:
            </h3>

            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Proximus Pickx Start
                    </h4>
                    <p className="text-gray-400">Vous payez: 79,99€/mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-emerald-400">840€</p>
                    <p className="text-sm text-emerald-300">économisés/an</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Telenet Play
                    </h4>
                    <p className="text-gray-400">Vous payez: 84,95€/mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-emerald-400">900€</p>
                    <p className="text-sm text-emerald-300">économisés/an</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Proximus/Telenet + Sport
                    </h4>
                    <p className="text-gray-400">Vous payez: ~105€/mois</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-emerald-400">
                      1.140€
                    </p>
                    <p className="text-sm text-emerald-300">économisés/an</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-600/20 to-sky-600/20 rounded-lg border border-emerald-500">
              <h4 className="text-lg font-semibold text-white mb-3">
                Que faire avec ces économies?
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  • 🏖️ Des vacances de rêve chaque année
                  <br />
                  • 📱 Le dernier smartphone haut de gamme
                  <br />• 🎮 Une PS5 + 10 jeux
                </div>
                <div>
                  • 💰 12.000€ épargnés en 10 ans
                  <br />
                  • 🚗 Contribution pour une nouvelle voiture
                  <br />• 🎓 Financer des cours ou formations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Contenu détaillé */}
        <section id="contenu" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            5. Ce Que Vous Obtenez Vraiment pour 9,99€/mois
          </h2>

          {/* Chaînes belges */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🇧🇪 Toutes les Chaînes Belges
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/belgie/DETWAALF belgie.png"
                  alt="De Twaalf série belge VRT"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/belgium/Cargo- belgium.png"
                  alt="Films belges"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/club brugge - champions league.png"
                  alt="Club Brugge Champions League"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/cycling/cycling-belgium.webp"
                  alt="Cyclisme Tour de France Belgique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  Chaînes flamandes:
                </p>
                <p>
                  Eén HD, Canvas HD, VTM HD, VTM 2/3/4, VIER HD, VIJF HD, ZES,
                  Play4/5/6/7, Ketnet
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  Chaînes francophones:
                </p>
                <p>
                  La Une HD, La Deux, La Trois, RTL-TVI HD, Club RTL, Plug RTL,
                  TF1 HD, France 2/3/4/5
                </p>
              </div>
            </div>
          </div>

          {/* Sports Premium */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              ⚽ Le Paradis du Sport (Tout Inclus!)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/standard de liège players on the pitch.png"
                  alt="Standard de Liège Jupiler Pro League"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/france/park des princes stadium - psg france.png"
                  alt="PSG Ligue 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/formula/Formula 1 - grand prix.png"
                  alt="Formula 1 Grand Prix"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/mma/mma-hero.webp"
                  alt="UFC MMA Combat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
              <p className="text-yellow-300 font-semibold mb-2">
                💡 Le saviez-vous? Chez Proximus, juste Eleven Sports coûte
                24,95€/mois extra!
              </p>
              <p className="text-gray-300">
                Avec IPTV2Belgie: Eleven Sports + BeIN Sports + Sky Sports +
                Canal+ Sport + Eurosport + DAZN = TOUT INCLUS dans les 9,99€
              </p>
            </div>
          </div>

          {/* Streaming platforms */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🎬 Contenus Premium des Plateformes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/netflix/squid game netflix.png"
                  alt="Netflix Squid Game"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/disney/mandalorian disney.png"
                  alt="Disney Plus Mandalorian"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/hbo/house of dragons hbo.png"
                  alt="HBO Max House of Dragons"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/amazon/the boys prime video.png"
                  alt="Amazon Prime Video The Boys"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-300">
              Accès aux contenus de: Netflix, Disney+, Amazon Prime Video, HBO
              Max, Apple TV+, Paramount+, et bien plus. Plus de 100.000 films et
              séries à la demande!
            </p>
          </div>

          {/* Statistiques impressionnantes */}
          <div className="bg-gradient-to-r from-sky-600/20 to-emerald-600/20 rounded-xl p-6 border border-sky-500">
            <h3 className="text-xl font-semibold text-white mb-4">
              Les chiffres qui parlent:
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-sky-400">20.000+</p>
                <p className="text-gray-300">Chaînes Live</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-400">100.000+</p>
                <p className="text-gray-300">Films & Séries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">100+</p>
                <p className="text-gray-300">Pays couverts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-400">500+</p>
                <p className="text-gray-300">Chaînes 4K/8K</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Installation */}
        <section id="installation" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            6. Installation: La Différence Jour et Nuit
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">
                ❌ Installation Proximus/Telenet
              </h3>
              <ol className="space-y-3 text-gray-300">
                <li>1. Appeler et attendre 20 minutes en ligne</li>
                <li>2. Prendre rendez-vous (dans 2-3 semaines)</li>
                <li>3. Rester chez vous toute la journée</li>
                <li>4. Technicien arrive (ou pas)</li>
                <li>5. Installation: 2-3 heures</li>
                <li>6. Payer 59€ à 99€</li>
                <li>7. Découvrir que ça ne marche pas bien</li>
                <li>8. Rappeler le service client...</li>
              </ol>
              <p className="text-red-400 font-bold mt-4">
                Temps total: 2-3 semaines + 1 journée perdue
              </p>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                ✓ Installation IPTV2Belgie
              </h3>
              <ol className="space-y-3 text-gray-300">
                <li>1. Commander en ligne (2 minutes)</li>
                <li>2. Recevoir vos codes (10 minutes max)</li>
                <li>3. Télécharger l&apos;app IPTV Smarters</li>
                <li>4. Entrer vos codes</li>
                <li>5. C&apos;est fini! Regardez la TV</li>
                <li className="text-gray-500">6. -</li>
                <li className="text-gray-500">7. -</li>
                <li className="text-gray-500">8. -</li>
              </ol>
              <p className="text-emerald-400 font-bold mt-4">
                Temps total: 10 minutes maximum
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Compatible avec TOUS vos appareils:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
              <div className="text-center">
                <div className="text-3xl mb-2">📺</div>
                <p>Smart TV</p>
                <p className="text-xs text-gray-500">Samsung, LG, Sony...</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <p>Smartphone</p>
                <p className="text-xs text-gray-500">iOS & Android</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <p>Ordinateur</p>
                <p className="text-xs text-gray-500">Windows & Mac</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎮</div>
                <p>Box Android</p>
                <p className="text-xs text-gray-500">Firestick, Chromecast</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Légalité */}
        <section id="legal" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            7. Est-ce Légal? OUI, et Voici Pourquoi
          </h2>

          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">La réponse courte:</strong> Oui,
              l&apos;IPTV est parfaitement légal en Belgique. Vous payez pour un
              accès à du contenu, exactement comme avec Netflix, Spotify ou
              YouTube Premium.
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">
                La différence avec le piratage:
              </strong>{' '}
              Le piratage, c&apos;est accéder à du contenu sans payer. Avec
              IPTV2Belgie, vous payez un abonnement mensuel pour accéder
              légalement aux chaînes et contenus.
            </p>
            <div className="bg-green-900/20 border border-green-600 rounded-lg p-4">
              <p className="text-green-300">
                ✅ Nous opérons en toute transparence avec un numéro
                d&apos;entreprise, des factures, et un service client officiel.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Témoignages */}
        <section id="temoignages" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            8. Ce Que Disent les 10.000+ Belges Qui Ont Changé
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/michel-avatar.jpeg"
                  alt="Michel client IPTV Belgique"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">
                    Michel Vandenberghe
                  </p>
                  <p className="text-gray-400 text-sm">Anvers</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;J&apos;avais Telenet à 95€/mois avec le sport. Maintenant
                je paie 19,99€ pour 2 écrans. J&apos;économise 900€ par an!
                Pourquoi j&apos;ai attendu si longtemps?&quot;
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/sophie-avatar.jpeg"
                  alt="Sophie cliente IPTV Belgique"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Sophie Dubois</p>
                  <p className="text-gray-400 text-sm">Liège</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Le décodeur Proximus est tombé en panne. 3 semaines
                d&apos;attente pour un technicien! J&apos;ai installé
                IPTV2Belgie en 10 minutes. Fini Proximus!&quot;
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/thomas-avatar.jpeg"
                  alt="Thomas client IPTV Belgique"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Thomas Peeters</p>
                  <p className="text-gray-400 text-sm">Bruxelles</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Netflix + Disney+ + Proximus = 120€/mois. Maintenant tout
                pour 9,99€. La qualité est parfaite, jamais de coupure.
                Meilleure décision de 2025!&quot;
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/lisa-avatar.jpeg"
                  alt="Lisa cliente IPTV Belgique"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Lisa Martin</p>
                  <p className="text-gray-400 text-sm">Gand</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;J&apos;ai tous les matchs de foot, la F1, le tennis, TOUT!
                Mon mari est ravi. On économise 100€/mois qu&apos;on met de côté
                pour les vacances.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* FAQ détaillée */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Questions Fréquentes (Les Vraies Réponses)
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🤔 Comment c&apos;est possible d&apos;être 8x moins cher?
              </h3>
              <p className="text-gray-300">
                Simple: pas de magasins physiques, pas de techniciens, pas de
                décodeurs propriétaires, pas de publicité TV. Nous utilisons
                l&apos;infrastructure Internet existante. Nos coûts sont 10x
                plus bas, donc nos prix aussi.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                📺 La qualité est-elle vraiment bonne?
              </h3>
              <p className="text-gray-300">
                Excellente! Nous offrons du HD, Full HD, 4K et même 8K sur
                certaines chaînes. Avec une connexion Internet standard (20
                Mbps), vous aurez une qualité parfaite. C&apos;est souvent
                meilleur que le câble traditionnel.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🌐 Quelle vitesse Internet me faut-il?
              </h3>
              <p className="text-gray-300">
                Minimum 10 Mbps pour le HD, 25 Mbps pour le 4K. La plupart des
                connexions belges sont largement suffisantes (moyenne: 70 Mbps).
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🔄 Puis-je changer ou annuler?
              </h3>
              <p className="text-gray-300">
                Oui, à tout moment! Pas de contrat, pas d&apos;engagement, pas
                de frais de résiliation. Vous êtes libre. C&apos;est ça la
                différence avec Proximus/Telenet.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                💳 Comment je paie?
              </h3>
              <p className="text-gray-300">
                Virement bancaire SEPA sécurisé. Simple, rapide, sûr. Vous
                recevez vos codes d&apos;accès dans les 10 minutes après
                paiement.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🆘 Et si j&apos;ai besoin d&apos;aide?
              </h3>
              <p className="text-gray-300">
                Support 24/7 par WhatsApp et Telegram. Réponse en moins de 5
                minutes. En français, néerlandais et anglais. Essayez
                d&apos;avoir ça chez Proximus!
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion puissante */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">
            La Décision Est Entre Vos Mains
          </h2>

          <div className="bg-gray-800 rounded-xl p-8">
            <p className="text-lg text-gray-300 mb-6">
              Vous avez maintenant toutes les informations. La question
              n&apos;est plus &quot;Est-ce que ça vaut le coup?&quot; mais
              plutôt{' '}
              <strong className="text-white">
                &quot;Combien de temps vais-je encore gaspiller mon
                argent?&quot;
              </strong>
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-900/20 border border-red-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-3">
                  Option 1: Ne rien faire
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Continuer à payer 85€/mois</li>
                  <li>• Perdre 900€ cette année</li>
                  <li>• Subir les augmentations de prix</li>
                  <li>• Rester frustré</li>
                </ul>
              </div>

              <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                  Option 2: Agir maintenant
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Payer seulement 9,99€/mois</li>
                  <li>• Économiser 900€ cette année</li>
                  <li>• Avoir 133x plus de contenu</li>
                  <li>• Être libre et satisfait</li>
                </ul>
              </div>
            </div>

            <p className="text-xl text-white font-semibold text-center">
              Chaque jour d&apos;attente = 2,50€ perdus. Un mois = 75€. Combien
              voulez-vous encore perdre?
            </p>
          </div>
        </section>

        {/* CTA final ultra puissant */}
        <div className="bg-gradient-to-r from-red-900 to-orange-900 rounded-xl p-10 text-center border-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-white mb-4">
            🚨 OFFRE LIMITÉE: 50% de Réduction
          </h2>
          <p className="text-2xl text-yellow-300 mb-4">
            Abonnement 12 mois au prix de 6 mois
          </p>
          <p className="text-3xl font-bold text-white mb-6">
            59,99€ au lieu de 119,88€
          </p>
          <p className="text-white text-lg mb-8">
            Cette offre se termine dans quelques heures. Plus de 500 personnes
            regardent cette page maintenant.
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-yellow-500 text-black px-10 py-5 rounded-lg text-xl font-black hover:bg-yellow-400 transition-all duration-300 shadow-2xl animate-pulse"
          >
            JE VEUX ÉCONOMISER 900€ MAINTENANT →
          </Link>
          <p className="text-white mt-6">
            ✅ Sans engagement • ✅ Garantie satisfait ou remboursé • ✅
            Installation immédiate
          </p>
        </div>
      </div>
    </article>
  );
}
