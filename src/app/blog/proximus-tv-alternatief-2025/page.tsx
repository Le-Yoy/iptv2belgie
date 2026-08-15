import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Proximus Opzeggen & Alternatief in 2026: Zo Bespaar Je €800/jaar met IPTV | IPTV2Belgie',
  description:
    'Proximus Pickx te duur geworden? Ontdek hoe je Proximus TV opzegt en overstapt naar IPTV. Al je zenders en voetbal (Jupiler Pro League) vanaf 9,99€/maand.',
  keywords:
    'proximus opzeggen, proximus tv alternatief, proximus pickx te duur, overstappen van proximus naar iptv, proximus alternatief, proximus pickx opzeggen, alternatief proximus tv',
  openGraph: {
    title: 'Proximus Opzeggen in 2026: Overstappen naar IPTV en €800 Besparen',
    description:
      'Stap voor stap Proximus Pickx opzeggen en al je tv en voetbal goedkoper kijken via IPTV.',
    locale: 'nl_BE',
    type: 'article',
  },
  alternates: {
    canonical:
      'https://www.iptv2belgie.be/blog/proximus-tv-alternatief-2025',
  },
};

export default function ProximusAlternatiefBlog() {
  const structuredData = {
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Proximus Opzeggen & Alternatief in 2026',
        description:
          'Hoe je Proximus Pickx opzegt en overstapt naar IPTV, met behoud van al je zenders en voetbal voor een fractie van de prijs.',
        datePublished: '2026-08-15T00:00:00+02:00',
        dateModified: '2026-08-15T00:00:00+02:00',
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
            'https://www.iptv2belgie.be/blog/proximus-tv-alternatief-2025',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Hoe zeg ik Proximus TV op?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Je zegt Proximus (Pickx) op via je klantenzone op proximus.be, telefonisch of per aangetekende brief. Na de eerste periode kan je meestal maandelijks opzeggen. Lever de gehuurde decoder in om extra kosten te vermijden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat is een goedkoop alternatief voor Proximus TV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Een IPTV-abonnement is het goedkoopste alternatief: 20.000+ zenders, alle voetbal en 100.000+ films en series vanaf 9,99€/maand, zonder decoder en zonder contract.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik mijn Proximus internet houden en enkel tv opzeggen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Je hebt internet nodig voor IPTV, dus hou je internetabonnement en zeg enkel het dure tv-gedeelte (Pickx) op.',
            },
          },
        ],
      },
    ],
  };

  const waLink =
    'https://wa.me/33773436514?text=' +
    encodeURIComponent(
      'Hallo! Ik wil Proximus opzeggen en overstappen naar IPTV. Kan je me helpen?'
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
            Bijgewerkt op 15 augustus 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Proximus Opzeggen en Overstappen naar IPTV
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Proximus Pickx kost al snel 75€ tot 90€/maand. Er is een goedkoper
            alternatief.
          </p>
          <p className="text-2xl md:text-3xl text-emerald-400 font-bold mb-8">
            Al je zenders + voetbal vanaf 9,99€/maand
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
              Betaal je nog 80€ per maand aan Proximus?
            </strong>{' '}
            Dan ben je niet alleen. Duizenden Belgen kijken naar hun
            Proximus-factuur en vragen zich af waarom tv kijken zo duur moet
            zijn, zeker nu voetbal via Play Sports en DAZN nog eens flink
            duurder werd.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            In deze gids tonen we je{' '}
            <strong className="text-white">hoe je Proximus (Pickx) opzegt</strong>{' '}
            en overstapt naar een alternatief waarmee je al je zenders én al je
            voetbal behoudt, voor een fractie van de prijs.
          </p>
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500 rounded-lg p-6">
            <p className="text-white text-lg">
              💸 <strong>Reken mee:</strong> een volledig Proximus-pakket met
              sport kost al snel 90€+/maand. Dat is meer dan 1.000€ per jaar.
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
                Waarom stappen zoveel mensen over van Proximus?
              </a>
            </li>
            <li>
              2.{' '}
              <a href="#kost" className="text-sky-400 hover:text-sky-300">
                Wat kost Proximus Pickx echt?
              </a>
            </li>
            <li>
              3.{' '}
              <a href="#opzeggen" className="text-sky-400 hover:text-sky-300">
                Hoe zeg je Proximus op? (stap voor stap)
              </a>
            </li>
            <li>
              4.{' '}
              <a href="#alternatief" className="text-sky-400 hover:text-sky-300">
                Het alternatief: alles via IPTV
              </a>
            </li>
            <li>
              5.{' '}
              <a href="#faq" className="text-sky-400 hover:text-sky-300">
                Veelgestelde vragen
              </a>
            </li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="waarom" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            1. Waarom Stappen Zoveel Mensen Over van Proximus?
          </h2>
          <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                • <strong>Hoge maandprijs:</strong> Pickx-pakketten lopen snel op
                tot 75€ à 90€/maand.
              </li>
              <li>
                • <strong>Duur voetbal:</strong> sport zoals de Jupiler Pro
                League kost extra, en werd dit seizoen nog duurder.
              </li>
              <li>
                • <strong>Decoderhuur:</strong> je betaalt maandelijks voor een
                box die je niet bezit.
              </li>
              <li>
                • <strong>Contracten &amp; verbrekingsvergoedingen:</strong> lange
                looptijden houden je vast.
              </li>
              <li>
                • <strong>Jaarlijkse prijsverhogingen:</strong> elk jaar wat
                duurder.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section id="kost" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            2. Wat Kost Proximus Pickx Echt?
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Onderdeel</th>
                  <th className="px-4 py-3 text-center text-white">Proximus</th>
                  <th className="px-4 py-3 text-center text-white">
                    IPTV2Belgie
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    TV-pakket (Pickx)
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    ~55€/mnd
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400">
                    Inbegrepen
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Sport / voetbal
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +20€ à 35€
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
                    ~9,99€/mnd
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400">
                    Geen
                  </td>
                </tr>
                <tr className="hover:bg-gray-700 font-bold text-lg">
                  <td className="px-4 py-4 text-white">Totaal/maand</td>
                  <td className="px-4 py-4 text-center text-red-400">~90€+</td>
                  <td className="px-4 py-4 text-center text-emerald-400">
                    9,99€
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Zie ook onze volledige{' '}
            <Link
              href="/blog/iptv-belgique-prix-comparatif-2025"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              prijsvergelijking IPTV vs Proximus vs Telenet
            </Link>
            .
          </p>
        </section>

        {/* Section 3 */}
        <section id="opzeggen" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            3. Hoe Zeg Je Proximus Op? (Stap voor Stap)
          </h2>
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <ol className="space-y-4 text-gray-300">
              <li>
                <strong className="text-white">1. Check je contract.</strong>{' '}
                Bekijk in je klantenzone op proximus.be hoelang je nog vastzit.
              </li>
              <li>
                <strong className="text-white">2. Zeg op.</strong> Via je
                klantenzone, telefonisch of per aangetekende brief. Vermeld je
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
                Regel je IPTV vóór je opzegt, zodat je geen enkele dag zonder tv
                zit.
              </li>
            </ol>
          </div>
          <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
            <p className="text-yellow-300">
              💡 Tip: hou je internetabonnement (nodig voor IPTV) en zeg enkel
              het dure tv-gedeelte op.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            📺 Al je zenders behouden, voor 9,99€/maand
          </h3>
          <p className="text-white text-lg mb-6">
            Wij helpen je met de overstap. Stuur een bericht en je kijkt vandaag
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
            4. Het Alternatief: Alles via IPTV
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Met IPTV kijk je alle Belgische zenders (Eén, VTM, Canvas, La Une,
            RTL-TVI...), alle voetbal (Jupiler Pro League, Champions League,
            Premier League) en 100.000+ films en series in één abonnement. Geen
            decoder, geen contract.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src="/assets/sports/football/belgium/club brugge - champions league.png"
                alt="Voetbal kijken via IPTV na Proximus opzeggen"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src="/assets/sports/football/belgium/standard de liège players on the pitch.png"
                alt="Standard de Liège IPTV alternatief Proximus"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Wil je vooral je voetbal behouden? Lees onze gids{' '}
            <Link
              href="/blog/jupiler-pro-league-kijken"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              Jupiler Pro League kijken 2026-27
            </Link>
            , of ontdek hoe anderen{' '}
            <Link
              href="/blog/telenet-opzeggen-overstappen-iptv"
              className="text-sky-400 hover:text-sky-300 underline"
            >
              Telenet opzegden en overstapten
            </Link>
            .
          </p>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <Image
                src="/avatars/thomas-avatar.jpeg"
                alt="Thomas stapte over van Proximus naar IPTV"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-white">Thomas Peeters</p>
                <p className="text-gray-400 text-sm">Brussel</p>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-300 italic">
              &quot;Ik betaalde bijna 90€/maand aan Proximus met sport. Ik hield
              enkel mijn internet en kijk nu alles via IPTV voor 9,99€. Bespaar
              ruim 900€ per jaar en ik mis niets.&quot;
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
                Hoe zeg ik Proximus TV op?
              </h3>
              <p className="text-gray-300">
                Via je klantenzone op proximus.be, telefonisch of per
                aangetekende brief. Lever de gehuurde decoder in om extra kosten
                te vermijden.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Kan ik mijn internet houden?
              </h3>
              <p className="text-gray-300">
                Ja. Je hebt internet nodig voor IPTV, dus hou dat en zeg enkel
                het dure tv-gedeelte (Pickx) op.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Behoud ik al mijn zenders en voetbal?
              </h3>
              <p className="text-gray-300">
                Ja. Met IPTV kijk je alle Belgische zenders en alle voetbal in
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
            Al je zenders + voetbal voor 9,99€/maand
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
