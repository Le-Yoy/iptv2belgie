import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IPTV Zonder Decoder 2025: Pieter Bespaart €180/jaar | IPTV2Belgie',
  description:
    'Waarom betaalt u nog €15/maand voor een decoder? Pieter uit Antwerpen bespaart nu €180/jaar. Installatie op Smart TV in 5 minuten.',
  keywords:
    'iptv zonder decoder, iptv installeren smart tv, geen decoder nodig, iptv belgie zonder box, telenet decoder opzeggen',
  openGraph: {
    title: 'Stop Met €15/maand Decoder Huur - Installeer IPTV Direct',
    description:
      'Het verhaal van Pieter die zijn Telenet decoder terugbracht en nu €180/jaar bespaart.',
    locale: 'nl_BE',
    type: 'article',
  },
  alternates: {
    canonical:
      'https://www.iptv2belgie.be/blog/iptv-installeren-zonder-decoder-belgie',
  },
};

export default function IPTVZonderDecoder() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Hoe Pieter uit Antwerpen €180/jaar Bespaart Zonder Decoder',
        description:
          'Complete gids voor IPTV installeren zonder dure decoder van Telenet of Proximus.',
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
            'https://www.iptv2belgie.be/blog/iptv-installeren-zonder-decoder-belgie',
        },
      },
      {
        '@type': 'HowTo',
        name: 'IPTV installeren zonder decoder in 5 minuten',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '0',
        },
        totalTime: 'PT5M',
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Smart TV of smartphone',
          },
          {
            '@type': 'HowToSupply',
            name: 'Internet verbinding',
          },
        ],
        step: [
          {
            '@type': 'HowToStep',
            name: 'Open app store op uw TV',
            text: 'Ga naar de app store van uw Smart TV',
          },
          {
            '@type': 'HowToStep',
            name: 'Download IPTV Smarters Pro',
            text: 'Zoek en installeer de gratis app',
          },
          {
            '@type': 'HowToStep',
            name: 'Login met IPTV2Belgie codes',
            text: 'Voer de ontvangen gegevens in',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Hoeveel bespaart Pieter echt zonder decoder?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pieter bespaart €15/maand aan Telenet decoder huur, dat is €180/jaar. Over 5 jaar is dat €900!',
            },
          },
          {
            '@type': 'Question',
            name: 'Werkt mijn Samsung TV uit 2019 zonder decoder?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja! Elke Smart TV van Samsung, LG, Sony of Philips na 2018 werkt perfect zonder decoder.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik eerst testen voor ik mijn decoder terugbreng?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Zeker! Test een maand voor €4.99. Eens overtuigd, breng je decoder terug en bespaar €15/maand.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe installeer ik op mijn Smart TV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Open de app store, zoek IPTV Smarters Pro, installeer, voer codes in. Maximaal 5 minuten!',
            },
          },
          {
            '@type': 'Question',
            name: 'Welke internetsnelheid heb ik nodig?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Minimum 10 Mbps voor HD, 25 Mbps voor 4K. De meeste Belgische verbindingen zijn ruim voldoende.',
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
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-8 mb-8">
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              <span className="text-3xl font-bold text-white block mb-2">
                Vrijdagavond, 20:30.
              </span>
              Pieter Janssens, accountmanager uit Antwerpen, keek naar zijn
              Telenet factuur.
              <span className="text-yellow-400 font-bold text-2xl">
                {' '}
                €15 per maand voor een decoder.
              </span>
            </p>
            <p className="text-xl text-gray-200 leading-relaxed">
              Zijn vrouw Emma rekende het uit: &quot;Schat, dat is €180 per jaar
              voor een doos die niet eens van ons is!&quot; De match Club Brugge
              tegen Anderlecht begon over een kwartier, vrienden kwamen kijken,
              en Pieter nam een beslissing die alles zou veranderen...
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">
            IPTV Installeren
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 block mt-2">
              Zonder Decoder
            </span>
            <span className="text-2xl md:text-3xl mt-4 text-gray-200 block">
              Pieters Methode om €180/jaar te Besparen
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/#pricing"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-xl transform hover:scale-105"
            >
              Zie hoe Pieter het deed →
            </Link>
            <Link
              href="#volledig-verhaal"
              className="inline-block bg-gray-700/80 backdrop-blur text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-600/80 transition-all duration-300"
            >
              Lees zijn verhaal
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12 text-center">
            <div className="bg-black/40 backdrop-blur rounded-lg p-4">
              <p className="text-4xl font-bold text-white">15,832</p>
              <p className="text-sm text-gray-300 mt-1">
                Belgen zonder decoder
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur rounded-lg p-4">
              <p className="text-4xl font-bold text-green-400">€180</p>
              <p className="text-sm text-gray-300 mt-1">Bespaard/jaar</p>
            </div>
            <div className="bg-black/40 backdrop-blur rounded-lg p-4">
              <p className="text-4xl font-bold text-white">5 min</p>
              <p className="text-sm text-gray-300 mt-1">Installatie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* The Complete Story */}
        <section id="volledig-verhaal" className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Het Volledige Verhaal van Pieter
          </h2>

          <div className="bg-gray-800/50 rounded-xl p-8 space-y-6">
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Het Keerpunt
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Pieter betaalde{' '}
                <span className="text-white font-bold text-xl">
                  €89,95 per maand
                </span>{' '}
                bij Telenet. €74,95 voor het TV-pakket + €15 voor de decoder
                huur. &quot;Dit is legale diefstal!&quot; zei hij tegen Emma
                terwijl hij de factuur toonde.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                &quot;We betalen voor Play Sports dat we amper kijken, Film
                kanalen die we nooit gebruiken, en €180 per jaar alleen voor het
                recht om hun doos te gebruiken!&quot;
              </p>
            </div>

            <div className="bg-orange-900/20 rounded-lg p-6">
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Emma, altijd praktisch, pakte haar telefoon: &quot;Kijk, onze
                buurman Frank gebruikt iets dat IPTV heet. Geen decoder, gewoon
                een app op zijn Samsung TV.&quot;
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Pieter was sceptisch. &quot;Dat zal wel ingewikkeld zijn, ik ben
                geen IT&apos;er! En is dat wel legaal? De kwaliteit zal wel
                slecht zijn...&quot;
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-3">
                Het Beslissende Moment
              </h4>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                &quot;Als Frank het kan, waarom wij niet?&quot; drong Emma aan.
                Frank, 65 jaar, gepensioneerd bij de haven, is niet bepaald een
                computer expert. Toch keek hij alle matchen van de Rode Duivels
                in 4K, zonder problemen, zonder decoder.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                &quot;Hij bespaart €15 per maand en kijkt op zijn TV, tablet,
                zelfs op zijn telefoon in de tuin!&quot;
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                De 5-Minuten Installatie
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                <span className="text-white font-bold">20:35.</span> Pieter nam
                de beslissing. &quot;OK, we proberen het. Maar als het moeilijk
                is, stoppen we.&quot;
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Emma startte de timer op haar telefoon, half spottend. Pieter
                opende de app store op hun Samsung TV, zocht &quot;IPTV Smarters
                Pro&quot;, klikte installeren. De app downloadde in 30 seconden.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Hij voerde de codes in die hij per email van IPTV2Belgie had
                ontvangen.
                <span className="text-green-400 font-bold">
                  Totale tijd: 4 minuten en 12 seconden.
                </span>
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                De match begon. Het beeld was perfect, in 4K. Geen lag, geen
                onderbrekingen. Beter dan hun Telenet decoder.
              </p>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-3">
                De Reactie van de Vrienden
              </h4>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Jeroen en Lisa kwamen net binnen. &quot;Nieuwe decoder?&quot;
                vroeg Jeroen toen hij de andere interface zag.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Pieter glimlachte, pakte de afstandsbediening, en toonde: VTM,
                Canvas, VRT, Nederlandse zenders, Duitse, Franse, zelfs
                Amerikaanse.
                <span className="text-white font-bold">
                  Meer dan 50.000 kanalen.
                </span>
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                &quot;En het beste,&quot; zei Pieter, &quot;ik betaal €9.99 in
                plaats van €89.95. Ik bespaar €80 per maand!&quot;
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">
              Wil je meer weten over onze prijzen en hoe je kunt besparen?
              <Link
                href="/blog/iptv-belgie-proximus-telenet-alternatief"
                className="text-orange-400 hover:text-orange-300 font-semibold"
              >
                Lees onze complete vergelijking met Proximus en Telenet →
              </Link>
            </p>
            <Link
              href="/#pricing"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-xl"
            >
              Begin uw eigen verhaal →
            </Link>
          </div>
        </section>

        {/* Problem Deep Dive */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Het Decoder Schandaal in België
          </h2>

          <div className="bg-red-900/20 border border-red-500 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-red-400 mb-6">
              Wat Telenet & Proximus U Niet Vertellen
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-red-800/50">
                <span className="text-lg text-gray-300">
                  Decoder huur Telenet
                </span>
                <span className="text-xl text-white font-bold">€15/maand</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-red-800/50">
                <span className="text-lg text-gray-300">2de decoder</span>
                <span className="text-xl text-white font-bold">
                  €7,50/maand
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-red-800/50">
                <span className="text-lg text-gray-300">Per jaar</span>
                <span className="text-xl text-red-400 font-bold">
                  €180 - €270
                </span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-red-800/50">
                <span className="text-lg text-gray-300">Over 5 jaar</span>
                <span className="text-2xl text-red-400 font-bold">
                  €900 - €1.350!
                </span>
              </div>
              <div className="bg-red-800/30 p-4 rounded-lg mt-6">
                <p className="text-xl text-yellow-400 font-bold text-center">
                  U kunt 15 nieuwe decoders kopen met dat geld!
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                De Werkelijke Cijfers
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  <span className="text-gray-300">
                    Een decoder kost €100 om te maken
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  <span className="text-gray-300">
                    U betaalt 9x de waarde in 5 jaar
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  <span className="text-gray-300">
                    91% van de Belgen betaalt decoder huur
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">→</span>
                  <span className="text-gray-300">
                    Winst providers: €600M/jaar
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">
                Schokkende Onthulling
              </h4>
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="text-gray-300 italic mb-3">
                  &quot;Ik werkte bij Telenet. De winstmarge op decoders is
                  gigantisch. We kregen instructies om nooit te vermelden dat
                  TVs zonder decoder kunnen werken.&quot;
                </p>
                <p className="text-sm text-gray-400">
                  - Ex-medewerker (anoniem)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg p-6 text-center">
            <p className="text-2xl text-white font-bold mb-2">
              Bereken Uw Verlies
            </p>
            <p className="text-lg text-gray-300">
              Heeft u al 3 jaar een decoder?
              <span className="text-red-400 font-bold text-xl">
                {' '}
                €540 al verloren
              </span>
            </p>
            <Link
              href="/blog/iptv-belgie-2025-complete-gids"
              className="text-orange-400 hover:text-orange-300 text-sm mt-2 inline-block"
            >
              Lees meer over waarom dit legaal is →
            </Link>
          </div>
        </section>

        {/* Detailed Installation Guide */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Stap-voor-Stap: De Pieter Methode
          </h2>

          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xl text-white font-bold">20:35</span>
              <div className="flex-1 mx-4 h-3 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl text-white font-bold">20:39</span>
            </div>
            <p className="text-center text-xl text-gray-200">
              Pieter installeerde alles terwijl zijn vrienden hun Jupiler
              dronken
            </p>
          </div>

          {/* Smart TV Installation */}
          <div className="mb-12">
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6">
                <h3 className="text-2xl font-bold text-white">
                  Installatie op Smart TV (Pieters Methode)
                </h3>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-orange-400 mb-4">
                      Samsung Smart TV
                    </h4>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          1
                        </span>
                        <div>
                          <p className="text-white">Druk op Home knop</p>
                          <p className="text-gray-400 text-sm">
                            Het huisje op uw afstandsbediening
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          2
                        </span>
                        <div>
                          <p className="text-white">Open Apps of Smart Hub</p>
                          <p className="text-gray-400 text-sm">
                            Het icoontje met 4 vierkantjes
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          3
                        </span>
                        <div>
                          <p className="text-white">
                            Zoek &quot;IPTV Smarters Pro&quot;
                          </p>
                          <p className="text-gray-400 text-sm">
                            Gebruik het vergrootglas
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          4
                        </span>
                        <div>
                          <p className="text-white">Klik Installeren</p>
                          <p className="text-gray-400 text-sm">
                            Gratis applicatie
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          ✓
                        </span>
                        <div>
                          <p className="text-white font-bold">
                            Voer uw IPTV2Belgie codes in
                          </p>
                          <p className="text-gray-400 text-sm">
                            Direct ontvangen per email
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-orange-400 mb-4">
                      LG Smart TV
                    </h4>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          1
                        </span>
                        <div>
                          <p className="text-white">
                            Home knop afstandsbediening
                          </p>
                          <p className="text-gray-400 text-sm">
                            Hoofdmenu verschijnt
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          2
                        </span>
                        <div>
                          <p className="text-white">LG Content Store</p>
                          <p className="text-gray-400 text-sm">De app winkel</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          3
                        </span>
                        <div>
                          <p className="text-white">Zoek → IPTV Smarters</p>
                          <p className="text-gray-400 text-sm">
                            Type met virtueel toetsenbord
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          4
                        </span>
                        <div>
                          <p className="text-white">Automatische installatie</p>
                          <p className="text-gray-400 text-sm">
                            30 seconden max
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 text-sm">
                          ✓
                        </span>
                        <div>
                          <p className="text-white font-bold">
                            Login met uw codes
                          </p>
                          <p className="text-gray-400 text-sm">En klaar!</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bg-green-900/30 border border-green-500 rounded-lg p-6 mt-6">
                  <p className="text-green-400 font-bold text-lg mb-2">
                    Pro Tip van Pieter:
                  </p>
                  <p className="text-gray-300">
                    &quot;Neem een foto van de codes met je smartphone. Veel
                    makkelijker om in te typen met de afstandsbediening. Emma
                    leerde me deze truc!&quot;
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
                  Op Mobiel & Tablet (Emma Kijkt in de Keuken)
                </h3>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-300 mb-6">
                  Emma kijkt graag naar haar series tijdens het koken. Pieter
                  installeerde de app op haar iPad in exact 1 minuut.
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
                      <li>1. Open de App Store</li>
                      <li>2. Zoek &quot;IPTV Smarters Pro&quot;</li>
                      <li>3. Tik &quot;Ophalen&quot; (gratis)</li>
                      <li>4. Open de app</li>
                      <li>5. Kies &quot;Xtream Codes&quot;</li>
                      <li>6. Voer uw gegevens in</li>
                      <li className="text-green-400 font-bold">
                        ✓ Direct kijken!
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
                      <li>2. Zoek &quot;IPTV Smarters&quot;</li>
                      <li>3. Installeren (groene knop)</li>
                      <li>4. Openen</li>
                      <li>5. Login Xtream Codes</li>
                      <li>6. Uw IPTV2Belgie codes</li>
                      <li className="text-green-400 font-bold">
                        ✓ 50.000+ kanalen!
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="bg-purple-900/30 rounded-lg p-6 mt-6">
                  <p className="text-purple-300 italic">
                    &quot;Nu kijk ik naar Familie terwijl ik kook, en Pieter kan
                    voetbal kijken in de living. Geen ruzie meer!&quot; - Emma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Vergelijking in Detail
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-orange-600 to-red-600">
                  <th className="px-6 py-4 text-left text-white font-bold">
                    Criterium
                  </th>
                  <th className="px-6 py-4 text-center text-white font-bold">
                    IPTV2Belgie
                  </th>
                  <th className="px-6 py-4 text-center text-white font-bold">
                    Telenet
                  </th>
                  <th className="px-6 py-4 text-center text-white font-bold">
                    Proximus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Maandprijs
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold text-lg">
                    €9.99
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    €74.95 + €15
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    €79.99 + €15
                  </td>
                </tr>
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Decoder huur
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    €0
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    €15/maand
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    €15/maand
                  </td>
                </tr>
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Installatie
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    5 minuten
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    Technieker + €59
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    Technieker + €59
                  </td>
                </tr>
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Aantal toestellen
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    5 tegelijk
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    1 per decoder
                  </td>
                  <td className="px-6 py-4 text-center text-red-400">
                    1 per decoder
                  </td>
                </tr>
                <tr className="hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4 text-gray-300 font-medium">
                    Kanalen
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold">
                    50.000+
                  </td>
                  <td className="px-6 py-4 text-center text-yellow-400">200</td>
                  <td className="px-6 py-4 text-center text-yellow-400">150</td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="px-6 py-4 text-white font-bold">
                    JAARLIJKS TOTAAL
                  </td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold text-xl">
                    €119.88
                  </td>
                  <td className="px-6 py-4 text-center text-red-400 font-bold text-xl">
                    €1,079.40
                  </td>
                  <td className="px-6 py-4 text-center text-red-400 font-bold text-xl">
                    €1,139.88
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-6 mt-6 text-center">
            <p className="text-2xl text-white font-bold">
              Besparing met IPTV2Belgie:
              <span className="text-green-400 text-3xl">
                {' '}
                €960 - €1,020 per jaar!
              </span>
            </p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Zij Brachten Hun Decoder Terug
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl mr-4">
                  AV
                </div>
                <div>
                  <p className="text-white font-bold text-lg">An Verhoeven</p>
                  <p className="text-gray-400">Gent, Sint-Pieters</p>
                  <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                &quot;Mijn man Jan was heel sceptisch. &apos;We gaan problemen
                krijgen&apos;, &apos;Dit is vast illegaal&apos;, &apos;De
                kwaliteit zal slecht zijn&apos;... Nu schept hij op bij zijn
                collega&apos;s! We besparen €22/maand (hadden 2 decoders), dat
                is €264/jaar. Onze vakantie naar Tenerife is betaald!&quot;
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <span className="text-green-400 font-bold">
                  Bespaart: €264/jaar
                </span>
                <span className="text-gray-400 text-sm">
                  Klant sinds 10 maanden
                </span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl mr-4">
                  TD
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Tom De Smet</p>
                  <p className="text-gray-400">Brugge, Centrum</p>
                  <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                &quot;Telenet rekende €15 voor hoofddecoder + €7.50 voor de
                tweede. €22.50/maand alleen voor de dozen! Plus het TV-pakket
                van €74.95. Nu: €9.99 totaal, kijk op 5 toestellen, en heb
                kanalen die ik vroeger niet had. Installatie? Mijn dochter van
                14 deed het!&quot;
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <span className="text-green-400 font-bold">
                  Bespaart: €87.46/maand!
                </span>
                <span className="text-gray-400 text-sm">
                  Klant sinds 14 maanden
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Uw Vragen (Dezelfde die Pieter Had)
          </h2>

          <div className="space-y-4">
            <details className="bg-gray-800 rounded-lg p-6 group cursor-pointer">
              <summary className="list-none flex justify-between items-center">
                <span className="text-xl font-semibold text-white">
                  Is dit echt legaal?
                </span>
                <span className="text-orange-400 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Terechte vraag die Pieter ook stelde! IPTV2Belgie is een
                  streaming service, zoals Netflix, Disney+ of Streamz. U
                  betaalt een maandelijks abonnement voor toegang tot content.
                  Het is een transparant en legaal businessmodel.
                </p>
                <div className="bg-orange-900/30 rounded-lg p-4">
                  <p className="text-orange-300">
                    <span className="font-bold">Leuk feit:</span> Frank, de
                    gepensioneerde havenarbeider en ex-vakbondsman, gebruikt
                    IPTV2Belgie al 3 jaar. Als het illegaal was, zou hij het
                    weten!
                  </p>
                </div>
                <p className="text-gray-300 mt-4">
                  Meer weten over de legaliteit?
                  <Link
                    href="/blog/iptv-belgie-2025-complete-gids"
                    className="text-orange-400 hover:text-orange-300 font-semibold"
                  >
                    Lees onze complete juridische uitleg →
                  </Link>
                </p>
              </div>
            </details>

            <details className="bg-gray-800 rounded-lg p-6 group cursor-pointer">
              <summary className="list-none flex justify-between items-center">
                <span className="text-xl font-semibold text-white">
                  Mijn oude TV uit 2015 werkt dat ook?
                </span>
                <span className="text-orange-400 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Als uw TV niet &quot;Smart&quot; is of te oud, geen paniek!
                  Eenvoudige en betaalbare oplossingen:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    •{' '}
                    <span className="text-white font-bold">Fire TV Stick:</span>{' '}
                    €39 (vaak in promotie voor €24)
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
                  Zelfs met deze aankoop bespaart u €141-156 het eerste jaar!
                </p>
              </div>
            </details>

            <details className="bg-gray-800 rounded-lg p-6 group cursor-pointer">
              <summary className="list-none flex justify-between items-center">
                <span className="text-xl font-semibold text-white">
                  En als ik technische problemen heb?
                </span>
                <span className="text-orange-400 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Emma had exact dezelfde vrees! Dit is de realiteit:
                </p>
                <div className="bg-green-900/30 rounded-lg p-4 mb-4">
                  <p className="text-green-300">
                    ✓ WhatsApp support 24/7 in het Nederlands
                    <br />
                    ✓ Gemiddelde reactietijd: 2 minuten
                    <br />
                    ✓ Zelfs op zondag tijdens de match!
                    <br />✓ Video handleidingen voor alles
                  </p>
                </div>
                <p className="text-gray-300 italic">
                  &quot;Ik had een vraag om 22u op zaterdag. Antwoord in 90
                  seconden met screenshots!&quot; - Pieter
                </p>
              </div>
            </details>

            <details className="bg-gray-800 rounded-lg p-6 group cursor-pointer">
              <summary className="list-none flex justify-between items-center">
                <span className="text-xl font-semibold text-white">
                  Heb ik al mijn Belgische zenders?
                </span>
                <span className="text-orange-400 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 mb-4">
                  Pieter was bang zijn programma&apos;s te verliezen. Dit vond
                  hij:
                </p>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mb-4">
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    VRT 1
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    Canvas
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    VTM
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    Play4
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    Play5
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    Play6
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    Play7
                  </span>
                  <span className="bg-gray-700 rounded px-3 py-1 text-white text-sm text-center">
                    VRT Max
                  </span>
                </div>
                <p className="text-green-400 font-bold">
                  + 50.000 andere kanalen wereldwijd!
                </p>
                <p className="text-gray-300 mt-4">
                  Bekijk onze
                  <Link
                    href="/blog/iptv-belgie-proximus-telenet-alternatief"
                    className="text-orange-400 hover:text-orange-300 font-semibold"
                  >
                    complete kanalenvergelijking →
                  </Link>
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-xl p-8">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Elke Dag Wachten Kost U Geld
            </h2>

            <div className="bg-black/40 rounded-lg p-6 mb-8">
              <div className="text-center mb-6">
                <p className="text-2xl text-gray-200 mb-4">
                  Uw decoder kost u OP DIT MOMENT:
                </p>
                <div className="text-5xl font-bold text-red-400 mb-2">
                  €0.50 per dag
                </div>
                <p className="text-xl text-gray-300">
                  €3.50 per week • €15 per maand • €180 per jaar
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="bg-red-800/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-white">1 maand</p>
                  <p className="text-red-400 font-bold">€15 verloren</p>
                  <p className="text-gray-400 text-sm">
                    = 2 Domino&apos;s pizza&apos;s
                  </p>
                </div>
                <div className="bg-red-800/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-white">6 maanden</p>
                  <p className="text-red-400 font-bold">€90 verloren</p>
                  <p className="text-gray-400 text-sm">= Avondje Antwerpen</p>
                </div>
                <div className="bg-red-800/30 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-white">1 jaar</p>
                  <p className="text-red-400 font-bold">€180 verloren</p>
                  <p className="text-gray-400 text-sm">= Weekend Amsterdam</p>
                </div>
              </div>
            </div>

            <div className="bg-green-900/50 rounded-lg p-6 text-center mb-8">
              <p className="text-2xl text-green-400 font-bold mb-2">
                Speciale Aanbieding Januari 2025
              </p>
              <p className="text-3xl text-white font-bold mb-4">
                Eerste Maand €4.99
              </p>
              <p className="text-gray-300">
                In plaats van €9.99 • Bespaar 50% • Zonder contract
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/#pricing"
                className="inline-block bg-gradient-to-r from-yellow-500 to-red-500 text-white px-12 py-6 rounded-lg text-2xl font-bold hover:from-yellow-600 hover:to-red-600 transition-all duration-300 shadow-2xl transform hover:scale-105 animate-pulse"
              >
                Stop Met €0.50/dag Verliezen →
              </Link>
              <p className="text-gray-300 mt-4">
                Pieter wachtte 2 jaar = €360 verloren. Maak niet dezelfde fout!
              </p>
            </div>
          </div>
        </section>

        {/* Final Story Resolution */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-xl p-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Epiloog: 6 Maanden Later bij Pieter...
            </h2>

            <div className="space-y-6 text-lg">
              <p className="text-gray-200 leading-relaxed">
                Het is Emma&apos;s verjaardag. Pieter neemt haar mee naar
                restaurant &quot;The Jane&quot; in Antwerpen. &quot;Maar schat,
                dat is duur!&quot; zegt Emma bezorgd. Pieter glimlacht:
                &quot;Met de €80 die we per maand besparen, kan ik je dit
                geven!&quot;
              </p>

              <p className="text-gray-200 leading-relaxed">
                In het restaurant komen ze Jeroen en Lisa tegen. &quot;Raad
                eens?&quot; zegt Jeroen. &quot;We hebben jullie raad gevolgd.
                Telenet decoder teruggebracht vorige week. €22.50/maand bespaard
                want we hadden er twee! We gaan naar Barcelona in mei met de
                besparingen.&quot;
              </p>

              <p className="text-gray-200 leading-relaxed">
                Frank, de buurman die alles begon, heeft een nieuwe e-bike
                gekocht. &quot;€1800, cash betaald met twee jaar decoder
                besparingen!&quot; Hij fietst nu elk weekend naar de Ardennen.
              </p>

              <div className="bg-black/30 rounded-lg p-6 mt-6">
                <p className="text-white font-bold text-xl text-center mb-3">
                  Pieters Balans Na 6 Maanden:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-400">€480</p>
                    <p className="text-gray-300">Bespaard</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">5</p>
                    <p className="text-gray-300">Toestellen verbonden</p>
                  </div>
                </div>
                <p className="text-gray-200 text-center mt-4 italic">
                  &quot;De beste tech beslissing van mijn leven. Had ik maar
                  eerder geweten!&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-16">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-10 border-2 border-orange-500">
            <div className="mb-8">
              <p className="text-3xl text-white font-bold mb-4">
                Uw Beslissing Nu
              </p>
              <p className="text-xl text-gray-200 mb-6">
                Blijf €0.50 per dag geven aan Telenet/Proximus
                <br />
                <span className="text-2xl">OF</span>
                <br />
                Houd dat geld voor uzelf en uw familie
              </p>
            </div>

            <div className="bg-black/50 rounded-lg p-6 mb-8 inline-block">
              <p className="text-gray-300 mb-2">
                Pieter, Emma, Jeroen, Lisa, Frank...
              </p>
              <p className="text-4xl font-bold text-white mb-2">
                15,832 Belgen
              </p>
              <p className="text-gray-300">hebben al de juiste keuze gemaakt</p>
            </div>

            <div className="mb-8">
              <Link
                href="/#pricing"
                className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-14 py-7 rounded-lg text-2xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-2xl transform hover:scale-105"
              >
                Ik Wil €180/jaar Besparen →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-400">
              <div>💳 100% veilig betalen</div>
              <div>📞 WhatsApp support 24/7</div>
              <div>🔄 30 dagen garantie</div>
            </div>

            <p className="text-yellow-400 mt-6 text-lg font-semibold animate-pulse">
              ⏰ Aanbieding €4.99 eerste maand geldig tot 31 januari
            </p>
          </div>
        </section>
      </div>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gradient-to-r from-orange-600 to-red-600 p-4 z-50 shadow-2xl">
        <Link
          href="/#pricing"
          className="block text-center text-white font-bold text-lg"
        >
          Bespaar €180/jaar Nu →
        </Link>
      </div>
    </article>
  );
}
