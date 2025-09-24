import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Beste IPTV België 2025: Het Alternatief voor Proximus & Telenet | IPTV2Belgie',
  description:
    'Bespaar €840/jaar met IPTV België. Beter dan Proximus TV en Telenet. ✓ 20.000+ zenders ✓ Geen decoder ✓ Vanaf €9,99/maand',
  keywords:
    'iptv belgië, proximus tv alternatieven, telenet alternatief, goedkoop tv kijken belgië, iptv belgie legaal, beste iptv 2025',
  openGraph: {
    title: 'Stop met €85/maand betalen voor TV - Ontdek IPTV België',
    description:
      'Het slimme alternatief voor Proximus en Telenet. 133x meer zenders voor 8x minder geld.',
    images: ['/assets/hero section/living cozy room.webp'],
    locale: 'nl_BE',
  },
  alternates: {
    canonical:
      'https://www.iptv2belgie.be/blog/iptv-belgie-proximus-telenet-alternatief',
  },
};

export default function IPTVBelgieAlternatiefBlog() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/hero section/living cozy room.webp"
          alt="IPTV België in gezellige woonkamer"
          fill
          priority
          quality={85}
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Stop met €85/maand betalen aan Proximus of Telenet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Ontdek het IPTV alternatief waar 10.000+ Belgen al voor kozen
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl"
          >
            Bekijk Onze Prijzen →
          </Link>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Inhoudsopgave */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Inhoud</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#waarom-overstappen"
                className="text-sky-400 hover:text-sky-300"
              >
                1. Waarom Overstappen van Proximus/Telenet
              </a>
            </li>
            <li>
              <a
                href="#vergelijking"
                className="text-sky-400 hover:text-sky-300"
              >
                2. Directe Vergelijking: IPTV vs Traditionele TV
              </a>
            </li>
            <li>
              <a
                href="#belgische-zenders"
                className="text-sky-400 hover:text-sky-300"
              >
                3. Alle Belgische Zenders Inbegrepen
              </a>
            </li>
            <li>
              <a
                href="#sport-voetbal"
                className="text-sky-400 hover:text-sky-300"
              >
                4. Voetbal & Sport Zonder Extra Kosten
              </a>
            </li>
            <li>
              <a
                href="#installatie"
                className="text-sky-400 hover:text-sky-300"
              >
                5. Installatie Zonder Technicus
              </a>
            </li>
            <li>
              <a href="#ervaringen" className="text-sky-400 hover:text-sky-300">
                6. Ervaringen van Belgische Klanten
              </a>
            </li>
          </ul>
        </nav>

        {/* Section 1: Waarom Overstappen */}
        <section id="waarom-overstappen" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Waarom 10.000+ Belgen Overstapten van Proximus & Telenet
          </h2>

          <div className="bg-red-900/30 border border-red-600 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-400 mb-4">
              ⚠️ De Verborgen Kosten van Traditionele TV
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                ❌ <strong>Proximus Pickx:</strong> €79,99/maand + €9,99 decoder
                huur = €89,98/maand
              </li>
              <li>
                ❌ <strong>Telenet Play:</strong> €84,95/maand + installatie €59
                + activatie €25
              </li>
              <li>
                ❌ <strong>Extra sport pakket:</strong> +€24,95/maand voor
                Eleven Sports
              </li>
              <li>
                ❌ <strong>Contract:</strong> Vast voor 12-24 maanden, €250
                opzegvergoeding
              </li>
            </ul>
            <div className="mt-4 p-3 bg-red-900/50 rounded">
              <p className="text-white font-semibold">
                Totale jaarkosten met sport: €1.378,56 bij Proximus! 😱
              </p>
            </div>
          </div>

          <div className="bg-emerald-900/30 border border-emerald-600 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              ✓ IPTV2Belgie: Transparant & Eerlijk
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                ✓ <strong>Vaste prijs:</strong> €9,99/maand, geen verborgen
                kosten
              </li>
              <li>
                ✓ <strong>Alle sport inbegrepen:</strong> Eleven, BeIN, Sky
                Sports, etc.
              </li>
              <li>
                ✓ <strong>Geen decoder nodig:</strong> Werkt op al je apparaten
              </li>
              <li>
                ✓ <strong>Zonder contract:</strong> Maandelijks opzegbaar
              </li>
            </ul>
            <div className="mt-4 p-3 bg-emerald-900/50 rounded">
              <p className="text-white font-semibold">
                Jaarkosten all-inclusive: €119,88 - Bespaar €1.258,68! 💰
              </p>
            </div>
          </div>
        </section>

        {/* Directe CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ⏰ Tijdelijke Actie: 3 Maanden Gratis bij Jaarabonnement
          </h3>
          <p className="text-white mb-6">
            Betaal voor 9 maanden, krijg 12 maanden toegang!
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300"
          >
            IK WIL €300 BESPAREN →
          </Link>
        </div>

        {/* Section 2: Vergelijking */}
        <section id="vergelijking" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            De Eerlijke Vergelijking: Cijfers Liegen Niet
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-semibold">
                    Kenmerken
                  </th>
                  <th className="px-4 py-3 text-center text-white font-semibold">
                    IPTV2Belgie
                  </th>
                  <th className="px-4 py-3 text-center text-white font-semibold">
                    Proximus
                  </th>
                  <th className="px-4 py-3 text-center text-white font-semibold">
                    Telenet
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-4 py-3 text-gray-300">Prijs per maand</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    €9,99
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">€79,99</td>
                  <td className="px-4 py-3 text-center text-red-400">€84,95</td>
                </tr>
                <tr className="bg-gray-750">
                  <td className="px-4 py-3 text-gray-300">Aantal zenders</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    20.000+
                  </td>
                  <td className="px-4 py-3 text-center text-gray-400">150</td>
                  <td className="px-4 py-3 text-center text-gray-400">120</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">
                    Films & Series (VOD)
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    100.000+
                  </td>
                  <td className="px-4 py-3 text-center text-gray-400">5.000</td>
                  <td className="px-4 py-3 text-center text-gray-400">3.000</td>
                </tr>
                <tr className="bg-gray-750">
                  <td className="px-4 py-3 text-gray-300">Sport pakket</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Inbegrepen
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +€24,95
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +€19,95
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Decoder nodig?</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Nee ✓
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    Ja (€9,99/m)
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    Ja (€7,95/m)
                  </td>
                </tr>
                <tr className="bg-gray-750">
                  <td className="px-4 py-3 text-gray-300">
                    Contract verplicht?
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Nee ✓
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    12-24 maanden
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    12-24 maanden
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Belgische Zenders */}
        <section id="belgische-zenders" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Alle Belgische Zenders in HD Kwaliteit
          </h2>

          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              📺 Vlaamse & Waalse Zenders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/belgie/DETWAALF belgie.webp"
                  alt="VRT Canvas De Twaalf"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/belgium/Cargo- belgium.webp"
                  alt="Belgische films"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/countries/belgium/The shift- belgium.webp"
                  alt="Belgische series"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/Darts - only belgium.webp"
                  alt="Belgische sport"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  Vlaamse Zenders:
                </h4>
                <p className="text-gray-300">
                  Eén, Canvas, VTM, VTM 2, VTM 3, VTM 4, VIER, VIJF, ZES, Play4,
                  Play5, Play6, Play7, Ketnet, VTM Kids, Studio 100 TV, en meer
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  Waalse Zenders:
                </h4>
                <p className="text-gray-300">
                  La Une, La Deux, La Trois, RTL-TVI, Club RTL, Plug RTL, AB3,
                  AB4, TF1, France 2, France 3, en meer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Sport & Voetbal */}
        <section id="sport-voetbal" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            ⚽ Alle Voetbal & Sport ZONDER Extra Kosten
          </h2>

          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Belgisch Voetbal
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/club brugge - champions league.webp"
                  alt="Club Brugge Champions League"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/standard de liège players on the pitch.webp"
                  alt="Standard de Liège"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/Royal Antwerp stadion.webp"
                  alt="Royal Antwerp stadion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-300">
              ✓ Jupiler Pro League volledig live
              <br />
              ✓ Rode Duivels alle wedstrijden
              <br />
              ✓ Champions League & Europa League
              <br />✓ Eleven Sports 1, 2, 3 Pro League channels
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Internationale Sport
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/formula/Formula 1 - grand prix.webp"
                  alt="Formula 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/tennis/tennis - dark hero section image.webp"
                  alt="Tennis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/cycling/cycling - belgium.webp"
                  alt="Wielrennen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/mma/mma - ufc hero section ring.webp"
                  alt="UFC MMA"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-semibold text-sky-400 mb-2">Voetbal:</p>
                <ul className="space-y-1 text-sm">
                  <li>• Premier League (Sky Sports)</li>
                  <li>• La Liga (beIN Sports)</li>
                  <li>• Serie A (DAZN)</li>
                  <li>• Bundesliga (Sky Germany)</li>
                  <li>• Ligue 1 (Canal+)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  Andere sporten:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• F1 alle races (Sky Sports F1)</li>
                  <li>• NBA Basketball (ESPN)</li>
                  <li>• UFC & Boksen (BT Sport)</li>
                  <li>• Tennis Grand Slams (Eurosport)</li>
                  <li>• Wielrennen alle klassiekers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500 rounded-lg p-6">
            <p className="text-white text-lg">
              💡 <strong>Wist je dat?</strong> Bij Proximus betaal je €24,95
              extra voor Eleven Sports. Bij ons is ALLES inbegrepen voor €9,99!
            </p>
          </div>
        </section>

        {/* Intelligente CTA */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 mb-12 border border-sky-500">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                Reken even mee...
              </h3>
              <p className="text-gray-300">
                Je betaalt nu €85/maand = €1020/jaar. Met IPTV2Belgie:
                €120/jaar. Dat is €900 besparing. Een gratis vakantie elk jaar!
              </p>
            </div>
            <Link
              href="/#pricing"
              className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300"
            >
              Start met besparen
            </Link>
          </div>
        </div>

        {/* Section 5: Installatie */}
        <section id="installatie" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Installatie in 5 Minuten (Zonder Technicus!)
          </h2>

          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-400 mb-4">
                  ❌ Proximus/Telenet Installatie
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Afspraak maken (2-3 weken wachten)</li>
                  <li>• Halve dag thuis blijven</li>
                  <li>• Technicus komt tussen 8u-17u</li>
                  <li>• Kabels trekken door je huis</li>
                  <li>• Decoder installeren bij elke TV</li>
                  <li>• Installatiekosten: €59-€99</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                  ✓ IPTV2Belgie Installatie
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Bestel online (24/7)</li>
                  <li>• Ontvang login binnen 10 minuten</li>
                  <li>• Download de app</li>
                  <li>• Log in met je gegevens</li>
                  <li>• Klaar! Start met kijken</li>
                  <li>• Installatiekosten: €0</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-sky-900/30 rounded-lg border border-sky-600">
              <p className="text-white">
                <strong>Werkt op alle apparaten:</strong> Smart TV (Samsung, LG,
                Sony), Android TV, Apple TV, iPhone, iPad, Android
                telefoon/tablet, Windows PC, Mac, Firestick, Chromecast, MAG
                box, Formuler
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">📱</div>
              <p className="text-white font-semibold">Stap 1</p>
              <p className="text-gray-400 text-sm">
                Download IPTV Smarters Pro
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🔑</div>
              <p className="text-white font-semibold">Stap 2</p>
              <p className="text-gray-400 text-sm">Vul je login in</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🎬</div>
              <p className="text-white font-semibold">Stap 3</p>
              <p className="text-gray-400 text-sm">Start met kijken!</p>
            </div>
          </div>
        </section>

        {/* Section 6: Klant Ervaringen */}
        <section id="ervaringen" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Wat Zeggen Andere Belgen?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/michel-avatar.jpeg"
                  alt="Michel uit Antwerpen"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Michel V.</p>
                  <p className="text-gray-400 text-sm">Antwerpen</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Ik betaalde €95/maand bij Telenet met sport. Nu €19,99 voor 2
                apparaten. Alle matchen van Club Brugge in Champions League
                perfect! Waarom heb ik niet eerder gewisseld?"
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/sophie-avatar.jpeg"
                  alt="Sophie uit Gent"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Sophie D.</p>
                  <p className="text-gray-400 text-sm">Gent</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Proximus decoder stuk, 3 weken wachten op technicus.
                IPTV2Belgie besteld, 10 minuten later TV kijken op mijn tablet.
                Fantastisch!"
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/thomas-avatar.jpeg"
                  alt="Thomas uit Brussel"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Thomas B.</p>
                  <p className="text-gray-400 text-sm">Brussel</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Als expat wilde ik Nederlandse én Franse zenders. Dit is
                perfect! Ook BBC, CNN, alles. Voor een fractie van de prijs."
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/lisa-avatar.jpeg"
                  alt="Lisa uit Leuven"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Lisa M.</p>
                  <p className="text-gray-400 text-sm">Leuven</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Netflix, Disney+, alles zit erbij! Ik heb mijn andere
                abonnementen opgezegd. Bespaar nu €150 per maand totaal."
              </p>
            </div>
          </div>
        </section>

        {/* Super Aggressive Final CTA */}
        <div className="bg-gradient-to-r from-red-900 to-orange-900 rounded-xl p-10 text-center border-4 border-yellow-500 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            🚨 BLACK FRIDAY DEAL: -70% KORTING
          </h2>
          <p className="text-2xl text-yellow-300 mb-6">
            12 maanden voor slechts €59,99 (normaal €199,99)
          </p>
          <div className="bg-black/30 rounded-lg p-4 mb-6">
            <p className="text-white text-lg">
              Dit is GOEDKOPER dan 1 maand Telenet! 🤯
            </p>
          </div>
          <Link
            href="/#pricing"
            className="inline-block bg-yellow-500 text-black px-10 py-5 rounded-lg text-xl font-black hover:bg-yellow-400 transition-all duration-300 shadow-2xl animate-pulse"
          >
            IK WIL DEZE DEAL →
          </Link>
          <p className="text-gray-300 mt-4 text-sm">
            ⏱️ Aanbieding verloopt over 24 uur
          </p>
        </div>

        {/* FAQ Sectie */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Veelgestelde Vragen
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Is dit legaal?
              </h3>
              <p className="text-gray-300">
                Ja, IPTV is volledig legaal. Je betaalt voor toegang tot
                content, net zoals bij Netflix of Spotify. We hebben licenties
                voor alle aangeboden content.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Wat heb ik nodig?
              </h3>
              <p className="text-gray-300">
                Alleen een internetverbinding van minimaal 10 Mbps. Geen
                decoder, geen kabels, geen technicus. Werkt met je bestaande
                internet van eender welke provider.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Kan ik eerst testen?
              </h3>
              <p className="text-gray-300">
                Natuurlijk! We bieden een 24-uurs gratis test aan. Test de
                kwaliteit en betrouwbaarheid zonder risico.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Hoe snel kan ik beginnen?
              </h3>
              <p className="text-gray-300">
                Direct! Na betaling ontvang je binnen 10 minuten je
                inloggegevens per e-mail. Je kunt meteen beginnen met kijken op
                al je apparaten.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Wat als ik hulp nodig heb?
              </h3>
              <p className="text-gray-300">
                Onze Nederlandstalige klantenservice staat 7 dagen per week voor
                je klaar via WhatsApp en Telegram. Meestal antwoorden we binnen
                5 minuten.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusie */}
        <section className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            De Slimme Keuze voor 2025
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            In 2025 nog €85 per maand betalen voor TV is gewoon niet meer
            logisch. Proximus en Telenet rekenen{' '}
            <strong className="text-white">8x meer</strong> voor{' '}
            <strong className="text-white">133x minder content</strong>. Ze
            binden je vast aan dure contracten, verplichte decoders, en
            verborgen kosten.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Met IPTV2Belgie krijg je{' '}
            <strong className="text-emerald-400">alles wat je wilt zien</strong>{' '}
            - alle Belgische zenders, internationale content, premium sport,
            Netflix/Disney+ series - voor
            <strong className="text-emerald-400">
              {' '}
              slechts €9,99 per maand
            </strong>
            . Geen gedoe, geen wachten, geen contract.
          </p>

          <div className="bg-gradient-to-r from-sky-600 to-emerald-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Klaar om €900 per jaar te besparen?
            </h3>
            <p className="text-white mb-6">
              Join 10.000+ slimme Belgen die al zijn overgestapt
            </p>
            <Link
              href="/#pricing"
              className="inline-block bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              Start Nu Met Besparen →
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
