import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Jupiler Pro League Kijken 2026-2027: Alle Opties Vergeleken (DAZN, Telenet & Goedkoopste Alternatief) | IPTV2Belgie',
  description:
    'Waar kan je de Jupiler Pro League kijken in 2026-2027? Volledige vergelijking van DAZN (24,99€), Telenet Play Sports en het goedkoopste alternatief. Alle wedstrijden live, updated deze week.',
  keywords:
    'jupiler pro league kijken, gratis jupiler pro league kijken, jupiler pro league kijken telenet, jupiler pro league streamen, pro league kijken goedkoop, dazn belgië alternatief, jupiler pro league live',
  openGraph: {
    title: 'Jupiler Pro League Kijken 2026-27: Niet €35/maand aan DAZN',
    description:
      'Alle manieren om de Jupiler Pro League live te kijken, vergeleken op prijs. Plus het goedkoopste alternatief voor alle wedstrijden.',
    locale: 'nl_BE',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iptv2belgie.be/blog/jupiler-pro-league-kijken',
  },
};

export default function JupilerProLeagueKijkenBlog() {
  const structuredData = {
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline:
          'Jupiler Pro League Kijken 2026-2027: Alle Opties Vergeleken',
        description:
          'Waar en hoe je de Jupiler Pro League live kan kijken in 2026-2027, vergeleken op prijs. DAZN, Telenet Play Sports en het goedkoopste alternatief.',
        datePublished: '2026-08-11T00:00:00+02:00',
        dateModified: '2026-08-11T00:00:00+02:00',
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
            'https://www.iptv2belgie.be/blog/jupiler-pro-league-kijken',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Waar kan ik de Jupiler Pro League kijken in 2026-2027?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'De officiële uitzendrechten liggen bij DAZN (24,99€/maand) en Play Sports via Telenet, Orange en VOO. Een goedkoper alternatief is IPTV, waarmee je alle wedstrijden plus alle andere competities kan kijken vanaf 9,99€/maand.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik de Jupiler Pro League gratis kijken?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DAZN zendt af en toe één gratis multilive-wedstrijd uit in de app, maar niet alle matchen. Voor alle wedstrijden heb je een betalend abonnement of een IPTV-abonnement nodig.',
            },
          },
          {
            '@type': 'Question',
            name: 'Waarom betaal ik plots 15 euro meer om voetbal te kijken?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sinds het seizoen 2026-2027 is de prijsstructuur van DAZN en Play Sports gewijzigd, waardoor veel kijkers plots tot 15€ per maand extra betalen. Dat is ook waarom veel Belgen op zoek gaan naar een goedkoper alternatief.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe kijk ik alle wedstrijden van de Pro League zo goedkoop mogelijk?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Met een IPTV-abonnement kijk je alle wedstrijden van de Jupiler Pro League, plus de Champions League, Premier League en La Liga, vanaf 9,99€/maand, zonder decoder en zonder contract.',
            },
          },
        ],
      },
    ],
  };

  const waLink =
    'https://wa.me/33773436514?text=' +
    encodeURIComponent(
      'Hallo! Ik wil de Jupiler Pro League live kijken met IPTV. Kan je me meer info geven?'
    );

  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-sky-400 font-semibold mb-4 uppercase tracking-wide">
            Seizoen 2026-2027 • Bijgewerkt op 11 augustus 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Jupiler Pro League Kijken: Betaal Geen €35/maand aan DAZN
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            DAZN: 24,99€/maand • Play Sports: +15€ extra • Orange & VOO: 20€+
          </p>
          <p className="text-2xl md:text-3xl text-emerald-400 font-bold mb-8">
            Alle wedstrijden + alle competities via IPTV: vanaf 9,99€/maand
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl"
          >
            Bekijk alle matchen live →
          </a>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro / nieuwshook */}
        <section className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">Het is weer zover.</strong> Het
            nieuwe seizoen van de Jupiler Pro League is net begonnen, en zoals
            elk jaar botst iedereen op dezelfde vraag:{' '}
            <strong className="text-white">
              waar kan ik de wedstrijden van mijn club nog betaalbaar kijken?
            </strong>{' '}
            Dit seizoen is die vraag pijnlijker dan ooit. Kijkers betalen plots
            tot <strong className="text-red-400">15€ per maand extra</strong> om
            voetbal te volgen, en zelfs de minister vroeg een onderzoek naar de
            prijzen van Play Sports.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            In deze gids zetten we{' '}
            <strong className="text-white">
              álle manieren om de Jupiler Pro League te kijken
            </strong>{' '}
            op een rij, eerlijk vergeleken op prijs, én tonen we het goedkoopste
            alternatief waarmee je niet alleen de Pro League maar ook de
            Champions League, Premier League en La Liga volgt.
          </p>
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500 rounded-lg p-6">
            <p className="text-white text-lg">
              ⚠️ <strong>Actueel:</strong> Op DAZN kost een abonnement
              intussen 24,99€/maand. Via Play Sports (Telenet) komt daar sinds
              27/09 nog eens tot 15€ bij. Voor één competitie. Er is een veel
              goedkopere manier.
            </p>
          </div>
        </section>

        {/* Table des matières */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            Wat je in deze gids vindt:
          </h2>
          <ol className="space-y-2 text-gray-300">
            <li>
              1.{' '}
              <a href="#officieel" className="text-sky-400 hover:text-sky-300">
                Waar wordt de Jupiler Pro League uitgezonden in 2026-27?
              </a>
            </li>
            <li>
              2.{' '}
              <a href="#prijs" className="text-sky-400 hover:text-sky-300">
                Waarom betaal je plots €15 meer? De prijsverhoging uitgelegd
              </a>
            </li>
            <li>
              3.{' '}
              <a href="#gratis" className="text-sky-400 hover:text-sky-300">
                Kan je de Pro League gratis kijken?
              </a>
            </li>
            <li>
              4.{' '}
              <a href="#alternatief" className="text-sky-400 hover:text-sky-300">
                Het goedkoopste alternatief: alles via IPTV
              </a>
            </li>
            <li>
              5.{' '}
              <a href="#speelschema" className="text-sky-400 hover:text-sky-300">
                Speelschema: de wedstrijden van deze speeldag
              </a>
            </li>
            <li>
              6.{' '}
              <a href="#installatie" className="text-sky-400 hover:text-sky-300">
                Hoe kijk je de Pro League via IPTV? (in 10 minuten)
              </a>
            </li>
            <li>
              7.{' '}
              <a href="#veelgestelde" className="text-sky-400 hover:text-sky-300">
                Veelgestelde vragen
              </a>
            </li>
          </ol>
        </nav>

        {/* Section 1: officiële opties */}
        <section id="officieel" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            1. Waar Wordt de Jupiler Pro League Uitgezonden in 2026-27?
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            De uitzendrechten van de Jupiler Pro League liggen bij{' '}
            <strong className="text-white">DAZN</strong> en{' '}
            <strong className="text-white">Play Sports</strong>. Concreet betekent
            dat: om alle topwedstrijden te zien, moet je bij één van deze
            aanbieders zijn. Hier is een eerlijk overzicht van elke officiële
            optie en wat het je kost:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Aanbieder</th>
                  <th className="px-4 py-3 text-center text-white">
                    Prijs/maand
                  </th>
                  <th className="px-4 py-3 text-center text-white">Wat je krijgt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">DAZN</td>
                  <td className="px-4 py-3 text-center text-red-400">24,99€</td>
                  <td className="px-4 py-3 text-gray-300">
                    Jupiler Pro League + enkele Europese competities
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Telenet Play Sports
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    ~19,95€ + TV-pack
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    Play Sports 1 &amp; 2 + toegang DAZN-app (sinds 27/09)
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Orange Sports
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">~20€</td>
                  <td className="px-4 py-3 text-gray-300">
                    Play Sports via de Orange-decoder
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    VOO (Wallonië)
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">~20€</td>
                  <td className="px-4 py-3 text-gray-300">Play Sports-pakket</td>
                </tr>
                <tr className="hover:bg-gray-700 font-bold">
                  <td className="px-4 py-3 text-emerald-400">
                    IPTV2Belgie
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400">
                    9,99€
                  </td>
                  <td className="px-4 py-3 text-emerald-300">
                    Pro League + Champions League + Premier League + La Liga +
                    20.000 zenders
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Het patroon is duidelijk: bij de officiële aanbieders betaal je{' '}
            <strong className="text-red-400">20€ tot 35€ per maand</strong>, en
            dan zie je vaak enkel de Pro League. Wil je er ook de Champions
            League of de Premier League bij? Dan lopen de kosten snel op tot 50€
            of meer per maand. Zie ook onze volledige{' '}
            <Link
              href="/blog/iptv-belgique-prix-comparatif-2025"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              prijsvergelijking IPTV vs Proximus vs Telenet
            </Link>
            .
          </p>
        </section>

        {/* Section 2: prijsverhoging */}
        <section id="prijs" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            2. Waarom Betaal Je Plots €15 Meer?
          </h2>
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-4 leading-relaxed">
              Sinds de start van het seizoen 2026-2027 is de prijsstructuur
              rond de Belgische voetbaluitzendingen grondig veranderd. Waar je
              vroeger met één sportpakket rondkwam, moet je nu vaak{' '}
              <strong className="text-white">
                een combinatie van DAZN én Play Sports
              </strong>{' '}
              nemen om alles te zien. Het resultaat: veel gezinnen betalen plots
              tot 15€ per maand extra.
            </p>
            <p className="text-gray-300 leading-relaxed">
              De prijsverhoging leidde tot zoveel klachten dat de bevoegde
              minister zelfs een onderzoek naar de prijzen van Play Sports
              vroeg. Op fora zoals r/belgianfootball is het antwoord op &quot;zijn
              er goedkopere alternatieven?&quot; steevast hetzelfde: legaal via
              de zenders is duur, dus zoeken mensen massaal naar een
              betaalbaardere manier.
            </p>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold">
              💡 De kern van het probleem: je betaalt telkens per aanbieder,
              per competitie. Eén abonnement dat álles bundelt bestaat bij de
              klassieke spelers niet meer.
            </p>
          </div>
        </section>

        {/* Section 3: gratis kijken */}
        <section id="gratis" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            3. Kan Je de Pro League Gratis Kijken?
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            De eerlijke waarheid: <strong className="text-white">niet alle
            wedstrijden</strong>. DAZN zendt af en toe één gratis
            multilive-wedstrijd uit in zijn app, en er circuleren illegale
            gratis streamsites. Die laatste zijn echter traag, vol reclame,
            vaak in slechte kwaliteit en verdwijnen constant offline midden in
            de match.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Wie stabiel en in HD/4K álle wedstrijden wil kijken, komt uit bij een
            betalend abonnement. Het goede nieuws: dat hoeft geen 25€ tot 35€ te
            kosten.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ⚽ Alle wedstrijden live, vanaf 9,99€/maand
          </h3>
          <p className="text-white text-lg mb-6">
            Geen decoder, geen contract, direct actief. Stuur ons een bericht en
            je kijkt vanavond nog.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300"
          >
            Start via WhatsApp →
          </a>
        </div>

        {/* Section 4: alternatief */}
        <section id="alternatief" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            4. Het Goedkoopste Alternatief: Alles via IPTV
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Met een IPTV-abonnement kijk je{' '}
            <strong className="text-white">
              alle wedstrijden van de Jupiler Pro League
            </strong>{' '}
            én alle andere grote competities, voor een fractie van de prijs. Eén
            abonnement, alles inbegrepen:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src="/assets/sports/football/belgium/club brugge - champions league.png"
                alt="Club Brugge Jupiler Pro League live kijken"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src="/assets/sports/football/belgium/standard de liège players on the pitch.png"
                alt="Standard de Liège Jupiler Pro League"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Wat je krijgt</th>
                  <th className="px-4 py-3 text-center text-white">
                    DAZN + Play Sports
                  </th>
                  <th className="px-4 py-3 text-center text-white">IPTV2Belgie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Jupiler Pro League
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400">✓</td>
                  <td className="px-4 py-3 text-center text-emerald-400">✓</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Champions League
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    Enkel deels
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400">✓</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Premier League &amp; La Liga
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    Extra abonnement
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400">✓</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Films &amp; series (Netflix, Disney+...)
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">✗</td>
                  <td className="px-4 py-3 text-center text-emerald-400">
                    100.000+
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">Decoder nodig</td>
                  <td className="px-4 py-3 text-center text-red-400">Ja</td>
                  <td className="px-4 py-3 text-center text-emerald-400">Nee</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">Contract</td>
                  <td className="px-4 py-3 text-center text-red-400">
                    12-24 maanden
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400">
                    Geen
                  </td>
                </tr>
                <tr className="hover:bg-gray-700 font-bold text-lg">
                  <td className="px-4 py-4 text-white">Prijs/maand</td>
                  <td className="px-4 py-4 text-center text-red-400">35€+</td>
                  <td className="px-4 py-4 text-center text-emerald-400">
                    9,99€
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Meer weten over hoe IPTV zich verhoudt tot Telenet en Proximus? Lees{' '}
            <Link
              href="/blog/iptv-belgie-proximus-telenet-alternatief"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              IPTV als alternatief voor Proximus &amp; Telenet
            </Link>
            .
          </p>
        </section>

        {/* Section 5: speelschema (freshness engine) */}
        <section id="speelschema" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            5. Speelschema: De Wedstrijden van Deze Speeldag
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            <strong className="text-white">Bijgewerkt op 11 augustus 2026.</strong>{' '}
            Hieronder de aankomende topaffiches van de Jupiler Pro League. Al deze
            wedstrijden kijk je live via IPTV2Belgie:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Wedstrijd</th>
                  <th className="px-4 py-3 text-center text-white">Dag</th>
                  <th className="px-4 py-3 text-center text-white">Uur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white">
                    Club Brugge – KV Kortrijk
                  </td>
                  <td className="px-4 py-3 text-center text-gray-300">ZAT</td>
                  <td className="px-4 py-3 text-center text-gray-300">20:45</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white">
                    Standard – Cercle Brugge
                  </td>
                  <td className="px-4 py-3 text-center text-gray-300">ZAT</td>
                  <td className="px-4 py-3 text-center text-gray-300">18:15</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white">
                    KVC Westerlo – Union SG
                  </td>
                  <td className="px-4 py-3 text-center text-gray-300">ZON</td>
                  <td className="px-4 py-3 text-center text-gray-300">13:30</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white">
                    RSC Anderlecht – KRC Genk
                  </td>
                  <td className="px-4 py-3 text-center text-gray-300">ZON</td>
                  <td className="px-4 py-3 text-center text-gray-300">18:30</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white">
                    Royal Antwerp – KAA Gent
                  </td>
                  <td className="px-4 py-3 text-center text-gray-300">ZON</td>
                  <td className="px-4 py-3 text-center text-gray-300">16:00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic">
            Speelschema wordt wekelijks bijgewerkt. Alle tijden in Belgische tijd
            (CET).
          </p>
        </section>

        {/* Section 6: installatie */}
        <section id="installatie" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            6. Hoe Kijk Je de Pro League via IPTV? (in 10 minuten)
          </h2>
          <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6 mb-6">
            <ol className="space-y-3 text-gray-300">
              <li>1. Stuur ons een bericht via WhatsApp (2 minuten)</li>
              <li>2. Ontvang je toegangscodes binnen 10 minuten</li>
              <li>
                3. Download een gratis app (IPTV Smarters Pro) op je toestel
              </li>
              <li>4. Vul je codes in</li>
              <li>5. Klaar! Kijk de match in HD/4K</li>
            </ol>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Werkt op al je toestellen:
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
                <p className="text-xs text-gray-500">iOS &amp; Android</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔥</div>
                <p>Firestick</p>
                <p className="text-xs text-gray-500">Amazon Fire TV</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <p>Computer</p>
                <p className="text-xs text-gray-500">Windows &amp; Mac</p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mt-6">
            Geen decoder nodig, geen technicus. Zie ook:{' '}
            <Link
              href="/blog/iptv-installeren-zonder-decoder-belgie"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              IPTV installeren zonder decoder
            </Link>
            .
          </p>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Wat Belgische Voetbalfans Zeggen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/michel-avatar.jpeg"
                  alt="Michel klant IPTV Jupiler Pro League"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Michel Vandenberghe</p>
                  <p className="text-gray-400 text-sm">Brugge</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Ik betaalde 35€ voor DAZN + Play Sports, enkel voor de Pro
                League. Nu kijk ik álle matchen van Club plus de Champions League
                voor 9,99€. Waarom heb ik zo lang gewacht?&quot;
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/thomas-avatar.jpeg"
                  alt="Thomas klant IPTV voetbal België"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Thomas Peeters</p>
                  <p className="text-gray-400 text-sm">Antwerpen</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Die prijsverhoging van 15€ was de druppel. Overgestapt op
                IPTV, in 10 minuten geïnstalleerd op mijn Firestick. Perfecte
                kwaliteit, geen buffering tijdens de match.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="veelgestelde" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Veelgestelde Vragen
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Waar kan ik de Jupiler Pro League kijken in 2026-2027?
              </h3>
              <p className="text-gray-300">
                Officieel via DAZN (24,99€/maand) en Play Sports (Telenet, Orange,
                VOO). Een goedkoper alternatief is IPTV vanaf 9,99€/maand,
                waarmee je alle wedstrijden plus andere competities kijkt.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Kan ik de Jupiler Pro League gratis kijken?
              </h3>
              <p className="text-gray-300">
                DAZN zendt soms één gratis multilive-wedstrijd uit, maar niet
                alle matchen. Voor alle wedstrijden in stabiele HD-kwaliteit heb
                je een betalend of IPTV-abonnement nodig.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Werkt IPTV op mijn Smart TV of Firestick?
              </h3>
              <p className="text-gray-300">
                Ja. IPTV werkt op Smart TV (Samsung, LG, Sony), Firestick,
                Android box, smartphone, tablet en computer. Je hebt enkel een
                internetverbinding nodig.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Zit ik vast aan een contract?
              </h3>
              <p className="text-gray-300">
                Nee. Geen contract, geen decoderhuur, geen opzegkosten. Je kan op
                elk moment stoppen.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-sky-900 to-emerald-900 rounded-xl p-10 text-center border-4 border-emerald-500">
          <h2 className="text-3xl font-bold text-white mb-4">
            Kijk Vanavond Nog de Jupiler Pro League
          </h2>
          <p className="text-2xl text-emerald-300 mb-6">
            Alle wedstrijden + alle competities voor 9,99€/maand
          </p>
          <p className="text-white text-lg mb-8">
            Direct actief • Geen decoder • Geen contract • Support in het
            Nederlands
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 text-black px-10 py-5 rounded-lg text-xl font-black hover:bg-emerald-400 transition-all duration-300 shadow-2xl"
          >
            START VIA WHATSAPP →
          </a>
          <p className="text-white mt-6">
            ✅ Zonder engagement • ✅ Tevreden-of-terugbetaald • ✅ Directe
            activatie
          </p>
        </div>
      </div>
    </article>
  );
}
