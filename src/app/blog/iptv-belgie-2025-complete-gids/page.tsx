import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'IPTV België 2025: Complete Gids, Legaliteit en Beste Aanbieders',
  description:
    'Ontdek alles over IPTV in België in 2025. Complete gids over legaliteit, boetes, en hoe je de beste IPTV service kiest in volledige veiligheid.',
  keywords:
    'iptv belgie, iptv belgie legaal, iptv belgie boete, abonnement iptv belgie, streaming belgie, televisie internet belgie',
  openGraph: {
    title: 'IPTV België 2025: Complete Gids en Legaal',
    description:
      'De definitieve gids voor IPTV in België. Legaliteit, veiligheid, en beste services 2025.',
    type: 'article',
    locale: 'nl_BE',
    url: 'https://www.iptv2belgie.be/blog/iptv-belgie-2025-complete-gids',
    images: [
      {
        url: '/assets/hero%20section%20/living%20cozy%20room.png',
        width: 1200,
        height: 630,
        alt: 'IPTV België - Moderne televisie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV België 2025: Complete Gids',
    description:
      'Alles weten over IPTV in België: legaliteit, veiligheid, beste services',
  },
  alternates: {
    canonical: 'https://www.iptv2belgie.be/blog/iptv-belgie-2025-complete-gids',
    languages: {
      'nl-BE': 'https://www.iptv2belgie.be/blog/iptv-belgie-2025-complete-gids',
      'fr-BE':
        'https://www.iptv2belgie.be/blog/iptv-belgique-2025-guide-complet',
      en: 'https://www.iptv2belgie.be/blog/iptv-belgium-2025-complete-guide',
    },
  },
  other: {
    'article:published_time': '2025-01-15T10:00:00.000Z',
    'article:modified_time': '2025-01-15T10:00:00.000Z',
    'article:author': 'IPTV2Belgie',
    'article:section': 'Technologie',
    'article:tag': 'IPTV, België, Streaming, Televisie',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'IPTV België 2025: Complete Gids, Legaliteit en Beste Aanbieders',
  description:
    'Ontdek alles over IPTV in België in 2025. Complete gids over legaliteit, boetes, en hoe je de beste IPTV service kiest in volledige veiligheid.',
  image:
    'https://www.iptv2belgie.be/assets/hero%20section%20/living%20cozy%20room.png',
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
  datePublished: '2025-01-15T10:00:00.000Z',
  dateModified: '2025-01-15T10:00:00.000Z',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.iptv2belgie.be/blog/iptv-belgie-2025-complete-gids',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is IPTV legaal in België?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, IPTV als technologie is volledig legaal in België. Wat telt is de bron van de content. Legitieme IPTV services die uitzendrechten betalen zijn toegestaan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een boete krijgen voor het gebruik van IPTV?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Er zijn geen boetes voor het gebruik van legale IPTV services in België. Risico's bestaan alleen voor illegale services die gepirateeerde content uitzenden.",
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel kost een IPTV abonnement in België?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prijzen variëren van €6,90 tot €89 per maand afhankelijk van het aantal apparaten en abonnementsduur. Professionele services bieden meestal betere prijzen voor langere abonnementen.',
      },
    },
  ],
};

export default function IPTVBelgieGids() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="max-w-4xl mx-auto px-6 py-12 bg-slate-900 text-white">
        <nav className="mb-8 text-sm text-gray-400">
          <Link href="/" className="hover:text-sky-400 transition-colors">
            Home
          </Link>
          <span className="mx-2">→</span>
          <Link href="/blog" className="hover:text-sky-400 transition-colors">
            Blog
          </Link>
          <span className="mx-2">→</span>
          <span className="text-white">IPTV België 2025</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            IPTV België 2025: Complete Gids, Legaliteit en Beste Aanbieders
          </h1>

          <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
            <time dateTime="2025-01-15">15 januari 2025</time>
            <span>•</span>
            <span>12 min lezen</span>
            <span>•</span>
            <span>Door IPTV2Belgie</span>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed">
            IPTV transformeert de manier waarop Belgen televisie kijken in 2025.
            Ontdek alles wat je moet weten over legaliteit, kosten, en hoe je de
            beste IPTV service kiest in België zonder risico op boetes.
          </p>
        </header>

        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/assets/hero%20section%20/living%20cozy%20room.png"
            alt="Belgisch gezin dat IPTV bekijkt in een comfortabele woonkamer"
            width={800}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="bg-slate-800 rounded-2xl p-6 mb-12 border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 text-sky-400">
            Inhoudsopgave
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#wat-is-iptv"
                className="text-gray-300 hover:text-white transition-colors"
              >
                1. Wat is IPTV?
              </a>
            </li>
            <li>
              <a
                href="#legaliteit-belgie"
                className="text-gray-300 hover:text-white transition-colors"
              >
                2. Is IPTV legaal in België?
              </a>
            </li>
            <li>
              <a
                href="#boetes-risicos"
                className="text-gray-300 hover:text-white transition-colors"
              >
                3. Boetes en risico&apos;s: de waarheid
              </a>
            </li>
            <li>
              <a
                href="#voordelen-iptv"
                className="text-gray-300 hover:text-white transition-colors"
              >
                4. Voordelen van IPTV in 2025
              </a>
            </li>
            <li>
              <a
                href="#aanbieder-kiezen"
                className="text-gray-300 hover:text-white transition-colors"
              >
                5. Hoe een aanbieder kiezen
              </a>
            </li>
            <li>
              <a
                href="#prijzen-abonnementen"
                className="text-gray-300 hover:text-white transition-colors"
              >
                6. Prijzen en types abonnementen
              </a>
            </li>
            <li>
              <a
                href="#installatie-configuratie"
                className="text-gray-300 hover:text-white transition-colors"
              >
                7. Installatie en configuratie
              </a>
            </li>
            <li>
              <a
                href="#veelgestelde-vragen"
                className="text-gray-300 hover:text-white transition-colors"
              >
                8. Veelgestelde vragen
              </a>
            </li>
          </ul>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <section id="wat-is-iptv" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Wat is IPTV?</h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              <strong>IPTV (Internet Protocol Television)</strong> is een
              technologie die televisie-inhoud uitzendt via internet in plaats
              van traditionele methodes zoals kabel of satelliet. In België
              revolutioneert deze technologie de kijkervaring door meer
              flexibiliteit en keuze te bieden aan kijkers.
            </p>

            <div className="bg-gradient-to-r from-sky-500/10 to-emerald-500/10 rounded-xl p-6 border border-sky-500/20 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-sky-400">
                Belangrijkste voordelen van IPTV:
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>
                    <strong>Multi-apparaat toegang:</strong> TV, smartphone,
                    tablet, computer
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>
                    <strong>Content on demand:</strong> Meer dan 100,000 films
                    en series
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>
                    <strong>Internationale kanalen:</strong> Meer dan 20,000
                    wereldwijde kanalen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>
                    <strong>HD/4K kwaliteit:</strong> Superieure resolutie
                    gegarandeerd
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section id="legaliteit-belgie" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Is IPTV legaal in België?
            </h2>
            <p className="mb-6 text-gray-300 leading-relaxed">
              De vraag naar de legaliteit van IPTV in België houdt veel
              gebruikers bezig. Het antwoord is duidelijk:{' '}
              <strong>IPTV als technologie is volledig legaal in België</strong>
              . Wat de legaliteit bepaalt, is de bron van de uitgezonden
              content.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">
                  Legale IPTV ✓
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Services met officiële licenties</li>
                  <li>• Legaal geregistreerde aanbieders</li>
                  <li>• Content met verworven rechten</li>
                  <li>• Transparante facturering</li>
                  <li>• Professionele klantenservice</li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-400">
                  Illegale IPTV ✗
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Gepirateeerde content</li>
                  <li>• Abnormaal lage prijzen</li>
                  <li>• Geen klantenservice</li>
                  <li>• Instabiele servers</li>
                  <li>• Geen juridische garantie</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Legitieme IPTV aanbieders in België, zoals{' '}
              <Link
                href="/"
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                IPTV2Belgie
              </Link>
              , opereren binnen het juridische kader door auteursrechten te
              respecteren en transparante commerciële relaties met hun klanten
              te onderhouden.
            </p>
          </section>

          <section id="boetes-risicos" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Boetes en Risico&apos;s: De Waarheid over IPTV in België
            </h2>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                🛡️ Belangrijke Geruststelling
              </h3>
              <p className="text-gray-300 leading-relaxed">
                <strong>
                  Er zijn geen boetes voor het gebruik van legale IPTV services
                  in België.
                </strong>{' '}
                De Belgische autoriteiten richten zich op aanbieders van
                illegale content, niet op eindgebruikers van legitieme services.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Wat Zegt de Belgische Wet?
            </h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Volgens de Belgische wetgeving inzake auteursrechten is het
              gebruik van legale streaming services beschermd. Risico&apos;s
              bestaan alleen voor:
            </p>

            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">⚠️</span>
                <span>
                  Het gebruik van duidelijk illegale IPTV services
                  (gepirateeerde content)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">⚠️</span>
                <span>
                  Het herverdelen van auteursrechtelijk beschermde content
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">⚠️</span>
                <span>Commerciële exploitatie van content zonder licentie</span>
              </li>
            </ul>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-sky-400">
                Hoe Jezelf Beschermen?
              </h4>
              <p className="text-gray-300 mb-4">
                Om elk risico te vermijden, kies IPTV aanbieders die:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Een legaal geregistreerd bedrijf hebben</li>
                <li>• Professionele klantenservice bieden</li>
                <li>• Duidelijke algemene voorwaarden hebben</li>
                <li>• Officiële bankoverschrijvingen accepteren</li>
                <li>• Legale facturen verstrekken</li>
              </ul>
            </div>
          </section>

          <section id="voordelen-iptv" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Waarom Kiezen voor IPTV in België in 2025?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-sky-500/10 to-sky-600/5 rounded-xl p-6 border border-sky-500/20">
                <div className="text-sky-400 text-3xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Economisch
                </h3>
                <p className="text-gray-300">
                  Vanaf €6,90/maand, 10x goedkoper dan traditionele Belgische TV
                  abonnementen.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-xl p-6 border border-emerald-500/20">
                <div className="text-emerald-400 text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Multi-apparaten
                </h3>
                <p className="text-gray-300">
                  Kijk op TV, smartphone, tablet, computer. Tot 5 gelijktijdige
                  apparaten.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-xl p-6 border border-purple-500/20">
                <div className="text-purple-400 text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Wereldwijde Content
                </h3>
                <p className="text-gray-300">
                  Toegang tot Belgische, Franse, Nederlandse, Duitse en
                  internationale kanalen.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-white">
              Speciale Belgische Content
            </h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Kwaliteits IPTV services in België bevatten alle lokale content
              waar je van houdt:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-sky-400">
                  📺 Belgische Kanalen
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Alle VRT kanalen (Een, Canvas, Ketnet)</li>
                  <li>• VTM kanalen (VTM, Q2, Vitaya)</li>
                  <li>• Franstalige kanalen (RTBF, RTL-TVI)</li>
                  <li>• Regionale en lokale kanalen</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-emerald-400">
                  ⚽ Belgische Sport
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Jupiler Pro League live</li>
                  <li>• Belgisch nationaal team</li>
                  <li>• Belgische wielrennen en Tour de France</li>
                  <li>• Belgisch tennis (ATP, WTA)</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="aanbieder-kiezen" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Hoe de Beste IPTV Aanbieder Kiezen in België?
            </h2>

            <p className="mb-6 text-gray-300 leading-relaxed">
              Het kiezen van een betrouwbare IPTV aanbieder is cruciaal voor een
              optimale ervaring. Hier zijn de essentiële criteria om te
              evalueren:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-sky-400">
                  1. Legitimiteit en Transparantie
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Geregistreerd bedrijf met Belgisch BTW nummer</li>
                  <li>• Duidelijke algemene voorwaarden en privacybeleid</li>
                  <li>
                    • Toegankelijke klantenservice (telefoon, email, chat)
                  </li>
                  <li>• Veilige betalingen (bankoverschrijving, PayPal)</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">
                  2. Technische Kwaliteit
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Stabiele HD/4K streaming</li>
                  <li>• Servers in Europa (lagere latency)</li>
                  <li>• Gegarandeerde uptime &gt; 99%</li>
                  <li>• Applicatie compatibel met alle apparaten</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">
                  3. Content en Prijzen
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Brede selectie Belgische kanalen</li>
                  <li>• VOD met recente content</li>
                  <li>• Transparante prijzen zonder verborgen kosten</li>
                  <li>• Proefperiodes of geld-terug-garantie</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-500/10 to-emerald-500/10 rounded-xl p-6 border border-sky-500/20">
              <h3 className="text-xl font-semibold mb-4 text-white">
                🎯 Onze Aanbeveling
              </h3>
              <p className="text-gray-300 mb-4">
                <Link
                  href="/"
                  className="text-sky-400 hover:text-sky-300 transition-colors font-semibold"
                >
                  IPTV2Belgie
                </Link>{' '}
                voldoet aan al deze criteria met:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • Meer dan 20,000 kanalen inclusief alle Belgische content
                </li>
                <li>• Belgische klantenservice in het Nederlands en Frans</li>
                <li>• Veilige betaling via bankoverschrijving</li>
                <li>• 7 dagen geld-terug-garantie</li>
                <li>• Prijzen vanaf €6,90/maand</li>
              </ul>
            </div>
          </section>

          <section id="prijzen-abonnementen" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Prijzen en Types IPTV Abonnementen in België
            </h2>

            <p className="mb-6 text-gray-300 leading-relaxed">
              De Belgische markt biedt verschillende types IPTV abonnementen.
              Hier is een overzicht van de prijzen in 2025:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-slate-800 rounded-xl border border-slate-700">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-4 text-sky-400">
                      Type abonnement
                    </th>
                    <th className="text-left p-4 text-sky-400">
                      Gemiddelde prijs
                    </th>
                    <th className="text-left p-4 text-sky-400">Apparaten</th>
                    <th className="text-left p-4 text-sky-400">Voordelen</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-700">
                    <td className="p-4 font-medium">1 apparaat</td>
                    <td className="p-4 text-emerald-400">€6,90 - €15</td>
                    <td className="p-4">1 verbinding</td>
                    <td className="p-4">Economisch, ideaal voor beginners</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4 font-medium">2 apparaten</td>
                    <td className="p-4 text-emerald-400">€12 - €25</td>
                    <td className="p-4">2 verbindingen</td>
                    <td className="p-4">Perfect voor koppels</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4 font-medium">Familie (5 apparaten)</td>
                    <td className="p-4 text-emerald-400">€35 - €60</td>
                    <td className="p-4">5 verbindingen</td>
                    <td className="p-4">Complete gezinsoplossing</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Premium</td>
                    <td className="p-4 text-emerald-400">€60 - €89</td>
                    <td className="p-4">5+ verbindingen</td>
                    <td className="p-4">
                      Alles inbegrepen + prioriteitsservice
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                💡 Expert Advies
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Langdurige abonnementen (6-12 maanden) bieden meestal
                aanzienlijke kortingen. Bijvoorbeeld, een jaarabonnement kan de
                equivalent kosten van 8-10 maanden van een maandelijks
                abonnement.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/#pricing"
                className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-sky-500/30 transition-all text-lg"
              >
                Bekijk Onze IPTV Aanbiedingen →
              </Link>
            </div>
          </section>

          <section id="installatie-configuratie" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              IPTV Installatie en Configuratie
            </h2>

            <p className="mb-6 text-gray-300 leading-relaxed">
              Het installeren van een moderne IPTV service is eenvoudig en
              vereist geen bijzondere technische vaardigheden. Hier is het
              stap-voor-stap proces:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-sky-400">
                  📱 Op Smartphone/Tablet
                </h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <span>
                      Download de aanbevolen app (Smart IPTV, TiviMate)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <span>Voer de M3U URL in van je aanbieder</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <span>Configureer je voorkeuren (taal, favorieten)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-sky-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </span>
                    <span>Geniet van je programma&apos;s!</span>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-400">
                  📺 Op Smart TV
                </h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <span>Ga naar de app store van je TV</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <span>Installeer Smart IPTV of IPTV Smarters</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <span>Voeg je M3U playlist toe</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      4
                    </span>
                    <span>Organiseer je favoriete kanalen</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h4 className="text-lg font-semibold mb-3 text-purple-400">
                Optimale Configuratie
              </h4>
              <p className="text-gray-300 mb-4">
                Voor de beste IPTV ervaring in België:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • <strong>Internetverbinding:</strong> Minimum 10 Mbps voor
                  HD, 25 Mbps voor 4K
                </li>
                <li>
                  • <strong>Netwerk:</strong> Bekabelde verbinding aanbevolen
                  voor hoofd-TV
                </li>
                <li>
                  • <strong>Router:</strong> 5 GHz WiFi om interferentie te
                  verminderen
                </li>
                <li>
                  • <strong>Opslag:</strong> 2 GB vrije ruimte voor cache
                </li>
              </ul>
            </div>
          </section>

          <section id="veelgestelde-vragen" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Veelgestelde Vragen
            </h2>

            <div className="space-y-6">
              <details className="bg-slate-800 rounded-xl border border-slate-700">
                <summary className="p-6 cursor-pointer text-lg font-semibold text-sky-400 hover:text-sky-300 transition-colors">
                  Is IPTV legaal in België?
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>
                    Ja, IPTV als technologie is volledig legaal in België. Wat
                    telt is de bron van de content. Legitieme IPTV services die
                    uitzendrechten betalen zijn toegestaan en zonder risico.
                  </p>
                </div>
              </details>

              <details className="bg-slate-800 rounded-xl border border-slate-700">
                <summary className="p-6 cursor-pointer text-lg font-semibold text-sky-400 hover:text-sky-300 transition-colors">
                  Kan ik een boete krijgen voor het gebruik van IPTV?
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>
                    Er zijn geen boetes voor het gebruik van legale IPTV
                    services in België. Risico&apos;s bestaan alleen voor
                    illegale services die gepirateeerde content uitzenden. Kies
                    een legitieme aanbieder en je hebt geen problemen.
                  </p>
                </div>
              </details>

              <details className="bg-slate-800 rounded-xl border border-slate-700">
                <summary className="p-6 cursor-pointer text-lg font-semibold text-sky-400 hover:text-sky-300 transition-colors">
                  Hoeveel kost een IPTV abonnement in België?
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>
                    Prijzen variëren van €6,90 tot €89 per maand afhankelijk van
                    het aantal apparaten en abonnementsduur. Professionele
                    services bieden meestal betere prijzen voor langere
                    abonnementen.
                  </p>
                </div>
              </details>

              <details className="bg-slate-800 rounded-xl border border-slate-700">
                <summary className="p-6 cursor-pointer text-lg font-semibold text-sky-400 hover:text-sky-300 transition-colors">
                  Welke internetverbinding heb ik nodig voor IPTV?
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>
                    Een verbinding van minimum 10 Mbps wordt aanbevolen voor
                    stabiele HD streaming. Voor 4K heb je minstens 25 Mbps
                    nodig. De meeste moderne Belgische verbindingen zijn ruim
                    voldoende.
                  </p>
                </div>
              </details>

              <details className="bg-slate-800 rounded-xl border border-slate-700">
                <summary className="p-6 cursor-pointer text-lg font-semibold text-sky-400 hover:text-sky-300 transition-colors">
                  Kan ik Belgische kanalen kijken met IPTV?
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>
                    Absoluut! Goede IPTV services bevatten alle populaire
                    Belgische kanalen: VRT (Een, Canvas), VTM, RTL-TVI, RTBF, en
                    regionale kanalen. Het is vaak zelfs uitgebreider dan
                    traditionele pakketten.
                  </p>
                </div>
              </details>

              <details className="bg-slate-800 rounded-xl border border-slate-700">
                <summary className="p-6 cursor-pointer text-lg font-semibold text-sky-400 hover:text-sky-300 transition-colors">
                  Hoe herken ik een betrouwbare IPTV service?
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>
                    Een betrouwbare service heeft: een geregistreerd bedrijf,
                    toegankelijke klantenservice, veilige betalingen
                    (bankoverschrijving), duidelijke voorwaarden, en prijzen die
                    overeenkomen met de markt (wantrouw als het te goedkoop is).
                  </p>
                </div>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-2xl p-8 text-center border border-sky-500/30">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Klaar om IPTV Veilig te Ontdekken?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Sluit je aan bij meer dan 3,278 tevreden klanten die al genieten
                van onze legale IPTV services in België.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/#pricing"
                  className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-sky-500/30 transition-all text-lg"
                >
                  Bekijk Onze Abonnementen
                </Link>
                <Link
                  href="https://wa.me/33773436514"
                  target="_blank"
                  className="bg-slate-800 text-white font-bold py-4 px-8 rounded-xl border border-slate-600 hover:bg-slate-700 transition-all text-lg"
                >
                  Stel Een Vraag
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>7 dagen garantie
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Nederlandse support
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  100% legaal
                </span>
              </div>
            </div>
          </section>
        </div>

        <footer className="border-t border-slate-700 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              <p>Laatst bijgewerkt: 15 januari 2025</p>
              <p>Door het IPTV2Belgie team</p>
            </div>

            <div className="flex gap-4">
              <Link
                href="/blog"
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                ← Terug naar blog
              </Link>
              <Link
                href="/"
                className="text-sky-400 hover:text-sky-300 transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}
