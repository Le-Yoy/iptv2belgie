import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Telenet Opzeggen & Overstappen naar IPTV in 2026: Zo Bespaar Je €900/jaar | IPTV2Belgie',
  description:
    'Telenet en Play Sports te duur geworden? Ontdek hoe je Telenet opzegt en overstapt naar IPTV. Behoud al je voetbal (Jupiler Pro League, Champions League) vanaf 9,99€/maand.',
  keywords:
    'telenet opzeggen, play sports opzeggen, telenet voetbal te duur, overstappen van telenet naar iptv, telenet alternatief, play sports te duur, telenet play sports prijs',
  openGraph: {
    title: 'Telenet Opzeggen in 2026: Overstappen naar IPTV en €900 Besparen',
    description:
      'Stap voor stap Telenet en Play Sports opzeggen en al je voetbal goedkoper kijken via IPTV.',
    locale: 'nl_BE',
    type: 'article',
  },
  alternates: {
    canonical:
      'https://www.iptv2belgie.be/blog/telenet-opzeggen-overstappen-iptv',
  },
};

export default function TelenetOpzeggenBlog() {
  const structuredData = {
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline:
          'Telenet Opzeggen & Overstappen naar IPTV in 2026',
        description:
          'Hoe je Telenet en Play Sports opzegt en overstapt naar IPTV, met behoud van al je voetbal voor een fractie van de prijs.',
        datePublished: '2026-08-13T00:00:00+02:00',
        dateModified: '2026-08-13T00:00:00+02:00',
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
            'https://www.iptv2belgie.be/blog/telenet-opzeggen-overstappen-iptv',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Hoe zeg ik Telenet op?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Je zegt Telenet op via je klantenzone op telenet.be, telefonisch of per aangetekende brief. Sinds de nieuwe telecomregels kan je maandelijks opzeggen zonder zware verbrekingsvergoeding na de eerste 6 maanden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Waarom betaal ik plots 15 euro meer voor Play Sports?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sinds het seizoen 2026-2027 is de prijsstructuur van Play Sports en DAZN gewijzigd, waardoor veel Telenet-klanten tot 15€ per maand extra betalen om voetbal te kijken.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik al mijn voetbal behouden als ik Telenet opzeg?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Met een IPTV-abonnement kijk je de Jupiler Pro League, Champions League, Premier League en meer, vanaf 9,99€/maand, zonder Telenet-decoder.',
            },
          },
        ],
      },
    ],
  };

  const waLink =
    'https://wa.me/33773436514?text=' +
    encodeURIComponent(
      'Hallo! Ik wil Telenet opzeggen en overstappen naar IPTV. Kan je me helpen?'
    );

  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-sky-400 font-semibold mb-4 uppercase tracking-wide">
            Bijgewerkt op 13 augustus 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Telenet Opzeggen en Overstappen naar IPTV
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Play Sports werd +15€/maand duurder. Tijd voor een goedkoper
            alternatief?
          </p>
          <p className="text-2xl md:text-3xl text-emerald-400 font-bold mb-8">
            Behoud al je voetbal vanaf 9,99€/maand
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl"
          >
            Hulp bij overstappen →
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <section className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">
              Je bent niet de enige.
            </strong>{' '}
            Sinds de start van het seizoen 2026-2027 betalen duizenden
            Telenet-klanten plots tot 15€ per maand extra om via Play Sports
            naar voetbal te kijken. De prijsverhoging leidde tot zoveel klachten
            dat zelfs de minister een onderzoek naar de prijzen vroeg.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            In deze gids tonen we je{' '}
            <strong className="text-white">
              hoe je Telenet (en Play Sports) opzegt
            </strong>{' '}
            en overstapt naar een alternatief waarmee je al je voetbal behoudt,
            de Jupiler Pro League, de Champions League en meer, voor een fractie
            van de prijs.
          </p>
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500 rounded-lg p-6">
            <p className="text-white text-lg">
              💸 <strong>Reken even mee:</strong> een volledig Telenet-pakket met
              Play Sports kost al snel 85€ tot 105€/maand. Dat is meer dan
              1.000€ per jaar, voor tv en voetbal.
            </p>
          </div>
        </section>

        {/* TOC */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">In deze gids:</h2>
          <ol className="space-y-2 text-gray-300">
            <li>
              1.{' '}
              <a href="#waarom" className="text-sky-400 hover:text-sky-300">
                Waarom stappen zoveel Belgen over van Telenet?
              </a>
            </li>
            <li>
              2.{' '}
              <a href="#kost" className="text-sky-400 hover:text-sky-300">
                Wat kost Telenet + Play Sports echt?
              </a>
            </li>
            <li>
              3.{' '}
              <a href="#opzeggen" className="text-sky-400 hover:text-sky-300">
                Hoe zeg je Telenet op? (stap voor stap)
              </a>
            </li>
            <li>
              4.{' '}
              <a href="#alternatief" className="text-sky-400 hover:text-sky-300">
                Het alternatief: al je voetbal via IPTV
              </a>
            </li>
            <li>
              5.{' '}
              <a href="#overstappen" className="text-sky-400 hover:text-sky-300">
                Overstappen in 10 minuten
              </a>
            </li>
            <li>
              6.{' '}
              <a href="#faq" className="text-sky-400 hover:text-sky-300">
                Veelgestelde vragen
              </a>
            </li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="waarom" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            1. Waarom Stappen Zoveel Belgen Over van Telenet?
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            De redenen zijn elk jaar dezelfde, maar in 2026 zijn ze pijnlijker
            dan ooit:
          </p>
          <div className="space-y-4">
            <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
              <ul className="space-y-3 text-gray-300">
                <li>
                  • <strong>De prijsverhoging:</strong> +15€/maand voor voetbal
                  via Play Sports sinds dit seizoen.
                </li>
                <li>
                  • <strong>Losse pakketten:</strong> je betaalt apart voor tv,
                  voor sport, voor films, alles stapelt op.
                </li>
                <li>
                  • <strong>Decoderhuur:</strong> ~7,95€/maand extra voor een box
                  die je niet bezit.
                </li>
                <li>
                  • <strong>Contracten:</strong> lange looptijden en
                  verbrekingsvergoedingen.
                </li>
                <li>
                  • <strong>Jaarlijkse verhogingen:</strong> elk jaar in januari,
                  vaak onaangekondigd.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="kost" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            2. Wat Kost Telenet + Play Sports Echt?
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Onderdeel</th>
                  <th className="px-4 py-3 text-center text-white">
                    Telenet
                  </th>
                  <th className="px-4 py-3 text-center text-white">
                    IPTV2Belgie
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    TV-pakket
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    ~59€/mnd
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400">
                    Inbegrepen
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Play Sports (voetbal)
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    ~19,95€ + 15€
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400">
                    Inbegrepen
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Decoderhuur
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    7,95€/mnd
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400">
                    Geen
                  </td>
                </tr>
                <tr className="hover:bg-gray-700 font-bold text-lg">
                  <td className="px-4 py-4 text-white">Totaal/maand</td>
                  <td className="px-4 py-4 text-center text-red-400">
                    ~100€+
                  </td>
                  <td className="px-4 py-4 text-center text-emerald-400">
                    9,99€
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Bekijk ook onze volledige{' '}
            <Link
              href="/blog/iptv-belgique-prix-comparatif-2025"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              prijsvergelijking IPTV vs Telenet vs Proximus
            </Link>
            .
          </p>
        </section>

        {/* Section 3 */}
        <section id="opzeggen" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            3. Hoe Zeg Je Telenet Op? (Stap voor Stap)
          </h2>
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <ol className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">1. Check je contract.</strong>{' '}
                Kijk in je klantenzone op telenet.be hoelang je nog vastzit.
                Sinds de nieuwe telecomregels kan je na 6 maanden meestal gratis
                maandelijks opzeggen.
              </li>
              <li>
                <strong className="text-white">2. Zeg op.</strong> Dat kan via je
                klantenzone, telefonisch, of per aangetekende brief. Vermeld je
                klantnummer en de gewenste einddatum.
              </li>
              <li>
                <strong className="text-white">3. Lever de decoder in.</strong>{' '}
                Breng de gehuurde decoder en modem terug om extra kosten te
                vermijden.
              </li>
              <li>
                <strong className="text-white">
                  4. Zet eerst je alternatief klaar.
                </strong>{' '}
                Regel je IPTV-abonnement vóór je opzegt, zodat je geen enkele
                wedstrijd mist.
              </li>
            </ol>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
            <p className="text-yellow-300">
              💡 Tip: hou je internetabonnement (je hebt internet nodig voor
              IPTV) en zeg enkel het dure tv- en sportgedeelte op.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ⚽ Al je voetbal behouden, voor 9,99€/maand
          </h3>
          <p className="text-white text-lg mb-6">
            Wij helpen je met de overstap. Stuur een bericht en je kijkt vanavond
            nog.
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

        {/* Section 4 */}
        <section id="alternatief" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            4. Het Alternatief: Al Je Voetbal via IPTV
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Met IPTV kijk je <strong className="text-white">alle</strong> voetbal
            in één abonnement: de Jupiler Pro League, de Champions League, de
            Premier League, La Liga en meer. Plus 20.000+ zenders en 100.000+
            films en series. Geen decoder, geen contract.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src="/assets/sports/football/belgium/club brugge - champions league.png"
                alt="Club Brugge voetbal kijken via IPTV na Telenet opzeggen"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src="/assets/sports/football/belgium/standard de liège players on the pitch.png"
                alt="Standard de Liège Jupiler Pro League IPTV"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Wil je precies weten hoe je de Jupiler Pro League kijkt na je
            overstap? Lees onze gids:{' '}
            <Link
              href="/blog/jupiler-pro-league-kijken"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              Jupiler Pro League kijken 2026-27
            </Link>
            .
          </p>
        </section>

        {/* Section 5 */}
        <section id="overstappen" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            5. Overstappen in 10 Minuten
          </h2>
          <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6 mb-6">
            <ol className="space-y-3 text-gray-300">
              <li>1. Stuur ons een bericht via WhatsApp (2 minuten)</li>
              <li>2. Ontvang je toegangscodes binnen 10 minuten</li>
              <li>3. Download een gratis app (IPTV Smarters Pro)</li>
              <li>4. Vul je codes in op je Smart TV, Firestick of gsm</li>
              <li>5. Klaar! Zeg daarna pas Telenet op</li>
            </ol>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Geen technicus nodig. Zie ook:{' '}
            <Link
              href="/blog/iptv-installeren-zonder-decoder-belgie"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              IPTV installeren zonder decoder
            </Link>
            .
          </p>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <Image
                src="/avatars/sophie-avatar.jpeg"
                alt="Sophie stapte over van Telenet naar IPTV"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-white">Sophie Dubois</p>
                <p className="text-gray-400 text-sm">Gent</p>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-300 italic">
              &quot;Toen Play Sports plots 15€ duurder werd, was het genoeg. Ik
              zei Telenet op, hield enkel mijn internet, en kijk nu álle voetbal
              via IPTV voor 9,99€. Ik bespaar meer dan 900€ per jaar.&quot;
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Veelgestelde Vragen
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Hoe zeg ik Telenet op?
              </h3>
              <p className="text-gray-300">
                Via je klantenzone op telenet.be, telefonisch of per aangetekende
                brief. Na de eerste 6 maanden kan je meestal maandelijks opzeggen
                zonder zware verbrekingsvergoeding.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Kan ik mijn internet houden en enkel tv opzeggen?
              </h3>
              <p className="text-gray-300">
                Ja, en dat is precies de bedoeling. Je hebt internet nodig voor
                IPTV, dus hou dat, en zeg enkel het dure tv- en sportpakket op.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Behoud ik de Jupiler Pro League en Champions League?
              </h3>
              <p className="text-gray-300">
                Ja. Met IPTV kijk je alle Belgische en Europese competities in
                één abonnement vanaf 9,99€/maand.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-sky-900 to-emerald-900 rounded-xl p-10 text-center border-4 border-emerald-500">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar om Over te Stappen?
          </h2>
          <p className="text-2xl text-emerald-300 mb-6">
            Al je voetbal + 20.000 zenders voor 9,99€/maand
          </p>
          <p className="text-white text-lg mb-8">
            Direct actief • Geen decoder • Geen contract • Nederlandstalige
            support
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 text-black px-10 py-5 rounded-lg text-xl font-black hover:bg-emerald-400 transition-all duration-300 shadow-2xl"
          >
            START VIA WHATSAPP →
          </a>
        </div>
      </div>
    </article>
  );
}
