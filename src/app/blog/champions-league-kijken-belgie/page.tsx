import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Champions League Kijken België 2026-27: Alle Wedstrijden vanaf 9,99€',
  description:
    '🏆 Kijk álle Champions League-wedstrijden 2026-27 live in 4K — Club Brugge + alle Europese toppers — vanaf 9,99€/maand. Start 8 september. Goedkoper dan DAZN & Play Sports. ✅',
  keywords:
    'champions league kijken, champions league kijken belgië, champions league belgië 2026-27, club brugge champions league kijken, champions league live stream belgië, europees voetbal kijken',
  openGraph: {
    title: 'Champions League Kijken België 2026-27: Alle Wedstrijden in 4K',
    description:
      'Alle Champions League-wedstrijden live vanaf 9,99€/maand. Club Brugge + alle Europese toppers, start 8 september.',
    locale: 'nl_BE',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iptv2belgie.be/blog/champions-league-kijken-belgie',
  },
};

export default function ChampionsLeagueKijkenBlog() {
  const structuredData = {
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Champions League Kijken België 2026-27: Alle Wedstrijden',
        description:
          'Waar en hoe je alle Champions League-wedstrijden 2026-27 live kan kijken in België, vanaf 9,99€/maand.',
        datePublished: '2026-08-19T00:00:00+02:00',
        dateModified: '2026-08-19T00:00:00+02:00',
        image: 'https://www.iptv2belgie.be/og-image.jpg',
        author: { '@type': 'Organization', name: 'IPTV2Belgie', url: 'https://www.iptv2belgie.be' },
        publisher: {
          '@type': 'Organization',
          name: 'IPTV2Belgie',
          logo: { '@type': 'ImageObject', url: 'https://www.iptv2belgie.be/favicon.svg' },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://www.iptv2belgie.be/blog/champions-league-kijken-belgie',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wanneer begint de Champions League 2026-27?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'De ligafase van de Champions League 2026-27 begint op 8 september 2026. Er zijn 8 speeldagen tot januari 2027, met daarna de knock-outfase.',
            },
          },
          {
            '@type': 'Question',
            name: 'Waar kan ik de Champions League kijken in België?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'De Champions League wordt uitgezonden via betaalzenders. Met een IPTV-abonnement kijk je alle wedstrijden, inclusief Club Brugge en alle Europese toppers, in HD/4K vanaf 9,99€/maand, zonder decoder.',
            },
          },
          {
            '@type': 'Question',
            name: 'Speelt Club Brugge in de Champions League 2026-27?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja. Club Brugge plaatste zich als Belgisch kampioen rechtstreeks voor de ligafase van de Champions League 2026-27.',
            },
          },
        ],
      },
    ],
  };

  const waLink =
    'https://wa.me/33773436514?text=' +
    encodeURIComponent('Hallo! Ik wil de Champions League live kijken met IPTV. Kan je me meer info geven?');

  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950/40 to-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-sky-400 font-semibold mb-4 uppercase tracking-wide">
            Seizoen 2026-27 · Start 8 september · Bijgewerkt 19 augustus 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Champions League Kijken in België 2026-27
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Club Brugge + alle Europese toppers, elke speeldag live
          </p>
          <p className="text-2xl md:text-3xl text-emerald-400 font-bold mb-8">
            Alle wedstrijden in 4K vanaf 9,99€/maand
          </p>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl">
            Bekijk alle wedstrijden →
          </a>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <section className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">De Champions League is terug.</strong> Op 8 september 2026 begint
            de nieuwe ligafase, en <strong className="text-white">Club Brugge</strong> is er weer bij, samen
            met alle Europese grootmachten: Real Madrid, Barcelona, Bayern, PSG, Manchester City en meer. De
            vraag die elke voetbalfan zich stelt:{' '}
            <strong className="text-white">waar kan ik alle wedstrijden betaalbaar kijken?</strong>
          </p>
          <div className="bg-gradient-to-r from-indigo-600/20 to-sky-600/20 border border-indigo-500 rounded-lg p-6">
            <p className="text-white text-lg">
              🏆 <strong>Kort antwoord:</strong> met een IPTV-abonnement kijk je álle
              Champions League-wedstrijden — plus de Jupiler Pro League en de Premier League — in HD/4K vanaf{' '}
              <strong className="text-emerald-400">9,99€/maand</strong>, zonder decoder.
            </p>
          </div>
        </section>

        {/* TOC */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">In deze gids:</h2>
          <ol className="space-y-2 text-gray-300">
            <li>1. <a href="#wanneer" className="text-sky-400 hover:text-sky-300">Wanneer begint de Champions League 2026-27?</a></li>
            <li>2. <a href="#waar" className="text-sky-400 hover:text-sky-300">Waar kan je de Champions League kijken?</a></li>
            <li>3. <a href="#brugge" className="text-sky-400 hover:text-sky-300">Club Brugge in de Champions League</a></li>
            <li>4. <a href="#alternatief" className="text-sky-400 hover:text-sky-300">Alle wedstrijden via IPTV vanaf 9,99€</a></li>
            <li>5. <a href="#installatie" className="text-sky-400 hover:text-sky-300">Zo kijk je in 10 minuten</a></li>
            <li>6. <a href="#faq" className="text-sky-400 hover:text-sky-300">Veelgestelde vragen</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="wanneer" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">1. Wanneer Begint de Champions League 2026-27?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            De <strong className="text-white">ligafase start op 8 september 2026</strong>. Net als vorig
            seizoen spelen 36 clubs elk 8 wedstrijden in de ligafase, die loopt tot januari 2027. Daarna volgen
            de knock-outrondes, met de finale in het voorjaar.
          </p>
          <div className="bg-gray-800 rounded-xl p-6">
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">Speeldag 1:</strong> 8-10 september 2026</li>
              <li>• <strong className="text-white">Ligafase:</strong> 8 speeldagen tot eind januari 2027</li>
              <li>• <strong className="text-white">Knock-outfase:</strong> vanaf februari 2027</li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section id="waar" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">2. Waar Kan Je de Champions League Kijken?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            De Champions League wordt in België uitgezonden via betaalzenders en sportpakketten. Het probleem:
            die pakketten zijn duur, en vaak zie je niet álle wedstrijden zonder meerdere abonnementen te
            combineren. Bovendien werd voetbal dit seizoen nog eens duurder.
          </p>
          <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
            <p className="text-yellow-300 font-semibold">
              💡 Wil je élke wedstrijd zien — Club Brugge én de andere toppers — dan is één IPTV-abonnement de
              goedkoopste en eenvoudigste oplossing.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="brugge" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">3. Club Brugge in de Champions League</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="relative h-40 rounded-lg overflow-hidden">
              <Image src="/assets/sports/football/belgium/club brugge - champions league.png"
                alt="Club Brugge Champions League kijken 2026-27" fill className="object-cover" />
            </div>
            <div className="relative h-40 rounded-lg overflow-hidden bg-gradient-to-br from-indigo-900 to-sky-900 flex items-center justify-center">
              <span className="text-white font-bold text-lg text-center px-4">🏆 Alle Europese avonden live</span>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Club Brugge</strong> plaatste zich als Belgisch kampioen rechtstreeks
            voor de ligafase. Met een IPTV-abonnement mis je geen enkele wedstrijd van blauw-zwart in Europa, én
            je ziet alle andere affiches van Real Madrid, Barcelona, Bayern, PSG en co.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-sky-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">🏆 Alle Champions League-avonden live, vanaf 9,99€/maand</h3>
          <p className="text-white text-lg mb-6">Geen decoder, geen contract. Stuur een bericht en je kijkt de volgende speeldag live.</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300">
            Start via WhatsApp →
          </a>
        </div>

        {/* Section 4 */}
        <section id="alternatief" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">4. Alle Wedstrijden via IPTV vanaf 9,99€</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Met een IPTV-abonnement kijk je <strong className="text-white">alle</strong> Champions
            League-wedstrijden, plus de Jupiler Pro League, Premier League en La Liga, in één abonnement:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-indigo-600 to-sky-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Wat je krijgt</th>
                  <th className="px-4 py-3 text-center text-white">Klassieke pakketten</th>
                  <th className="px-4 py-3 text-center text-white">IPTV2Belgie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700"><td className="px-4 py-3 text-white font-semibold">Alle Champions League-wedstrijden</td><td className="px-4 py-3 text-center text-red-400">Meerdere abo's</td><td className="px-4 py-3 text-center text-emerald-400">✓</td></tr>
                <tr className="hover:bg-gray-700"><td className="px-4 py-3 text-white font-semibold">Jupiler Pro League</td><td className="px-4 py-3 text-center text-red-400">+ extra</td><td className="px-4 py-3 text-center text-emerald-400">✓</td></tr>
                <tr className="hover:bg-gray-700"><td className="px-4 py-3 text-white font-semibold">Premier League &amp; La Liga</td><td className="px-4 py-3 text-center text-red-400">+ extra</td><td className="px-4 py-3 text-center text-emerald-400">✓</td></tr>
                <tr className="hover:bg-gray-700"><td className="px-4 py-3 text-white font-semibold">Decoder nodig</td><td className="px-4 py-3 text-center text-red-400">Ja</td><td className="px-4 py-3 text-center text-emerald-400">Nee</td></tr>
                <tr className="hover:bg-gray-700 font-bold text-lg"><td className="px-4 py-4 text-white">Prijs/maand</td><td className="px-4 py-4 text-center text-red-400">35€+</td><td className="px-4 py-4 text-center text-emerald-400">9,99€</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed mt-6">
            Ook de Belgische competitie volgen? Lees{' '}
            <Link href="/blog/jupiler-pro-league-kijken" className="text-sky-400 hover:text-sky-300 underline">
              Jupiler Pro League kijken 2026-27
            </Link>{' '}
            of ontdek de{' '}
            <Link href="/blog/beste-iptv-belgie-2026" className="text-sky-400 hover:text-sky-300 underline">
              beste IPTV van België
            </Link>.
          </p>
        </section>

        {/* Section 5 */}
        <section id="installatie" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">5. Zo Kijk Je in 10 Minuten</h2>
          <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6">
            <ol className="space-y-3 text-gray-300">
              <li>1. Stuur ons een bericht via WhatsApp (2 minuten)</li>
              <li>2. Ontvang je toegangscodes binnen 10 minuten</li>
              <li>3. Download een gratis app (IPTV Smarters Pro)</li>
              <li>4. Vul je codes in op je Smart TV, Firestick of gsm</li>
              <li>5. Klaar! Kijk de Champions League in 4K</li>
            </ol>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 mb-4">
              <Image src="/avatars/michel-avatar.jpeg" alt="Michel Champions League IPTV klant" width={60} height={60} className="rounded-full" />
              <div>
                <p className="font-semibold text-white">Michel Vandenberghe</p>
                <p className="text-gray-400 text-sm">Brugge</p>
                <div className="text-yellow-400">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-300 italic">
              &quot;Ik volg Club Brugge in Europa én alle andere topaffiches. Vroeger had ik daar 3 abonnementen
              voor nodig. Nu alles voor 9,99€. Perfecte 4K-kwaliteit, nooit buffering.&quot;
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">Wanneer begint de Champions League 2026-27?</h3>
              <p className="text-gray-300">De ligafase begint op 8 september 2026, met 8 speeldagen tot januari 2027.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">Waar kan ik de Champions League kijken in België?</h3>
              <p className="text-gray-300">Via betaalzenders, of met één IPTV-abonnement waarmee je alle wedstrijden (Club Brugge + alle toppers) in HD/4K ziet vanaf 9,99€/maand.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">Werkt het op mijn Smart TV of Firestick?</h3>
              <p className="text-gray-300">Ja, op Smart TV, Firestick, Android box, smartphone, tablet en pc. Je hebt enkel internet nodig.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-indigo-900 to-sky-900 rounded-xl p-10 text-center border-4 border-indigo-500">
          <h2 className="text-3xl font-bold text-white mb-4">Kijk Elke Champions League-avond Live</h2>
          <p className="text-2xl text-emerald-300 mb-6">Alle wedstrijden + alle competities voor 9,99€/maand</p>
          <p className="text-white text-lg mb-8">Direct actief • Geen decoder • Geen contract • Nederlandstalige support</p>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="inline-block bg-emerald-500 text-black px-10 py-5 rounded-lg text-xl font-black hover:bg-emerald-400 transition-all duration-300 shadow-2xl">
            START VIA WHATSAPP →
          </a>
        </div>
      </div>
    </article>
  );
}
