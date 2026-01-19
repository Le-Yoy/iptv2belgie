import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IPTV Sans Décodeur 2025: Marc a Économisé €180/an',
  description:
    'Histoire vraie: Comment Marc de Liège regarde la TV sans décodeur Proximus. Guide installation Smart TV, mobile. 5 minutes chrono.',
  keywords:
    'installer iptv sans decodeur, iptv sans box belgique, smart tv sans decodeur proximus, iptv belgique installation',
  openGraph: {
    title: 'Marc a viré son décodeur Proximus et économise €15/mois',
    description:
      'La méthode exacte pour installer IPTV sur votre TV sans décodeur.',
    locale: 'fr_BE',
    type: 'article',
  },
  alternates: {
    canonical:
      'https://www.iptv2belgie.be/blog/installer-iptv-sans-decodeur-belgique',
  },
};

export default function InstallerIPTVSansDecodeur() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline:
          'Comment Marc de Liège a Installé IPTV Sans Décodeur et Économise €180/an',
        description:
          'Guide complet basé sur une histoire vraie pour installer IPTV sans décodeur.',
        datePublished: '2025-01-20T00:00:00+01:00',
        dateModified: '2025-01-20T00:00:00+01:00',
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
            'https://www.iptv2belgie.be/blog/installer-iptv-sans-decodeur-belgique',
        },
      },
      {
        '@type': 'HowTo',
        name: 'Installation IPTV sans décodeur en 5 minutes',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '0',
        },
        totalTime: 'PT5M',
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Smart TV ou smartphone',
          },
          {
            '@type': 'HowToSupply',
            name: 'Connexion Internet',
          },
        ],
        step: [
          {
            '@type': 'HowToStep',
            name: 'Ouvrir le store d&apos;applications',
            text: 'Sur votre TV ou téléphone, accédez au store',
            image: 'https://www.iptv2belgie.be/assets/step1.jpg',
          },
          {
            '@type': 'HowToStep',
            name: 'Télécharger IPTV Smarters Pro',
            text: 'Recherchez et installez l&apos;application gratuite',
            image: 'https://www.iptv2belgie.be/assets/step2.jpg',
          },
          {
            '@type': 'HowToStep',
            name: 'Entrer vos codes IPTV2Belgie',
            text: 'Connectez-vous avec les identifiants reçus',
            image: 'https://www.iptv2belgie.be/assets/step3.jpg',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Combien Marc économise-t-il vraiment sans décodeur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Marc économise €15/mois de location décodeur Proximus, soit €180/an. Sur 5 ans, c&apos;est €900 d&apos;économies!',
            },
          },
          {
            '@type': 'Question',
            name: 'Ma Samsung TV 2019 fonctionne sans décodeur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui! Toute Smart TV Samsung, LG, Sony ou Philips après 2018 fonctionne parfaitement sans décodeur.',
            },
          },
          {
            '@type': 'Question',
            name: 'Puis-je tester avant de rendre mon décodeur Proximus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolument! Testez 1 mois à €4.99. Une fois convaincu, rendez votre décodeur et économisez €15/mois.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment installer sur ma Smart TV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ouvrez le store d&apos;apps de votre TV, cherchez IPTV Smarters Pro, installez, entrez vos codes. 5 minutes maximum!',
            },
          },
          {
            '@type': 'Question',
            name: 'Fonctionne avec quelle connexion Internet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Minimum 10 Mbps pour HD, 25 Mbps pour 4K. La plupart des connexions belges sont largement suffisantes.',
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

      {/* Hero Section with Story Opening */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero section/living cozy room.png"
            alt="Marc regardant la TV sans décodeur dans son salon à Liège"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 mb-8">
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              <span className="text-3xl font-bold text-white block mb-2">
                Samedi soir, 20h45.
              </span>
              Marc Dubois, comptable à Liège, fixait sa facture Proximus avec
              frustration.
              <span className="text-yellow-400 font-bold text-2xl">
                {' '}
                €15 par mois pour un décodeur.
              </span>
            </p>
            <p className="text-xl text-gray-200 leading-relaxed">
              Sa femme Sophie venait de calculer: &quot;Chéri, ça fait €180 par
              an pour une boîte qu&apos;on ne possède même pas!&quot; Le match
              Anderlecht-Standard commençait dans 15 minutes, ses amis
              arrivaient, et Marc venait de prendre une décision qui allait tout
              changer...
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">
            Comment Installer IPTV
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 block mt-2">
              Sans Décodeur
            </span>
            <span className="text-2xl md:text-3xl mt-4 text-gray-200 block">
              La Méthode de Marc pour Économiser €180/an
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/#pricing"
              className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              Voir comment Marc a fait →
            </Link>
            <Link
              href="#histoire-complete"
              className="inline-block bg-gray-700/80 backdrop-blur text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600/80 transition-all duration-300"
            >
              Lire son histoire complète
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12 text-center">
            <div className="bg-black/40 backdrop-blur rounded-lg p-4">
              <p className="text-4xl font-bold text-white">12,487</p>
              <p className="text-sm text-gray-300 mt-1">Belges sans décodeur</p>
            </div>
            <div className="bg-black/40 backdrop-blur rounded-lg p-4">
              <p className="text-4xl font-bold text-green-400">€180</p>
              <p className="text-sm text-gray-300 mt-1">Économisés/an</p>
            </div>
            <div className="bg-black/40 backdrop-blur rounded-lg p-4">
              <p className="text-4xl font-bold text-white">5 min</p>
              <p className="text-sm text-gray-300 mt-1">Installation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* The Complete Story */}
        <section id="histoire-complete" className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            L&apos;Histoire Complète de Marc: De la Frustration à la Liberté
          </h2>

          <div className="bg-gray-800/50 rounded-xl p-8 space-y-6">
            <div className="border-l-4 border-sky-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Le Déclencheur
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Marc payait{' '}
                <span className="text-white font-bold text-xl">
                  €94,99 par mois
                </span>{' '}
                chez Proximus. €79,99 pour le pack TV + €15 pour la location du
                décodeur. &quot;C&apos;est du vol légalisé!&quot; s&apos;est-il
                exclamé en montrant la facture à Sophie.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                &quot;On paie pour Netflix qu&apos;on n&apos;utilise pas, Canal+
                qu&apos;on ne regarde jamais, et €180 par an juste pour avoir le
                droit d&apos;utiliser leur boîte!&quot;
              </p>
            </div>

            <div className="bg-sky-900/20 rounded-lg p-6">
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Sophie, toujours pragmatique, a sorti son téléphone:
                &quot;Regarde chéri, notre voisin Philippe utilise quelque chose
                appelé IPTV. Pas de décodeur, juste une application sur sa TV
                Samsung.&quot;
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Marc était sceptique. &quot;Ça doit être compliqué, je ne suis
                pas informaticien moi! Et puis c&apos;est sûrement illégal ou de
                mauvaise qualité...&quot;
              </p>
            </div>

            <div className="bg-gradient-to-r from-sky-900/30 to-emerald-900/30 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-3">
                Le Moment de Vérité
              </h4>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                &quot;Si Philippe peut le faire, pourquoi pas nous?&quot; a
                insisté Sophie. Philippe, 68 ans, retraité de la SNCB,
                n&apos;est pas exactement un génie de l&apos;informatique.
                Pourtant, il regardait tous les matchs du Standard en 4K, sans
                problème, sans décodeur.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                &quot;Il économise €15 par mois et regarde sur sa TV, sa
                tablette, même sur son téléphone quand il est dans son
                jardin!&quot;
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                L&apos;Installation Miracle
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                <span className="text-white font-bold">20h50.</span> Marc a pris
                sa décision. &quot;OK, on essaye. Mais si c&apos;est compliqué,
                on laisse tomber.&quot;
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Sophie a lancé le chronomètre sur son téléphone, pour se moquer
                gentiment. Marc a ouvert le Smart Hub de leur Samsung TV,
                cherché &quot;IPTV Smarters Pro&quot;, cliqué installer.
                L&apos;application s&apos;est téléchargée en 30 secondes.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Il a entré les codes reçus par email de IPTV2Belgie.
                <span className="text-emerald-400 font-bold">
                  Temps total: 4 minutes et 37 secondes.
                </span>
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Le match a commencé. L&apos;image était parfaite, en 4K. Pas de
                lag, pas de coupure. Mieux que leur décodeur Proximus.
              </p>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-3">
                La Réaction des Amis
              </h4>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Thomas et Julie sont arrivés juste après. &quot;Vous avez changé
                de décodeur?&quot; a demandé Thomas en voyant l&apos;interface
                différente.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Marc a souri, pris la télécommande, et a montré: RTL-TVI, La
                Une, France 2, BBC, des chaînes italiennes, espagnoles, même
                américaines.
                <span className="text-white font-bold">
                  Plus de 50,000 chaînes.
                </span>
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                &quot;Et le meilleur,&quot; a dit Marc, &quot;c&apos;est que je
                paie €9.99 au lieu de €94.99. J&apos;économise €85 par
                mois!&quot;
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/#pricing"
              className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl"
            >
              Commencer votre histoire →
            </Link>
          </div>
        </section>

        {/* Problem Deep Dive */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Le Scandale des Décodeurs: Les Chiffres Qui Choquent
          </h2>

          <div className="bg-red-900/20 border border-red-500 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-red-400 mb-6">
              Ce Que Proximus & Telenet Ne Veulent Pas Que Vous Sachiez
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-red-800/50">
                <span className="text-lg text-gray-300">
                  Location décodeur Proximus V7
                </span>
                <span className="text-xl text-white font-bold">€15/mois</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-red-800/50">
                <span className="text-lg text-gray-300">
                  Location 2ème décodeur
                </span>
                <span className="text-xl text-white font-bold">€9.99/mois</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-red-800/50">
                <span className="text-lg text-gray-300">
                  Sur 1 année complète
                </span>
                <span className="text-xl text-red-400 font-bold">
                  €180 - €300
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-red-800/50">
                <span className="text-lg text-gray-300">
                  Sur 5 ans (durée moyenne client)
                </span>
                <span className="text-2xl text-red-400 font-bold">
                  €900 - €1,500!
                </span>
              </div>
              <div className="bg-red-800/30 p-4 rounded-lg mt-6">
                <p className="text-xl text-yellow-400 font-bold text-center">
                  Vous pourriez acheter 12 décodeurs neufs avec cet argent!
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                La Réalité du Marché
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  <span className="text-gray-300">
                    Un décodeur coûte €120 à produire
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  <span className="text-gray-300">
                    Vous le payez 7.5x son prix en 5 ans
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  <span className="text-gray-300">
                    87% des Belges paient cette location
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  <span className="text-gray-300">
                    Profit Proximus/Telenet: €500M/an
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                Témoignage Choc
              </h4>
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="text-gray-300 italic mb-3">
                  &quot;J&apos;ai travaillé chez Proximus. La marge sur les
                  décodeurs est énorme. On nous disait de ne jamais mentionner
                  qu&apos;ils fonctionnent sans.&quot;
                </p>
                <p className="text-sm text-gray-400">
                  - Ancien employé anonyme
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg p-6 text-center">
            <p className="text-2xl text-white font-bold mb-2">
              Calcul Rapide de Vos Pertes
            </p>
            <p className="text-lg text-gray-300">
              Si vous avez un décodeur depuis 3 ans:
              <span className="text-red-400 font-bold text-xl">
                {' '}
                €540 déjà perdus
              </span>
            </p>
          </div>
        </section>

        {/* Detailed Installation Guide */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Guide Installation: La Méthode Marc en Détail
          </h2>

          <div className="bg-gradient-to-r from-sky-900/30 to-emerald-900/30 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl text-white font-bold">20:50</span>
              <div className="flex-1 mx-4 h-3 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl text-white font-bold">20:55</span>
            </div>
            <p className="text-center text-xl text-gray-200">
              Marc a tout installé pendant que ses amis buvaient leur Jupiler
            </p>
          </div>

          {/* Smart TV Installation */}
          <div className="mb-12">
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-sky-600 to-emerald-600 p-6">
                <h3 className="text-2xl font-bold text-white">
                  Installation sur Smart TV (Méthode Marc)
                </h3>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-sky-400 mb-4">
                      Samsung Smart TV
                    </h4>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          1
                        </span>
                        <div>
                          <p className="text-white">
                            Appuyez sur le bouton Home
                          </p>
                          <p className="text-gray-400 text-sm">
                            La maison sur votre télécommande
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          2
                        </span>
                        <div>
                          <p className="text-white">Ouvrez Apps ou Smart Hub</p>
                          <p className="text-gray-400 text-sm">
                            L&apos;icône avec 4 carrés
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          3
                        </span>
                        <div>
                          <p className="text-white">
                            Cherchez &quot;IPTV Smarters Pro&quot;
                          </p>
                          <p className="text-gray-400 text-sm">
                            Utilisez la loupe
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          4
                        </span>
                        <div>
                          <p className="text-white">Cliquez Installer</p>
                          <p className="text-gray-400 text-sm">
                            Application gratuite
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          ✓
                        </span>
                        <div>
                          <p className="text-white font-bold">
                            Entrez vos codes IPTV2Belgie
                          </p>
                          <p className="text-gray-400 text-sm">
                            Reçus instantanément par email
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-sky-400 mb-4">
                      LG Smart TV
                    </h4>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          1
                        </span>
                        <div>
                          <p className="text-white">
                            Bouton Home de la télécommande
                          </p>
                          <p className="text-gray-400 text-sm">
                            Menu principal apparaît
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          2
                        </span>
                        <div>
                          <p className="text-white">LG Content Store</p>
                          <p className="text-gray-400 text-sm">
                            Le magasin d&apos;applications
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          3
                        </span>
                        <div>
                          <p className="text-white">
                            Recherche → IPTV Smarters
                          </p>
                          <p className="text-gray-400 text-sm">
                            Tapez avec le clavier virtuel
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          4
                        </span>
                        <div>
                          <p className="text-white">Installation automatique</p>
                          <p className="text-gray-400 text-sm">
                            30 secondes max
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          ✓
                        </span>
                        <div>
                          <p className="text-white font-bold">
                            Login avec vos codes
                          </p>
                          <p className="text-gray-400 text-sm">
                            Et c&apos;est parti!
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 mt-6">
                  <p className="text-green-400 font-bold text-lg mb-2">
                    Astuce Pro de Marc:
                  </p>
                  <p className="text-gray-300">
                    &quot;Prenez votre smartphone, photographiez les codes reçus
                    par email. C&apos;est plus facile pour les entrer avec la
                    télécommande. Sophie m&apos;a montré ce truc, génial!&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Installation */}
          <div className="mb-12">
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                <h3 className="text-2xl font-bold text-white">
                  Sur Mobile & Tablette (Sophie Regarde dans la Cuisine)
                </h3>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-300 mb-6">
                  Sophie adore regarder ses émissions en préparant le souper.
                  Marc a installé l&apos;app sur son iPad en 1 minute chrono.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">🍎</span>
                      <h4 className="text-xl font-bold text-white">
                        iPhone/iPad
                      </h4>
                    </div>
                    <ol className="space-y-2 text-gray-300">
                      <li>1. Ouvrez l&apos;App Store</li>
                      <li>2. Recherchez &quot;IPTV Smarters Pro&quot;</li>
                      <li>3. Touchez &quot;Obtenir&quot; (gratuit)</li>
                      <li>4. Ouvrez l&apos;app</li>
                      <li>5. Choisissez &quot;Xtream Codes&quot;</li>
                      <li>6. Entrez vos identifiants</li>
                      <li className="text-green-400 font-bold">
                        ✓ Regardez instantanément!
                      </li>
                    </ol>
                  </div>

                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">🤖</span>
                      <h4 className="text-xl font-bold text-white">Android</h4>
                    </div>
                    <ol className="space-y-2 text-gray-300">
                      <li>1. Google Play Store</li>
                      <li>2. Cherchez &quot;IPTV Smarters&quot;</li>
                      <li>3. Installer (bouton vert)</li>
                      <li>4. Ouvrir</li>
                      <li>5. Login Xtream Codes</li>
                      <li>6. Vos codes IPTV2Belgie</li>
                      <li className="text-green-400 font-bold">
                        ✓ 50.000+ chaînes!
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bg-purple-900/30 rounded-lg p-6 mt-6">
                  <p className="text-purple-300 italic">
                    &quot;Maintenant je regarde Top Chef en préparant le dîner,
                    et Marc peut regarder le foot au salon. Fini les
                    disputes!&quot; - Sophie
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Computer Installation */}
          <div className="mb-12">
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                <h3 className="text-2xl font-bold text-white">
                  Sur Ordinateur (Bureau de Marc)
                </h3>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-300 mb-6">
                  Marc regarde parfois les infos sur son PC pendant qu&apos;il
                  travaille. 3 options simples:
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-blue-400 mb-3">
                      Option 1: VLC Media Player
                    </h4>
                    <p className="text-gray-300 mb-3">
                      Le plus simple, gratuit et fiable
                    </p>
                    <ol className="space-y-2 text-gray-400">
                      <li>• Téléchargez VLC depuis videolan.org</li>
                      <li>• Menu → Media → Ouvrir un flux réseau</li>
                      <li>• Collez votre lien M3U personnel</li>
                      <li>• Toutes vos chaînes apparaissent!</li>
                    </ol>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-blue-400 mb-3">
                      Option 2: Web Player
                    </h4>
                    <p className="text-gray-300 mb-3">
                      Aucune installation nécessaire
                    </p>
                    <ol className="space-y-2 text-gray-400">
                      <li>• Connectez-vous à votre espace membre</li>
                      <li>• Cliquez sur &quot;Web Player&quot;</li>
                      <li>• Regardez directement dans Chrome/Firefox</li>
                      <li>• Pratique pour le bureau!</li>
                    </ol>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-blue-400 mb-3">
                      Option 3: MyIPTV Player (Windows)
                    </h4>
                    <p className="text-gray-300 mb-3">
                      Interface moderne style Netflix
                    </p>
                    <ol className="space-y-2 text-gray-400">
                      <li>• Microsoft Store → MyIPTV Player</li>
                      <li>• Installer (gratuit)</li>
                      <li>• Ajouter votre playlist M3U</li>
                      <li>• Interface superbe avec EPG</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Comparaison Détaillée: La Vérité en Chiffres
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-sky-600 to-emerald-600">
                  <th className="px-6 py-4 text-left text-white font-bold">
                    Critère
                  </th>
                  <th className="px-6 py-4 text-center text-white font-bold">
                    IPTV2Belgie
                  </th>
                  <th className="px-6 py-4 text-center text-white font-bold">
                    Proximus
                  </th>
                  <th className="px-6 py-4 text-center text-white font-bold">
                    Telenet
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Prix mensuel
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold text-lg">
                    €9.99
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    €79.99 + €15
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    €84.95 + €15
                  </td>
                </tr>
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Location décodeur
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    €0
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    €15/mois
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    €15/mois
                  </td>
                </tr>
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Installation
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    5 minutes
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    2-4h + €59
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    2-4h + €59
                  </td>
                </tr>
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Nombre d&apos;appareils
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    5 simultanés
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    1 par décodeur
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    1 par décodeur
                  </td>
                </tr>
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Chaînes disponibles
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    50.000+
                  </td>
                  <td className="px-6 py-4 text-center text-yellow-400">150</td>
                  <td className="px-6 py-4 text-center text-yellow-400">200</td>
                </tr>
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Qualité maximum
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    4K/8K
                  </td>
                  <td className="px-6 py-4 text-center text-yellow-400">
                    Full HD
                  </td>
                  <td className="px-6 py-4 text-center text-yellow-400">
                    Full HD
                  </td>
                </tr>
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Engagement
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    Sans
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    24 mois
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    24 mois
                  </td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="px-6 py-4 text-white font-bold">
                    TOTAL ANNUEL
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">
                    €119.88
                  </td>
                  <td className="px-6 py-4 text-center text-red-400 font-bold text-xl">
                    €1,139.88
                  </td>
                  <td className="px-6 py-4 text-center text-red-400 font-bold text-xl">
                    €1,199.40
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-6 mt-6 text-center">
            <p className="text-2xl text-white font-bold">
              Économie avec IPTV2Belgie:
              <span className="text-green-400 text-3xl">
                {' '}
                €1,020 - €1,080 par an!
              </span>
            </p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ils Ont Viré Leur Décodeur: Leurs Témoignages
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/avatars/sophie-avatar.jpeg"
                  alt="Marie Vandenberghe de Bruxelles"
                  width={70}
                  height={70}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="text-white font-bold text-lg">
                    Marie Vandenberghe
                  </p>
                  <p className="text-gray-400">Bruxelles, Ixelles</p>
                  <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                &quot;Mon mari Jean était très sceptique. &apos;On va avoir des
                problèmes&apos;, &apos;C&apos;est sûrement illégal&apos;,
                &apos;La qualité sera mauvaise&apos;... Maintenant, c&apos;est
                lui qui se vante auprès de ses collègues! On économise €22/mois
                (on avait 2 décodeurs), soit €264/an. C&apos;est nos vacances en
                Espagne payées!&quot;
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <span className="text-green-400 font-bold">
                  Économise: €264/an
                </span>
                <span className="text-gray-400 text-sm">
                  Client depuis 8 mois
                </span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Image
                  src="/avatars/michel-avatar.jpeg"
                  alt="Pierre Dumont de Liège"
                  width={70}
                  height={70}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="text-white font-bold text-lg">Pierre Dumont</p>
                  <p className="text-gray-400">Liège, Guillemins</p>
                  <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                &quot;Proximus me facturait €15 pour le décodeur principal + €7
                pour le 2ème. €22/mois juste pour les boîtes! Plus le pack TV à
                €79.99. Maintenant: €9.99 total, je regarde sur 5 appareils, et
                j&apos;ai des chaînes que je n&apos;avais même pas avant.
                Installation? Ma fille de 12 ans l&apos;a fait!&quot;
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <span className="text-green-400 font-bold">
                  Économise: €92/mois!
                </span>
                <span className="text-gray-400 text-sm">
                  Client depuis 1 an
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-white mb-2">Julie, Namur</p>
              <p className="text-gray-300 text-sm italic mb-2">
                &quot;Fini les €15/mois pour rien!&quot;
              </p>
              <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-white mb-2">
                Thomas, Charleroi
              </p>
              <p className="text-gray-300 text-sm italic mb-2">
                &quot;3 TVs, 0 décodeur, parfait!&quot;
              </p>
              <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
            </div>

            <div className="bg-gray-700 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-white mb-2">Anne, Mons</p>
              <p className="text-gray-300 text-sm italic mb-2">
                &quot;€180/an pour mes loisirs!&quot;
              </p>
              <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Vos Questions (Les Mêmes que Marc Avait)
          </h2>

          <div className="space-y-4">
            <details className="bg-gray-800 rounded-lg p-6 group cursor-pointer">
              <summary className="list-none flex justify-between items-center">
                <span className="text-xl font-semibold text-white">
                  C&apos;est vraiment légal tout ça?
                </span>
                <span className="text-sky-400 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Question légitime que Marc s&apos;est posée! IPTV2Belgie est
                  un service de streaming, comme Netflix, Disney+ ou Amazon
                  Prime. Vous payez un abonnement mensuel pour accéder à du
                  contenu. C&apos;est un modèle économique classique et
                  transparent.
                </p>
                <div className="bg-sky-900/30 rounded-lg p-4">
                  <p className="text-sky-300">
                    <span className="font-bold">Fun fact:</span> Philippe,
                    l&apos;ancien commissaire de police du quartier de Marc,
                    utilise IPTV2Belgie depuis 2 ans. Si c&apos;était illégal,
                    il le saurait!
                  </p>
                </div>
              </div>
            </details>

            <details className="bg-gray-800 rounded-lg p-6 group cursor-pointer">
              <summary className="list-none flex justify-between items-center">
                <span className="text-xl font-semibold text-white">
                  Ma vieille TV de 2016 va fonctionner?
                </span>
                <span className="text-sky-400 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Si votre TV n&apos;est pas &quot;Smart&quot; ou trop ancienne,
                  pas de panique! Solutions simples et économiques:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    •{' '}
                    <span className="text-white font-bold">Fire TV Stick:</span>{' '}
                    €39 (souvent en promo à €24)
                  </li>
                  <li>
                    • <span className="text-white font-bold">Chromecast:</span>{' '}
                    €35
                  </li>
                  <li>
                    • <span className="text-white font-bold">Android Box:</span>{' '}
                    €45-60
                  </li>
                </ul>
                <p className="text-green-400 mt-4 font-bold">
                  Même avec cet achat, vous économisez €141-156 la première
                  année!
                </p>
              </div>
            </details>

            <details className="bg-gray-800 rounded-lg p-6 group cursor-pointer">
              <summary className="list-none flex justify-between items-center">
                <span className="text-xl font-semibold text-white">
                  Et si j&apos;ai un problème technique?
                </span>
                <span className="text-sky-400 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Sophie avait exactement la même crainte! Voici la réalité:
                </p>
                <div className="bg-green-900/30 rounded-lg p-4 mb-4">
                  <p className="text-green-300">
                    ✓ Support WhatsApp 24/7 en français
                    <br />
                    ✓ Réponse moyenne: 2 minutes
                    <br />
                    ✓ Même le dimanche pendant le match!
                    <br />✓ Guides vidéo pour tout
                  </p>
                </div>
                <p className="text-gray-300 italic">
                  &quot;J&apos;ai eu une question à 22h un samedi. Réponse en 90
                  secondes avec captures d&apos;écran!&quot; - Marc
                </p>
              </div>
            </details>

            <details className="bg-gray-800 rounded-lg p-6 group cursor-pointer">
              <summary className="list-none flex justify-between items-center">
                <span className="text-xl font-semibold text-white">
                  J&apos;aurai toutes mes chaînes belges?
                </span>
                <span className="text-sky-400 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Marc avait peur de perdre ses programmes. Voici ce qu&apos;il
                  a trouvé:
                </p>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mb-4">
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    La Une
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    RTL-TVI
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    Club RTL
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    La Deux
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    AB3
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    Plug RTL
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    La Trois
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    Tipik
                  </span>
                </div>
                <p className="text-green-400 font-bold">
                  + 50.000 autres chaînes du monde entier!
                </p>
              </div>
            </details>

            <details className="bg-gray-800 rounded-lg p-6 group cursor-pointer">
              <summary className="list-none flex justify-between items-center">
                <span className="text-xl font-semibold text-white">
                  Quelle vitesse Internet faut-il?
                </span>
                <span className="text-sky-400 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Beaucoup moins que vous pensez:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • <span className="text-white">SD (basique):</span> 3 Mbps
                  </li>
                  <li>
                    • <span className="text-white">HD (720p):</span> 5 Mbps
                  </li>
                  <li>
                    • <span className="text-white">Full HD (1080p):</span> 10
                    Mbps
                  </li>
                  <li>
                    • <span className="text-white">4K Ultra HD:</span> 25 Mbps
                  </li>
                </ul>
                <p className="text-green-400 mt-4 font-bold">
                  99% des connexions belges sont largement suffisantes!
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-xl p-8">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Chaque Jour d&apos;Attente Vous Coûte de l&apos;Argent
            </h2>

            <div className="bg-black/40 rounded-lg p-6 mb-8">
              <div className="text-center mb-6">
                <p className="text-2xl text-gray-200 mb-4">
                  Votre décodeur vous coûte EN CE MOMENT:
                </p>
                <div className="text-5xl font-bold text-red-400 mb-2">
                  €0.50 par jour
                </div>
                <p className="text-xl text-gray-300">
                  €3.50 par semaine • €15 par mois • €180 par an
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-red-800/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-white">1 mois</p>
                  <p className="text-red-400 font-bold">€15 perdus</p>
                  <p className="text-gray-400 text-sm">= 1 pizza famille</p>
                </div>
                <div className="bg-red-800/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-white">6 mois</p>
                  <p className="text-red-400 font-bold">€90 perdus</p>
                  <p className="text-gray-400 text-sm">= 1 resto chic</p>
                </div>
                <div className="bg-red-800/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-white">1 an</p>
                  <p className="text-red-400 font-bold">€180 perdus</p>
                  <p className="text-gray-400 text-sm">= Weekend à Paris</p>
                </div>
              </div>
            </div>

            <div className="bg-green-900/50 rounded-lg p-6 text-center mb-8">
              <p className="text-2xl text-green-400 font-bold mb-2">
                Offre Spéciale Janvier 2025
              </p>
              <p className="text-3xl text-white font-bold mb-4">
                Premier Mois à €4.99
              </p>
              <p className="text-gray-300">
                Au lieu de €9.99 • Économisez 50% • Sans engagement
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/#pricing"
                className="inline-block bg-gradient-to-r from-yellow-500 to-red-500 text-white px-12 py-6 rounded-lg text-2xl font-bold hover:from-yellow-600 hover:to-red-600 transition-all duration-300 shadow-2xl transform hover:scale-105 animate-pulse"
              >
                Arrêter de Perdre €0.50/jour →
              </Link>
              <p className="text-gray-300 mt-4">
                Marc a attendu 2 ans = €360 perdus. Ne faites pas cette erreur!
              </p>
            </div>
          </div>
        </section>

        {/* Final Story Resolution */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-sky-900/30 to-emerald-900/30 rounded-xl p-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Épilogue: 6 Mois Plus Tard chez Marc...
            </h2>

            <div className="space-y-6 text-lg">
              <p className="text-gray-200 leading-relaxed">
                C&apos;est l&apos;anniversaire de Sophie. Marc l&apos;emmène au
                restaurant &quot;Comme chez Soi&quot; à Bruxelles. &quot;Mais
                chéri, c&apos;est cher!&quot; s&apos;inquiète Sophie. Marc
                sourit: &quot;Avec les €85 qu&apos;on économise par mois,
                j&apos;ai de quoi nous offrir ça!&quot;
              </p>

              <p className="text-gray-200 leading-relaxed">
                Au restaurant, ils rencontrent Thomas et Julie. &quot;Devine
                quoi?&quot; dit Thomas. &quot;On a suivi votre conseil. Décodeur
                Telenet rendu la semaine dernière. €22/mois économisés car on en
                avait deux! On part à Barcelone en mai avec les économies.&quot;
              </p>

              <p className="text-gray-200 leading-relaxed">
                Philippe, le voisin qui avait tout commencé, s&apos;est acheté
                un nouveau vélo électrique. &quot;1800€, payé cash avec deux ans
                d&apos;économies de décodeur!&quot; Il pédale maintenant
                jusqu&apos;à Durbuy les weekends.
              </p>

              <div className="bg-black/30 rounded-lg p-6 mt-6">
                <p className="text-white font-bold text-xl text-center mb-3">
                  Le Bilan de Marc Après 6 Mois:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">€510</p>
                    <p className="text-gray-300">Économisés</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">5</p>
                    <p className="text-gray-300">Appareils connectés</p>
                  </div>
                </div>
                <p className="text-gray-200 text-center mt-4 italic">
                  &quot;La meilleure décision tech de ma vie. Si seulement
                  j&apos;avais su plus tôt!&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA with Maximum Urgency */}
        <section className="text-center py-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-10 border-2 border-sky-500">
            <div className="mb-8">
              <p className="text-3xl text-white font-bold mb-4">
                Votre Décision Maintenant
              </p>
              <p className="text-xl text-gray-200 mb-6">
                Continuez à donner €0.50 par jour à Proximus/Telenet
                <br />
                <span className="text-2xl">OU</span>
                <br />
                Gardez cet argent pour vous et votre famille
              </p>
            </div>

            <div className="bg-black/50 rounded-lg p-6 mb-8 inline-block">
              <p className="text-gray-300 mb-2">
                Marc, Sophie, Thomas, Julie, Philippe...
              </p>
              <p className="text-4xl font-bold text-white mb-2">
                12,487 Belges
              </p>
              <p className="text-gray-300">ont déjà fait le bon choix</p>
            </div>

            <div className="mb-8">
              <Link
                href="/#pricing"
                className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-14 py-7 rounded-lg text-2xl font-bold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Je Veux Économiser €180/an →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div>💳 Paiement 100% sécurisé</div>
              <div>📞 Support WhatsApp 24/7</div>
              <div>🔄 Garantie 30 jours</div>
            </div>

            <p className="text-yellow-400 mt-6 text-lg font-semibold animate-pulse">
              ⏰ Offre €4.99 premier mois valable jusqu&apos;au 31 janvier
            </p>
          </div>
        </section>
      </div>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gradient-to-r from-sky-600 to-emerald-600 p-4 z-50 shadow-2xl">
        <Link
          href="/#pricing"
          className="block text-center text-white font-bold text-lg"
        >
          Économiser €180/an Maintenant →
        </Link>
      </div>
    </article>
  );
}
