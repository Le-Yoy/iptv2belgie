import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best IPTV Belgium 2025: Complete Expat TV Guide | IPTV2Belgie',
  description:
    'Watch Belgian TV and international channels for €9.99/month. Perfect for expats in Belgium. ✓ 20,000+ channels ✓ All languages ✓ No contract',
  keywords:
    'iptv belgium, belgium tv streaming, watch belgian tv abroad, expat tv belgium, english tv belgium, international tv belgium',
  openGraph: {
    title: 'IPTV Belgium for Expats - All Your Home Channels + Belgian TV',
    description:
      'The complete TV solution for internationals in Belgium. Watch channels from your home country plus all Belgian content.',
    images: ['/assets/hero section/netflix hero section.webp'],
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.iptv2belgie.be/blog/best-iptv-belgium-expats-guide',
  },
};

export default function IPTVBelgiumExpatsBlog() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/hero section/netflix hero section.webp"
          alt="IPTV Belgium streaming on multiple devices"
          fill
          priority
          quality={85}
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Ultimate TV Solution for Expats in Belgium
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Watch channels from 100+ countries for just €9.99/month
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl"
          >
            Get Started Today →
          </Link>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Table of Contents */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">Contents</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#expat-challenge"
                className="text-sky-400 hover:text-sky-300"
              >
                1. The Expat TV Challenge in Belgium
              </a>
            </li>
            <li>
              <a href="#solution" className="text-sky-400 hover:text-sky-300">
                2. Why IPTV is Perfect for Internationals
              </a>
            </li>
            <li>
              <a
                href="#international-channels"
                className="text-sky-400 hover:text-sky-300"
              >
                3. Channels from Your Home Country
              </a>
            </li>
            <li>
              <a
                href="#belgian-content"
                className="text-sky-400 hover:text-sky-300"
              >
                4. Understanding Belgian TV Options
              </a>
            </li>
            <li>
              <a
                href="#setup-guide"
                className="text-sky-400 hover:text-sky-300"
              >
                5. Quick Setup Guide for Expats
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-sky-400 hover:text-sky-300"
              >
                6. What Other Expats Say
              </a>
            </li>
          </ul>
        </nav>

        {/* Section 1: The Expat Challenge */}
        <section id="expat-challenge" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            The Struggle is Real: TV for Expats in Belgium
          </h2>

          <div className="bg-red-900/30 border border-red-600 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-400 mb-4">
              😫 Common Expat TV Problems
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                ❌ <strong>Proximus/Telenet:</strong> Mostly Dutch/French
                channels, minimal English content
              </li>
              <li>
                ❌ <strong>Language barriers:</strong> Contracts and support
                only in Dutch/French
              </li>
              <li>
                ❌ <strong>Missing home channels:</strong> No BBC, Sky, or
                channels from your country
              </li>
              <li>
                ❌ <strong>Multiple subscriptions:</strong> Netflix + Prime +
                Disney+ = €40+/month
              </li>
              <li>
                ❌ <strong>VPN hassles:</strong> Geo-blocking, slow speeds,
                constant disconnections
              </li>
              <li>
                ❌ <strong>2-year contracts:</strong> Leaving Belgium? Pay €250
                cancellation fee
              </li>
            </ul>
          </div>

          <div className="bg-emerald-900/30 border border-emerald-600 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              ✓ The IPTV2Belgie Solution
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                ✓ <strong>20,000+ channels:</strong> From 100+ countries in all
                languages
              </li>
              <li>
                ✓ <strong>English support:</strong> 24/7 customer service in
                English
              </li>
              <li>
                ✓ <strong>All streaming included:</strong> Netflix, BBC, Sky,
                HBO content built-in
              </li>
              <li>
                ✓ <strong>One subscription:</strong> Everything for €9.99/month
              </li>
              <li>
                ✓ <strong>No VPN needed:</strong> Direct access to all content
              </li>
              <li>
                ✓ <strong>Monthly billing:</strong> Cancel anytime, perfect for
                short stays
              </li>
            </ul>
          </div>
        </section>

        {/* Direct CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            🌍 Special Offer for International Residents
          </h3>
          <p className="text-white mb-6">
            Get 3 months free when you choose our annual plan
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300"
          >
            CLAIM YOUR OFFER →
          </Link>
        </div>

        {/* Section 2: Why IPTV Works */}
        <section id="solution" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Smart Expats Choose IPTV Over Traditional TV
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white font-semibold">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center text-white font-semibold">
                    IPTV2Belgie
                  </th>
                  <th className="px-4 py-3 text-center text-white font-semibold">
                    Belgian Cable
                  </th>
                  <th className="px-4 py-3 text-center text-white font-semibold">
                    Multiple Streaming
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-4 py-3 text-gray-300">Monthly Cost</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    €9.99
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">€79.99</td>
                  <td className="px-4 py-3 text-center text-red-400">€45+</td>
                </tr>
                <tr className="bg-gray-750">
                  <td className="px-4 py-3 text-gray-300">English Channels</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    500+
                  </td>
                  <td className="px-4 py-3 text-center text-gray-400">5-10</td>
                  <td className="px-4 py-3 text-center text-gray-400">
                    Varies
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">
                    International Content
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    100+ countries
                  </td>
                  <td className="px-4 py-3 text-center text-gray-400">
                    Belgium only
                  </td>
                  <td className="px-4 py-3 text-center text-gray-400">
                    Geo-blocked
                  </td>
                </tr>
                <tr className="bg-gray-750">
                  <td className="px-4 py-3 text-gray-300">Contract Required</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    No
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    12-24 months
                  </td>
                  <td className="px-4 py-3 text-center text-yellow-400">
                    Monthly
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-300">Installation</td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    Instant
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    2-3 weeks wait
                  </td>
                  <td className="px-4 py-3 text-center text-yellow-400">
                    Instant
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-sky-600/20 to-emerald-600/20 rounded-lg border border-sky-500">
            <p className="text-white text-lg">
              💡 <strong>Fun Fact:</strong> 73% of our customers are expats who
              were frustrated with Belgian cable TV
            </p>
          </div>
        </section>

        {/* Section 3: International Channels */}
        <section id="international-channels" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            🌐 Watch TV from Your Home Country
          </h2>

          {/* UK & Ireland */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              🇬🇧 UK & Ireland Channels
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/netflix/the crown netflix.webp"
                  alt="BBC The Crown"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/france/park des princes stadium - psg france.webp"
                  alt="Sky Sports Football"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/hbo/succession hbo.webp"
                  alt="HBO Succession"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/logos/cnn.webp"
                  alt="CNN International"
                  fill
                  className="object-cover object-contain bg-gray-700"
                />
              </div>
            </div>
            <p className="text-gray-300">
              BBC One, BBC Two, ITV, Channel 4, Sky Sports, BT Sport, Sky News,
              BBC News, Sky Atlantic, Sky Cinema, and 200+ more UK channels
            </p>
          </div>

          {/* USA */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              🇺🇸 American Channels
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/hbo/house of dragons hbo.webp"
                  alt="HBO Max Content"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/amazon/the boys prime video.webp"
                  alt="Amazon Prime Shows"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/disney/mandalorian disney.webp"
                  alt="Disney+ Content"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/logos/national-geographic.webp"
                  alt="National Geographic"
                  fill
                  className="object-cover object-contain bg-gray-700"
                />
              </div>
            </div>
            <p className="text-gray-300">
              HBO, ESPN, CNN, Fox, NBC, ABC, CBS, AMC, Showtime, Starz, National
              Geographic, Discovery, and 300+ US channels
            </p>
          </div>

          {/* European */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              🇪🇺 European Channels
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  🇩🇪 Germany
                </h4>
                <p className="text-gray-400 text-sm">
                  ARD, ZDF, RTL, ProSieben, SAT.1, Sky Deutschland, DAZN
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  🇫🇷 France
                </h4>
                <p className="text-gray-400 text-sm">
                  TF1, France 2, Canal+, BeIN Sports, RMC Sport, M6
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  🇳🇱 Netherlands
                </h4>
                <p className="text-gray-400 text-sm">
                  NPO 1/2/3, RTL 4/5, SBS6, Ziggo Sport, Fox Sports
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  🇮🇹 Italy
                </h4>
                <p className="text-gray-400 text-sm">
                  RAI, Mediaset, Sky Italia, DAZN, Premium Cinema
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  🇪🇸 Spain
                </h4>
                <p className="text-gray-400 text-sm">
                  TVE, Antena 3, Telecinco, Movistar+, DAZN Spain
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  🇵🇹 Portugal
                </h4>
                <p className="text-gray-400 text-sm">
                  RTP, SIC, TVI, Sport TV, Benfica TV
                </p>
              </div>
            </div>
          </div>

          {/* Asian & Other */}
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              🌏 Asian & Middle Eastern Channels
            </h3>
            <p className="text-gray-300 mb-4">
              Full packages from India, Pakistan, Turkey, Arab countries, China,
              Japan, Korea, and more.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-gray-400 text-sm">
              <div>
                • 🇮🇳 Star Plus, Sony, Zee TV, Colors (India)
                <br />
                • 🇵🇰 Geo, ARY, Hum TV (Pakistan)
                <br />
                • 🇹🇷 TRT, Show TV, ATV (Turkey)
                <br />• 🇸🇦 MBC, Al Jazeera, Rotana (Arabic)
              </div>
              <div>
                • 🇨🇳 CCTV, Phoenix (China)
                <br />
                • 🇯🇵 NHK, Fuji TV (Japan)
                <br />
                • 🇰🇷 KBS, MBC, SBS (Korea)
                <br />• 🇵🇭 ABS-CBN, GMA (Philippines)
              </div>
            </div>
          </div>
        </section>

        {/* Intelligent CTA */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 mb-12 border border-sky-500">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                Missing home? We've got you covered.
              </h3>
              <p className="text-gray-300">
                Watch your favorite shows from back home while enjoying Belgian
                content too. One subscription, all countries.
              </p>
            </div>
            <Link
              href="/#pricing"
              className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300"
            >
              Start watching now
            </Link>
          </div>
        </div>

        {/* Section 4: Belgian Content */}
        <section id="belgian-content" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Understanding Belgian TV (A Quick Guide for Expats)
          </h2>

          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              📺 Belgian TV Landscape Explained
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  Dutch-Speaking Channels (Flanders)
                </h4>
                <p className="text-gray-300 mb-2">
                  VRT (public): Eén, Canvas - news, documentaries, culture
                  <br />
                  VTM Group: VTM, VTM 2, VTM 3, VTM 4 - entertainment, reality
                  <br />
                  DPG Media: VIER, VIJF, ZES - series, movies, lifestyle
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  French-Speaking Channels (Wallonia)
                </h4>
                <p className="text-gray-300 mb-2">
                  RTBF (public): La Une, La Deux, La Trois - news, sports,
                  culture
                  <br />
                  RTL Group: RTL-TVI, Club RTL, Plug RTL - entertainment, kids
                  <br />
                  Also includes French channels: TF1, France 2, France 3
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-sky-400 mb-2">
                  Belgian Sports Coverage
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                  <div className="relative h-24 rounded overflow-hidden">
                    <Image
                      src="/assets/sports/football/belgium/KRC Genk - people with jersey.webp"
                      alt="Belgian football"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-24 rounded overflow-hidden">
                    <Image
                      src="/assets/sports/cycling/cycling - belgium.webp"
                      alt="Belgian cycling"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-24 rounded overflow-hidden">
                    <Image
                      src="/assets/sports/football/belgium/hero section- football belgium.webp"
                      alt="Red Devils"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-24 rounded overflow-hidden">
                    <Image
                      src="/assets/sports/tennis/tennis - dark hero section image.webp"
                      alt="Tennis"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-300 mt-3">
                  • Jupiler Pro League (Belgian football)
                  <br />
                  • Red Devils (national team) matches
                  <br />
                  • Tour de France & Belgian cycling classics
                  <br />• All included in your IPTV package!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Setup Guide */}
        <section id="setup-guide" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Easy Setup: From Sign-Up to Watching in 10 Minutes
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Choose Your Plan
              </h3>
              <p className="text-gray-400">
                Select devices (1-5) and duration (monthly/yearly)
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Pay Securely
              </h3>
              <p className="text-gray-400">
                Bank transfer (SEPA) - receive login in 10 minutes
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Start Watching
              </h3>
              <p className="text-gray-400">
                Works on all devices - no installation needed
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              📱 Compatible Devices
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sky-400 mb-2">
                  Smart TVs & Streaming Devices
                </h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Samsung & LG Smart TVs</li>
                  <li>• Android TV & Apple TV</li>
                  <li>• Amazon Fire TV Stick</li>
                  <li>• Google Chromecast</li>
                  <li>• MAG boxes & Formuler</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sky-400 mb-2">Mobile & Computers</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• iPhone & iPad</li>
                  <li>• Android phones & tablets</li>
                  <li>• Windows PC & Mac</li>
                  <li>• Web browser (any device)</li>
                  <li>• IPTV Smarters Pro app</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials */}
        <section id="testimonials" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Join 5,000+ Happy Expats in Belgium
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/hans-avatar.jpeg"
                  alt="Hans from Germany"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Hans K.</p>
                  <p className="text-gray-400 text-sm">
                    German Expat, Brussels
                  </p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Finally! German channels plus all the Belgian sports. Proximus
                wanted €95/month with barely any German content. This is €19.99
                for everything. Incredible value."
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/emma-avatar.jpeg"
                  alt="Emma from UK"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Emma T.</p>
                  <p className="text-gray-400 text-sm">
                    British Expat, Antwerp
                  </p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "BBC iPlayer blocked, Sky Now doesn't work... I was so
                frustrated! IPTV2Belgie has everything - BBC, ITV, Sky Sports,
                even Channel 4. Game changer!"
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/sophie-avatar.jpeg"
                  alt="Sophie from France"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Sophie L.</p>
                  <p className="text-gray-400 text-sm">French Expat, Ghent</p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Perfect for French expats! All French channels plus Belgian
                ones to practice Dutch. Customer support in English is amazing -
                they helped me set up in 5 minutes."
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/thomas-avatar.jpeg"
                  alt="Thomas from USA"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Thomas R.</p>
                  <p className="text-gray-400 text-sm">
                    American Expat, Leuven
                  </p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "ESPN, HBO Max, all US channels work perfectly. No VPN needed!
                Much better than juggling multiple streaming services. Wish I
                found this sooner."
              </p>
            </div>
          </div>
        </section>

        {/* Aggressive Final CTA */}
        <div className="bg-gradient-to-r from-red-900 to-orange-900 rounded-xl p-10 text-center border-4 border-yellow-500 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            🎯 LIMITED TIME: Expat Special Deal
          </h2>
          <p className="text-2xl text-yellow-300 mb-6">
            First 3 Months for €19.99 Total (Save €10!)
          </p>
          <div className="bg-black/30 rounded-lg p-4 mb-6">
            <p className="text-white text-lg">
              That's cheaper than ONE MONTH of Netflix Premium!
            </p>
          </div>
          <Link
            href="/#pricing"
            className="inline-block bg-yellow-500 text-black px-10 py-5 rounded-lg text-xl font-black hover:bg-yellow-400 transition-all duration-300 shadow-2xl animate-pulse"
          >
            GET THE EXPAT DEAL →
          </Link>
          <p className="text-gray-300 mt-4 text-sm">
            ⏰ Only 24 spots left at this price
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Frequently Asked Questions from Expats
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Is this legal in Belgium?
              </h3>
              <p className="text-gray-300">
                Yes, absolutely. IPTV is legal in Belgium. You're paying for
                access to content, just like with any streaming service. We
                operate fully legally with proper licensing.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Do I need a Belgian bank account?
              </h3>
              <p className="text-gray-300">
                No, we accept SEPA transfers from any EU bank account. You can
                also pay via PayPal or cryptocurrency if preferred.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                What internet speed do I need?
              </h3>
              <p className="text-gray-300">
                Minimum 10 Mbps for HD streaming, 25 Mbps for 4K. Most Belgian
                internet connections (Proximus, Telenet, Orange) are more than
                sufficient.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I use it when traveling?
              </h3>
              <p className="text-gray-300">
                Yes! Your subscription works worldwide. Watch Belgian TV from
                anywhere or enjoy your home channels while on vacation.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                Is there English customer support?
              </h3>
              <p className="text-gray-300">
                Yes, we provide 24/7 support in English via WhatsApp and
                Telegram. Our team typically responds within 5 minutes.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                What if I'm only in Belgium temporarily?
              </h3>
              <p className="text-gray-300">
                Perfect! We offer monthly subscriptions with no contract. Cancel
                anytime with no fees. Ideal for students, temporary workers, or
                short-term residents.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stop Struggling with Belgian TV
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            As an expat in Belgium, you shouldn't have to choose between
            expensive Belgian cable with no international content or juggling
            multiple streaming services with VPNs. You deserve
            <strong className="text-white"> everything in one place</strong> -
            channels from home, Belgian content for integration, and premium
            entertainment, all for
            <strong className="text-emerald-400">
              {' '}
              less than the cost of Netflix + Spotify
            </strong>
            .
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Join over{' '}
            <strong className="text-white">
              5,000 international residents
            </strong>{' '}
            who've already discovered the smarter way to watch TV in Belgium.
            With instant setup, no contracts, and support in your language,
            there's no reason to wait.
          </p>

          <div className="bg-gradient-to-r from-sky-600 to-emerald-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to watch TV from home again?
            </h3>
            <p className="text-white mb-6">
              Set up in 10 minutes. Cancel anytime. No contracts.
            </p>
            <Link
              href="/#pricing"
              className="inline-block bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Free Trial →
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
