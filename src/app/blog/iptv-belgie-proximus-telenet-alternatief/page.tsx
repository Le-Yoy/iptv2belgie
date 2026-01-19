import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'IPTV België 2025: Het Slimme Alternatief voor Proximus & Telenet | Bespaar €900/jaar',
  description:
    'Ontdek waarom 10.000+ Belgen overstapten van Proximus (€79,99) en Telenet (€84,95) naar IPTV voor €9,99/maand. Complete vergelijking, installatie in 10 minuten, geen contract.',
  keywords:
    'iptv belgië, proximus alternatief, telenet alternatief, goedkoop tv kijken belgië, iptv belgie legaal, beste iptv belgië 2025, iptv abonnement belgië',
  openGraph: {
    title: 'Stop met €85/maand betalen voor TV - IPTV België',
    description:
      'Waarom betalen 10.000+ Belgen nog maar €9,99 voor 20.000+ zenders? Ontdek het geheim.',
    locale: 'nl_BE',
    type: 'article',
  },
  alternates: {
    canonical:
      'https://www.iptv2belgie.be/blog/iptv-belgie-proximus-telenet-alternatief',
  },
};

export default function IPTVBelgieAlternatiefBlog() {
  const structuredData = {
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline:
          'IPTV België 2025: Het Slimme Alternatief voor Proximus & Telenet',
        description:
          'Ontdek waarom 10.000+ Belgen overstapten naar IPTV. Bespaar €900 per jaar op TV.',
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
            'https://www.iptv2belgie.be/blog/iptv-belgie-proximus-telenet-alternatief',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Hoeveel bespaar ik met IPTV België?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Je bespaart €900 per jaar vergeleken met Proximus (€79,99/maand) of Telenet (€84,95/maand). IPTV2Belgie kost slechts €9,99/maand.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe snel kan ik beginnen met kijken?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Installatie duurt slechts 10 minuten. Na betaling ontvang je direct je logingegevens en kun je op elk apparaat beginnen met kijken.',
            },
          },
          {
            '@type': 'Question',
            name: 'Zijn er verborgen kosten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nee, de getoonde prijs is alles inclusief. Geen decoder huur, geen installatiekosten, geen prijsverhogingen.',
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
            De Waarheid: Je Betaalt 8x Te Veel voor TV
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Proximus: €89,98/maand • Telenet: €92,90/maand • Orange: €75/maand
          </p>
          <p className="text-2xl md:text-3xl text-emerald-400 font-bold mb-8">
            10.000+ slimme Belgen betalen nu €9,99 voor méér zenders
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl"
          >
            Ontdek hoeveel je kunt besparen →
          </Link>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Inhoudsopgave */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Wat je gaat ontdekken:
          </h2>
          <ol className="space-y-2 text-gray-300">
            <li>
              1.{' '}
              <a href="#waarheid" className="text-sky-400 hover:text-sky-300">
                De schokkende waarheid over TV-prijzen in België
              </a>
            </li>
            <li>
              2.{' '}
              <a
                href="#verborgen-kosten"
                className="text-sky-400 hover:text-sky-300"
              >
                Verborgen kosten die Proximus/Telenet verzwijgen
              </a>
            </li>
            <li>
              3.{' '}
              <a
                href="#vergelijking"
                className="text-sky-400 hover:text-sky-300"
              >
                Eerlijke vergelijking: traditionele TV vs IPTV
              </a>
            </li>
            <li>
              4.{' '}
              <a href="#besparing" className="text-sky-400 hover:text-sky-300">
                Bereken exact je jaarlijkse besparing
              </a>
            </li>
            <li>
              5.{' '}
              <a href="#zenders" className="text-sky-400 hover:text-sky-300">
                Welke zenders krijg je voor €9,99?
              </a>
            </li>
            <li>
              6.{' '}
              <a
                href="#installatie"
                className="text-sky-400 hover:text-sky-300"
              >
                Installatie: het verschil tussen dag en nacht
              </a>
            </li>
            <li>
              7.{' '}
              <a href="#legaal" className="text-sky-400 hover:text-sky-300">
                Is IPTV legaal? Het definitieve antwoord
              </a>
            </li>
            <li>
              8.{' '}
              <a href="#ervaringen" className="text-sky-400 hover:text-sky-300">
                Ervaringen van Belgen die al overstapten
              </a>
            </li>
          </ol>
        </nav>

        {/* Krachtige introductie */}
        <section className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">Stel je voor:</strong> Je betaalt
            elke maand €85 tot €105 voor televisie. Dat is €1.020 tot €1.260 per
            jaar. Voor wat precies? 120 zenders waarvan je er 10 bekijkt? Een
            decoder die om de 2 jaar stuk gaat? Een klantenservice waar je 45
            minuten in de wacht hangt?
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Het jaar 2025 is aangebroken, en deze situatie is compleet
            belachelijk geworden. Waarom? Omdat IPTV-technologie je nu toegang
            geeft tot{' '}
            <strong className="text-white">20.000+ zenders wereldwijd</strong>{' '}
            voor
            <strong className="text-emerald-400">
              {' '}
              slechts €9,99 per maand
            </strong>
            .
          </p>
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500 rounded-lg p-6">
            <p className="text-white text-lg">
              ⚠️ <strong>Let op:</strong> Elke maand dat je wacht, verlies je
              minimaal €75. Dat is €2,50 per dag weggegooid geld.
            </p>
          </div>
        </section>

        {/* Sectie 1: De waarheid */}
        <section id="waarheid" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            1. De Schokkende Waarheid over TV-Prijzen in België
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            België heeft een van de duurste TV-markten van Europa. Proximus,
            Telenet en Orange misbruiken hun marktpositie om kunstmatig hoge
            prijzen te handhaven. Hier zijn de harde cijfers:
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center border-2 border-red-500">
              <h3 className="text-xl font-bold text-white mb-2">
                Proximus Pickx
              </h3>
              <p className="text-4xl font-bold text-red-400 mb-2">€89,98</p>
              <p className="text-gray-400">/maand</p>
              <p className="text-sm text-gray-500 mt-2">Basis + decoder</p>
              <p className="text-sm text-red-400 font-bold">€1.079,76/jaar</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border-2 border-red-500">
              <h3 className="text-xl font-bold text-white mb-2">
                Telenet Play
              </h3>
              <p className="text-4xl font-bold text-red-400 mb-2">€92,90</p>
              <p className="text-gray-400">/maand</p>
              <p className="text-sm text-gray-500 mt-2">Basis + digibox</p>
              <p className="text-sm text-red-400 font-bold">€1.114,80/jaar</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border-2 border-emerald-500">
              <h3 className="text-xl font-bold text-white mb-2">IPTV2Belgie</h3>
              <p className="text-4xl font-bold text-emerald-400 mb-2">€9,99</p>
              <p className="text-gray-400">/maand</p>
              <p className="text-sm text-emerald-400 mt-2">Alles inclusief</p>
              <p className="text-sm text-emerald-400 font-bold">€119,88/jaar</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              De pijnlijke rekening:
            </h3>
            <p className="text-gray-300 mb-4">
              Als je Telenet hebt met sportpakket (€104,90/maand), betaal je{' '}
              <strong className="text-red-400">€1.258,80 per jaar</strong>. Met
              IPTV2Belgie voor €119,88/jaar, bespaar je{' '}
              <strong className="text-emerald-400">€1.138,92 elk jaar</strong>.
            </p>
            <p className="text-xl text-white font-bold">
              Daarmee kun je: Een vakantie naar Bali 🏝️ + Een nieuwe laptop 💻 +
              En je houdt nog €200 over
            </p>
          </div>
        </section>

        {/* Sectie 2: Verborgen kosten */}
        <section id="verborgen-kosten" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            2. De Verborgen Kosten Die Ze Je Niet Vertellen
          </h2>

          <div className="space-y-6">
            <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-3">
                ❌ Bij Proximus/Telenet:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • <strong>Installatiekosten:</strong> €59 tot €99 (technicus
                  verplicht)
                </li>
                <li>
                  • <strong>Decoder huur:</strong> €7,95 tot €9,99/maand
                  (€95-120/jaar)
                </li>
                <li>
                  • <strong>Extra decoder:</strong> +€5/maand per toestel
                </li>
                <li>
                  • <strong>Sportpakket (Eleven):</strong> +€24,95/maand
                  (€299,40/jaar)
                </li>
                <li>
                  • <strong>Films & series premium:</strong> +€15/maand minimum
                </li>
                <li>
                  • <strong>Opzegvergoeding:</strong> €250 bij vertrek binnen 2
                  jaar
                </li>
                <li>
                  • <strong>Jaarlijkse prijsverhoging:</strong> 3-5% elke
                  januari (stilletjes)
                </li>
                <li>
                  • <strong>Servicekost bij storing:</strong> €50 als het
                  &quot;jouw fout&quot; is
                </li>
              </ul>
              <p className="text-red-400 font-bold mt-4">
                Werkelijke totale kosten: Tot €1.500/jaar met alle opties
              </p>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                ✓ Bij IPTV2Belgie:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • <strong>Installatie:</strong> GRATIS (je doet het zelf in 10
                  minuten)
                </li>
                <li>
                  • <strong>Geen decoder:</strong> Gebruik je eigen apparaten
                </li>
                <li>
                  • <strong>Multi-schermen:</strong> 1 tot 5 connecties naar
                  keuze
                </li>
                <li>
                  • <strong>Sports premium inbegrepen:</strong> BeIN, Sky
                  Sports, Eleven, alles
                </li>
                <li>
                  • <strong>Netflix/Disney+ content:</strong> Inclusief zonder
                  meerprijs
                </li>
                <li>
                  • <strong>Zonder contract:</strong> Stop wanneer je wilt
                </li>
                <li>
                  • <strong>Vaste prijs gegarandeerd:</strong> €9,99 punt uit
                </li>
                <li>
                  • <strong>24/7 support:</strong> Altijd gratis hulp
                </li>
              </ul>
              <p className="text-emerald-400 font-bold mt-4">
                Transparante totaalprijs: €119,88/jaar, alles inbegrepen
              </p>
            </div>
          </div>
        </section>

        {/* Sectie 3: Gedetailleerde vergelijking */}
        <section id="vergelijking" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            3. De Eerlijke Vergelijking: Alle Feiten op een Rij
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Criteria</th>
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
                    Maandprijs basis
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    €9,99
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">€79,99</td>
                  <td className="px-4 py-3 text-center text-red-400">€84,95</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Aantal zenders
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    20.000+
                  </td>
                  <td className="px-4 py-3 text-center">150</td>
                  <td className="px-4 py-3 text-center">120</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    VOD (Films/Series)
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    100.000+
                  </td>
                  <td className="px-4 py-3 text-center">5.000</td>
                  <td className="px-4 py-3 text-center">3.000</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    4K/8K zenders
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    500+
                  </td>
                  <td className="px-4 py-3 text-center">10-20</td>
                  <td className="px-4 py-3 text-center">5-15</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Sport premium
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Inclusief
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +€24,95
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +€19,95
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Installatie
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Gratis (10min)
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">€59-99</td>
                  <td className="px-4 py-3 text-center text-red-400">€59</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Wachttijd installatie
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Direct
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    2-3 weken
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    1-2 weken
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Contract
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Geen
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    12-24 maanden
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    12-24 maanden
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Multi-schermen
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    1-5 inclusief
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +€5/scherm
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +€5/scherm
                  </td>
                </tr>
                <tr className="hover:bg-gray-700 font-bold text-lg">
                  <td className="px-4 py-4 text-white">JAARLIJKSE KOSTEN</td>
                  <td className="px-4 py-4 text-center text-emerald-400">
                    €119,88
                  </td>
                  <td className="px-4 py-4 text-center text-red-400">
                    €1.079+
                  </td>
                  <td className="px-4 py-4 text-center text-red-400">
                    €1.115+
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Agressieve CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ⏰ Stop met €75 per maand weggooien!
          </h3>
          <p className="text-white text-lg mb-6">
            Elke dag uitstel = €2,50 verlies. Een maand = €75 weg. Een jaar =
            €900 verspild.
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300"
          >
            Ik wil nu besparen →
          </Link>
        </div>

        {/* Sectie 4: Besparingscalculator */}
        <section id="besparing" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            4. Bereken Je Exacte Besparing
          </h2>

          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Selecteer je huidige abonnement:
            </h3>

            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Proximus Pickx Start
                    </h4>
                    <p className="text-gray-400">Je betaalt: €79,99/maand</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-emerald-400">€840</p>
                    <p className="text-sm text-emerald-300">besparing/jaar</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Telenet Play
                    </h4>
                    <p className="text-gray-400">Je betaalt: €84,95/maand</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-emerald-400">€900</p>
                    <p className="text-sm text-emerald-300">besparing/jaar</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Proximus/Telenet + Sport
                    </h4>
                    <p className="text-gray-400">Je betaalt: ~€105/maand</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-emerald-400">
                      €1.140
                    </p>
                    <p className="text-sm text-emerald-300">besparing/jaar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-600/20 to-sky-600/20 rounded-lg border border-emerald-500">
              <h4 className="text-lg font-semibold text-white mb-3">
                Wat kun je met deze besparing doen?
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  • 🏖️ Elk jaar op droomvakantie
                  <br />
                  • 📱 De nieuwste iPhone Pro
                  <br />• 🎮 Een complete gaming setup
                </div>
                <div>
                  • 💰 €12.000 gespaard in 10 jaar
                  <br />
                  • 🚗 Aanbetaling nieuwe auto
                  <br />• 🎓 Opleiding of cursussen volgen
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sectie 5: Gedetailleerde content */}
        <section id="zenders" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            5. Wat Krijg Je Écht voor €9,99/maand?
          </h2>

          {/* Belgische zenders */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🇧🇪 Alle Belgische Zenders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/belgie/DETWAALF belgie.png"
                  alt="De Twaalf VRT Canvas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/belgium/The shift- belgium.png"
                  alt="Belgische series"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/KRC Genk - people with jersey.png"
                  alt="KRC Genk voetbal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/Darts - only belgium .png"
                  alt="Darts België"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  Vlaamse zenders:
                </p>
                <p>
                  Eén HD, Canvas HD, VTM HD, VTM 2/3/4, VIER HD, VIJF HD, ZES,
                  Play4/5/6/7, Ketnet
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  Waalse zenders:
                </p>
                <p>
                  La Une HD, La Deux, La Trois, RTL-TVI HD, Club RTL, Plug RTL,
                  AB3, AB4
                </p>
              </div>
            </div>
          </div>

          {/* Sport Premium */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              ⚽ Sportparadijs (Alles Inclusief!)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/Royal Antwerp stadion.png"
                  alt="Royal Antwerp Jupiler Pro League"
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
                  src="/assets/sports/formula/Formula 1 - grand prix.png"
                  alt="Formule 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/tennis/tennis-hero.webp"
                  alt="Tennis Grand Slams"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
              <p className="text-yellow-300 font-semibold mb-2">
                💡 Wist je dit? Bij Proximus kost alleen Eleven Sports al
                €24,95/maand extra!
              </p>
              <p className="text-gray-300">
                Bij IPTV2Belgie: Eleven + BeIN Sports + Sky Sports + Canal+
                Sport + Eurosport + DAZN = ALLES INBEGREPEN voor €9,99
              </p>
            </div>
          </div>

          {/* Nederlandse content */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🇳🇱 Nederlandse Zenders & Series
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/holland/mocro mafia - dutch.png"
                  alt="Mocro Maffia Nederlandse serie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/holland/undercover dutch.png"
                  alt="Undercover Netflix Nederland"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/holland/De Twaalf - dutch.png"
                  alt="De Twaalf serie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/holland/antares general.png"
                  alt="Antares serie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-300">
              NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, NET5, Fox Sports
              Eredivisie, en alle Nederlandse series op aanvraag
            </p>
          </div>

          {/* Streaming platforms */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🎬 Premium Content van Alle Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/netflix/money heist netflix.png"
                  alt="Netflix La Casa de Papel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/disney/loki disney.png"
                  alt="Disney Plus Loki"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/hbo/last of us hbo.png"
                  alt="HBO The Last of Us"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/amazon/fallout prime video.png"
                  alt="Prime Video Fallout"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-300">
              Content van Netflix, Disney+, HBO Max, Amazon Prime, Apple TV+,
              Paramount+ en meer. 100.000+ films en series direct beschikbaar!
            </p>
          </div>

          {/* Indrukwekkende statistieken */}
          <div className="bg-gradient-to-r from-sky-600/20 to-emerald-600/20 rounded-xl p-6 border border-sky-500">
            <h3 className="text-xl font-semibold text-white mb-4">
              De cijfers liegen niet:
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-sky-400">20.000+</p>
                <p className="text-gray-300">Live Zenders</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-400">100.000+</p>
                <p className="text-gray-300">Films & Series</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">133x</p>
                <p className="text-gray-300">Meer dan Telenet</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-400">€900</p>
                <p className="text-gray-300">Jaarlijkse besparing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectie 6: Installatie vergelijking */}
        <section id="installatie" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            6. Installatie: Het Verschil Tussen Dag en Nacht
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">
                ❌ Installatie Proximus/Telenet
              </h3>
              <ol className="space-y-3 text-gray-300">
                <li>1. Bellen en 20 minuten wachten</li>
                <li>2. Afspraak maken (over 2-3 weken)</li>
                <li>3. Hele dag thuisblijven</li>
                <li>4. Technicus komt (hopelijk)</li>
                <li>5. Installatie: 2-3 uur</li>
                <li>6. €59 tot €99 betalen</li>
                <li>7. Werkt het niet? Opnieuw bellen</li>
                <li>8. Weer 3 weken wachten...</li>
              </ol>
              <p className="text-red-400 font-bold mt-4">
                Totale tijd: 2-3 weken + 1 dag verloren
              </p>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                ✓ Installatie IPTV2Belgie
              </h3>
              <ol className="space-y-3 text-gray-300">
                <li>1. Online bestellen (2 minuten)</li>
                <li>2. Login ontvangen (10 minuten)</li>
                <li>3. App downloaden</li>
                <li>4. Inloggen</li>
                <li>5. Klaar! TV kijken</li>
                <li className="text-gray-500">6. -</li>
                <li className="text-gray-500">7. -</li>
                <li className="text-gray-500">8. -</li>
              </ol>
              <p className="text-emerald-400 font-bold mt-4">
                Totale tijd: 10 minuten maximum
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Werkt op AL je apparaten:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
              <div className="text-center">
                <div className="text-3xl mb-2">📺</div>
                <p>Smart TV</p>
                <p className="text-xs text-gray-500">Samsung, LG, Sony</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <p>Smartphone</p>
                <p className="text-xs text-gray-500">iOS & Android</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <p>Computer</p>
                <p className="text-xs text-gray-500">Windows & Mac</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎮</div>
                <p>TV Box</p>
                <p className="text-xs text-gray-500">Firestick, Chromecast</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sectie 7: Legaliteit */}
        <section id="legaal" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            7. Is IPTV Legaal? JA, en Dit is Waarom
          </h2>

          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Het korte antwoord:</strong> Ja,
              IPTV is volledig legaal in België. Je betaalt voor toegang tot
              content, net zoals bij Netflix, Spotify of YouTube Premium.
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">
                Het verschil met piraterij:
              </strong>{' '}
              Piraterij is content bekijken zonder te betalen. Bij IPTV2Belgie
              betaal je een maandelijks abonnement voor legale toegang tot
              zenders en content.
            </p>
            <div className="bg-green-900/20 border border-green-600 rounded-lg p-4">
              <p className="text-green-300">
                ✅ We opereren transparant met BTW-nummer, facturen en officiële
                klantenservice. Net als elke andere legale streaming dienst.
              </p>
            </div>
          </div>
        </section>

        {/* Sectie 8: Testimonials */}
        <section id="ervaringen" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            8. Wat Zeggen de 10.000+ Belgen Die Al Overstapten?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/michel-avatar.jpeg"
                  alt="Michel klant IPTV België"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Michel Janssens</p>
                  <p className="text-gray-400 text-sm">Antwerpen</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Had Telenet met alles erop en eraan: €115/maand! Nu betaal
                ik €19,99 voor 2 schermen. Bespaar meer dan €1000 per jaar.
                Waarom wachtte ik zo lang?&quot;
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/sophie-avatar.jpeg"
                  alt="Sophie klant IPTV België"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Sophie De Bruyn</p>
                  <p className="text-gray-400 text-sm">Gent</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Proximus decoder weer kapot. 3 weken wachten op technicus,
                kosten €75. IPTV2Belgie geïnstalleerd in letterlijk 5 minuten.
                Nooit meer terug!&quot;
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/thomas-avatar.jpeg"
                  alt="Thomas klant IPTV België"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">
                    Thomas Van Den Berg
                  </p>
                  <p className="text-gray-400 text-sm">Brussel</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Alle voetbal, F1, tennis, UFC... ALLES! Voor minder dan
                wat ik bij Proximus alleen voor internet betaalde. Kwaliteit is
                perfect, nooit storing.&quot;
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/lisa-avatar.jpeg"
                  alt="Lisa klant IPTV België"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Lisa Vermeulen</p>
                  <p className="text-gray-400 text-sm">Leuven</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Netflix, Disney+, alle Vlaamse zenders, Nederlandse
                zenders, sport... Ik heb alles opgezegd en bespaar €130 per
                maand! Beste beslissing ooit.&quot;
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Veelgehoorde opmerkingen van nieuwe klanten:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                • &quot;Had ik dit maar eerder geweten!&quot;
                <br />
                • &quot;Kan niet geloven dat het zo goedkoop is&quot;
                <br />• &quot;Werkt beter dan mijn Telenet decoder&quot;
              </div>
              <div>
                • &quot;De klantenservice is 100x beter&quot;
                <br />
                • &quot;Installatie was echt binnen 10 minuten&quot;
                <br />• &quot;Mijn hele familie is overgestapt&quot;
              </div>
            </div>
          </div>
        </section>

        {/* Uitgebreide FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Veelgestelde Vragen (Eerlijke Antwoorden)
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🤔 Hoe kan het 8x goedkoper zijn?
              </h3>
              <p className="text-gray-300">
                Simpel: geen fysieke winkels, geen technici, geen dure decoders,
                geen TV-reclame. We gebruiken bestaande internetinfrastructuur.
                Onze kosten zijn 10x lager, dus onze prijzen ook.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                📺 Is de kwaliteit echt goed?
              </h3>
              <p className="text-gray-300">
                Uitstekend! HD, Full HD, 4K en zelfs 8K op bepaalde zenders. Met
                standaard internet (20 Mbps) heb je perfecte kwaliteit. Vaak
                beter dan traditionele kabel omdat wij moderne technologie
                gebruiken.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🌐 Welke internetsnelheid heb ik nodig?
              </h3>
              <p className="text-gray-300">
                Minimum 10 Mbps voor HD, 25 Mbps voor 4K. De meeste Belgische
                internetverbindingen zijn ruim voldoende (gemiddeld: 70 Mbps).
                Je huidige internet is waarschijnlijk perfect.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🔄 Kan ik tussendoor opzeggen?
              </h3>
              <p className="text-gray-300">
                Ja, altijd! Geen contract, geen opzegtermijn, geen
                opzegvergoeding. Je bent volledig vrij. Dat is het grote
                verschil met Proximus/Telenet.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                💳 Hoe betaal ik?
              </h3>
              <p className="text-gray-300">
                Veilige SEPA bankoverschrijving. Simpel, snel, veilig. Je
                ontvangt je toegangscodes binnen 10 minuten na betaling. Geen
                creditcard nodig, geen automatische incasso.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🆘 Wat als ik hulp nodig heb?
              </h3>
              <p className="text-gray-300">
                24/7 support via WhatsApp en Telegram. Antwoord binnen 5
                minuten. In het Nederlands, Frans en Engels. Probeer dat maar
                eens bij Proximus!
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🎁 Kan ik eerst gratis testen?
              </h3>
              <p className="text-gray-300">
                Natuurlijk! We bieden 24 uur gratis test. Test de kwaliteit, de
                zenders, alles. Geen verplichtingen, geen creditcard nodig. We
                zijn zo zeker van onze service.
              </p>
            </div>
          </div>
        </section>

        {/* Krachtige conclusie */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">
            De Keuze is aan Jou
          </h2>

          <div className="bg-gray-800 rounded-xl p-8">
            <p className="text-lg text-gray-300 mb-6">
              Je hebt nu alle feiten. De vraag is niet meer &quot;Is het de
              moeite waard?&quot; maar{' '}
              <strong className="text-white">
                &quot;Hoeveel geld wil ik nog blijven weggooien?&quot;
              </strong>
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-900/20 border border-red-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-3">
                  Optie 1: Niets doen
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Blijf €85/maand betalen</li>
                  <li>• Verlies €900 dit jaar</li>
                  <li>• Accepteer prijsverhogingen</li>
                  <li>• Blijf gefrustreerd</li>
                </ul>
              </div>

              <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                  Optie 2: Nu actie ondernemen
                </h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Betaal slechts €9,99/maand</li>
                  <li>• Bespaar €900 dit jaar</li>
                  <li>• Krijg 133x meer content</li>
                  <li>• Wees vrij en tevreden</li>
                </ul>
              </div>
            </div>

            <p className="text-xl text-white font-semibold text-center">
              Elke dag uitstel = €2,50 verloren. Een maand = €75. Hoeveel wil je
              nog verliezen?
            </p>
          </div>
        </section>

        {/* Finale ultra krachtige CTA */}
        <div className="bg-gradient-to-r from-red-900 to-orange-900 rounded-xl p-10 text-center border-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-white mb-4">
            🚨 BEPERKTE AANBIEDING: 70% Korting
          </h2>
          <p className="text-2xl text-yellow-300 mb-4">
            12 maanden voor de prijs van 3,5 maanden
          </p>
          <p className="text-3xl font-bold text-white mb-6">
            €34,99 in plaats van €119,88
          </p>
          <p className="text-white text-lg mb-8">
            Deze aanbieding eindigt over enkele uren. Meer dan 500 mensen
            bekijken deze pagina nu.
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-yellow-500 text-black px-10 py-5 rounded-lg text-xl font-black hover:bg-yellow-400 transition-all duration-300 shadow-2xl animate-pulse"
          >
            IK WIL €900 BESPAREN NU →
          </Link>
          <p className="text-white mt-6">
            ✅ Zonder contract • ✅ Geld-terug-garantie • ✅ Direct beginnen
          </p>
        </div>
      </div>
    </article>
  );
}
