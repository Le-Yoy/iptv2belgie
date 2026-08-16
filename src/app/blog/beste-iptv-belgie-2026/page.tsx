import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Beste IPTV België 2026 — 20.000+ Zenders & Alle Voetbal vanaf 9,99€',
  description:
    '🏆 De beste IPTV van België in 2026: 20.000+ zenders, alle voetbal (Jupiler Pro League) en 100.000+ films in 4K vanaf 9,99€/maand — goedkoper dan Telenet & Proximus. ✅',
  keywords:
    'beste iptv belgië, iptv belgië, iptv belgium, beste iptv belgium, iptv abonnement belgië, belgian iptv, belçika iptv, iptv belgië kopen, goedkope iptv belgië',
  openGraph: {
    title: 'Beste IPTV België 2026: Alle Zenders & Voetbal vanaf 9,99€',
    description:
      'De beste IPTV in België vergeleken op prijs en kwaliteit. Goedkoper dan Telenet en Proximus, zonder decoder of contract.',
    locale: 'nl_BE',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iptv2belgie.be/blog/beste-iptv-belgie-2026',
  },
};

export default function BesteIptvBelgieBlog() {
  const structuredData = {
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Beste IPTV België 2026: Top Keuze, Prijzen & Alternatief',
        description:
          'De beste IPTV in België in 2026 vergeleken op prijs, zenders en kwaliteit. Goedkoper dan Telenet en Proximus.',
        datePublished: '2026-08-16T00:00:00+02:00',
        dateModified: '2026-08-16T00:00:00+02:00',
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
          '@id': 'https://www.iptv2belgie.be/blog/beste-iptv-belgie-2026',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wat is de beste IPTV in België in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'De beste IPTV in België biedt 20.000+ zenders, alle Belgische kanalen, alle voetbal (Jupiler Pro League, Champions League) en 100.000+ films en series in HD/4K, vanaf 9,99€/maand, zonder decoder en zonder contract.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoeveel kost een goede IPTV in België?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Een kwaliteits-IPTV-abonnement kost in België vanaf 9,99€/maand, tegenover 75€ tot 100€/maand voor een volledig Telenet- of Proximus-pakket met sport.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is IPTV een goed alternatief voor Telenet of Proximus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. IPTV biedt meer zenders en alle voetbal voor een fractie van de prijs, zonder decoderhuur en zonder langlopend contract. Je hebt enkel een internetverbinding nodig.',
            },
          },
        ],
      },
    ],
  };

  const waLink =
    'https://wa.me/33773436514?text=' +
    encodeURIComponent(
      'Hallo! Ik zoek de beste IPTV in België. Kan je me meer info geven?'
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
            Bijgewerkt op 16 augustus 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Beste IPTV België 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            20.000+ zenders · alle voetbal · 100.000+ films — zonder decoder
          </p>
          <p className="text-2xl md:text-3xl text-emerald-400 font-bold mb-8">
            Vanaf 9,99€/maand — goedkoper dan Telenet &amp; Proximus
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl"
          >
            Bekijk het aanbod →
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <section className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">
              Op zoek naar de beste IPTV in België?
            </strong>{' '}
            Je bent niet alleen. Steeds meer Belgen zoeken een betaalbaar
            alternatief voor de dure pakketten van Telenet en Proximus, zeker nu
            voetbal via DAZN en Play Sports fors duurder werd. In deze gids
            vergelijken we de beste IPTV-opties van 2026 op{' '}
            <strong className="text-white">prijs, zenders en kwaliteit</strong>,
            zodat je meteen de juiste keuze maakt.
          </p>
          <div className="bg-gradient-to-r from-emerald-600/20 to-sky-600/20 border border-emerald-500 rounded-lg p-6">
            <p className="text-white text-lg">
              ✅ <strong>Kort antwoord:</strong> de beste IPTV in België biedt
              20.000+ zenders, alle voetbal en 100.000+ films/series in HD/4K,
              vanaf <strong className="text-emerald-400">9,99€/maand</strong> —
              zonder decoder, zonder contract.
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
                Waarom kiezen voor IPTV in België?
              </a>
            </li>
            <li>
              2.{' '}
              <a href="#vergelijking" className="text-sky-400 hover:text-sky-300">
                Beste IPTV vs Telenet vs Proximus (vergelijking)
              </a>
            </li>
            <li>
              3.{' '}
              <a href="#krijg" className="text-sky-400 hover:text-sky-300">
                Wat krijg je? Zenders, voetbal &amp; films
              </a>
            </li>
            <li>
              4.{' '}
              <a href="#waarop" className="text-sky-400 hover:text-sky-300">
                Waarop letten bij het kiezen van IPTV?
              </a>
            </li>
            <li>
              5.{' '}
              <a href="#installatie" className="text-sky-400 hover:text-sky-300">
                Installatie in 10 minuten
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
            1. Waarom Kiezen voor IPTV in België?
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            De klassieke aanbieders splitsen alles op — tv, sport, films — zodat
            je factuur snel oploopt tot 75€ à 100€/maand. IPTV bundelt alles in
            één abonnement voor een vaste, lage prijs. De voordelen:
          </p>
          <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6">
            <ul className="space-y-3 text-gray-300">
              <li>• <strong>Veel goedkoper:</strong> vanaf 9,99€ i.p.v. 75€+.</li>
              <li>• <strong>Alle voetbal inbegrepen:</strong> Jupiler Pro League, Champions League, Premier League, La Liga.</li>
              <li>• <strong>Geen decoder:</strong> werkt op je Smart TV, gsm, Firestick of pc.</li>
              <li>• <strong>Geen contract:</strong> maandelijks opzegbaar.</li>
              <li>• <strong>20.000+ zenders + 100.000+ films</strong> in HD/4K.</li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section id="vergelijking" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            2. Beste IPTV vs Telenet vs Proximus
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Criteria</th>
                  <th className="px-4 py-3 text-center text-white">IPTV2Belgie</th>
                  <th className="px-4 py-3 text-center text-white">Telenet</th>
                  <th className="px-4 py-3 text-center text-white">Proximus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">Prijs/maand</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">9,99€</td>
                  <td className="px-4 py-3 text-center text-red-400">~85€</td>
                  <td className="px-4 py-3 text-center text-red-400">~80€</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">Zenders</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">20.000+</td>
                  <td className="px-4 py-3 text-center">~120</td>
                  <td className="px-4 py-3 text-center">~150</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">Voetbal (JPL + Europa)</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">Inbegrepen</td>
                  <td className="px-4 py-3 text-center text-red-400">+15€ extra</td>
                  <td className="px-4 py-3 text-center text-red-400">+20€ extra</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">Decoder nodig</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">Nee</td>
                  <td className="px-4 py-3 text-center text-red-400">Ja (huur)</td>
                  <td className="px-4 py-3 text-center text-red-400">Ja (huur)</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">Contract</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">Geen</td>
                  <td className="px-4 py-3 text-center text-red-400">12-24 mnd</td>
                  <td className="px-4 py-3 text-center text-red-400">12-24 mnd</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Meer detail? Lees onze volledige{' '}
            <Link href="/blog/iptv-belgique-prix-comparatif-2025" className="text-sky-400 hover:text-sky-300 underline">
              prijsvergelijking IPTV vs Telenet vs Proximus
            </Link>
            .
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            🏆 De beste IPTV van België, vanaf 9,99€/maand
          </h3>
          <p className="text-white text-lg mb-6">
            20.000+ zenders, alle voetbal, direct actief. Stuur een bericht en
            kijk vandaag nog.
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

        {/* Section 3 */}
        <section id="krijg" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            3. Wat Krijg Je? Zenders, Voetbal &amp; Films
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src="/assets/sports/football/belgium/club brugge - champions league.png"
                alt="Beste IPTV België voetbal Jupiler Pro League"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image
                src="/assets/sports/football/belgium/standard de liège players on the pitch.png"
                alt="Standard de Liège via beste IPTV België"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div className="bg-gray-800 rounded-lg p-5">
              <p className="font-semibold text-sky-400 mb-2">🇧🇪 Belgische zenders</p>
              <p>Eén, Canvas, VTM, Play4/5, VIER, VIJF, La Une, RTL-TVI, Club RTL en meer.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-5">
              <p className="font-semibold text-sky-400 mb-2">⚽ Alle voetbal</p>
              <p>Jupiler Pro League, Champions League, Premier League, La Liga, Bundesliga.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-5">
              <p className="font-semibold text-sky-400 mb-2">🎬 Films &amp; series</p>
              <p>100.000+ titels (Netflix, Disney+, HBO-content) on demand.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-5">
              <p className="font-semibold text-sky-400 mb-2">🌍 Internationaal</p>
              <p>Zenders uit 100+ landen, in HD, Full HD en 4K.</p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mt-6">
            Vooral voetbal? Zie{' '}
            <Link href="/blog/jupiler-pro-league-kijken" className="text-sky-400 hover:text-sky-300 underline">
              Jupiler Pro League kijken 2026-27
            </Link>
            .
          </p>
        </section>

        {/* Section 4 */}
        <section id="waarop" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            4. Waarop Letten bij het Kiezen van IPTV?
          </h2>
          <div className="bg-gray-800 rounded-xl p-6">
            <ul className="space-y-3 text-gray-300">
              <li>• <strong className="text-white">Stabiliteit &amp; kwaliteit:</strong> HD/4K zonder buffering, ook tijdens matchen.</li>
              <li>• <strong className="text-white">Belgische zenders + voetbal:</strong> check dat JPL en Europees voetbal inbegrepen zijn.</li>
              <li>• <strong className="text-white">Support in het Nederlands:</strong> snelle hulp via WhatsApp.</li>
              <li>• <strong className="text-white">Geen contract:</strong> maandelijks opzegbaar, geen verrassingen.</li>
              <li>• <strong className="text-white">Directe activatie:</strong> codes binnen 10 minuten.</li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section id="installatie" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            5. Installatie in 10 Minuten
          </h2>
          <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6 mb-6">
            <ol className="space-y-3 text-gray-300">
              <li>1. Stuur ons een bericht via WhatsApp (2 minuten)</li>
              <li>2. Ontvang je toegangscodes binnen 10 minuten</li>
              <li>3. Download een gratis app (IPTV Smarters Pro)</li>
              <li>4. Vul je codes in op je Smart TV, Firestick of gsm</li>
              <li>5. Klaar! Kijk in HD/4K</li>
            </ol>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Geen technicus nodig. Zie{' '}
            <Link href="/blog/iptv-installeren-zonder-decoder-belgie" className="text-sky-400 hover:text-sky-300 underline">
              IPTV installeren zonder decoder
            </Link>
            .
          </p>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image src="/avatars/michel-avatar.jpeg" alt="Michel beste iptv belgië klant" width={60} height={60} className="rounded-full" />
                <div>
                  <p className="font-semibold text-white">Michel Vandenberghe</p>
                  <p className="text-gray-400 text-sm">Brugge</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Beste beslissing van het jaar. Alle voetbal + 20.000 zenders voor 9,99€. Ik bespaar ruim 900€ per jaar t.o.v. Telenet.&quot;
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image src="/avatars/sophie-avatar.jpeg" alt="Sophie beste iptv belgië klant" width={60} height={60} className="rounded-full" />
                <div>
                  <p className="font-semibold text-white">Sophie Dubois</p>
                  <p className="text-gray-400 text-sm">Gent</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;In 10 minuten geïnstalleerd op mijn Smart TV. Perfecte kwaliteit, nooit buffering. Waarom heb ik zo lang gewacht?&quot;
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">Wat is de beste IPTV in België in 2026?</h3>
              <p className="text-gray-300">Een IPTV met 20.000+ zenders, alle Belgische kanalen, alle voetbal en 100.000+ films in HD/4K, vanaf 9,99€/maand, zonder decoder of contract.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">Hoeveel kost een goede IPTV in België?</h3>
              <p className="text-gray-300">Vanaf 9,99€/maand, tegenover 75€ tot 100€ voor een volledig Telenet- of Proximus-pakket met sport.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">Werkt IPTV op mijn Smart TV of Firestick?</h3>
              <p className="text-gray-300">Ja, op Smart TV (Samsung, LG, Sony), Firestick, Android box, smartphone, tablet en pc. Je hebt enkel internet nodig.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-sky-900 to-emerald-900 rounded-xl p-10 text-center border-4 border-emerald-500">
          <h2 className="text-3xl font-bold text-white mb-4">Klaar voor de Beste IPTV van België?</h2>
          <p className="text-2xl text-emerald-300 mb-6">20.000+ zenders + alle voetbal voor 9,99€/maand</p>
          <p className="text-white text-lg mb-8">Direct actief • Geen decoder • Geen contract • Nederlandstalige support</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-500 text-black px-10 py-5 rounded-lg text-xl font-black hover:bg-emerald-400 transition-all duration-300 shadow-2xl">
            START VIA WHATSAPP →
          </a>
        </div>
      </div>
    </article>
  );
}
