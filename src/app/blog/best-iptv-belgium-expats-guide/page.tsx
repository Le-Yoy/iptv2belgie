import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'Best IPTV Belgium 2025 for Expats: Save €900/year on International TV | IPTV2Belgie',
  description:
    'Watch TV from 100+ countries in Belgium for just €9.99/month. Perfect for expats. BBC, Sky, US channels, and more. No contract, instant setup, English support 24/7.',
  keywords:
    'iptv belgium expats, belgium tv english, international tv belgium, expat streaming belgium, british tv belgium, american tv belgium, iptv belgium 2025',
  openGraph: {
    title: 'IPTV Belgium for Expats - All Your Home Channels + Belgian TV',
    description:
      'The complete TV solution for internationals in Belgium. 20,000+ channels from 100+ countries.',
    locale: 'en_US',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iptv2belgie.be/blog/best-iptv-belgium-expats-guide',
  },
};

export default function IPTVBelgiumExpatsBlog() {
  const structuredData = {
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Best IPTV Belgium 2025 for Expats: All Your Home Channels',
        description:
          'Watch TV from 100+ countries in Belgium. Perfect solution for international residents.',
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
            'https://www.iptv2belgie.be/blog/best-iptv-belgium-expats-guide',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Can I watch UK and US channels in Belgium?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Get 500+ English channels including BBC, ITV, Sky, ESPN, HBO and more for just €9.99/month.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need a contract?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No contract required. Cancel anytime, perfect for expats who may relocate.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is support available in English?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, 24/7 English support via WhatsApp and Telegram. Average response time 2 minutes.',
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
            Tired of Belgian TV You Can&apos;t Understand?
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            5,000+ expats in Belgium already switched to smart TV streaming
          </p>
          <p className="text-2xl md:text-3xl text-emerald-400 font-bold mb-8">
            Watch TV from 100+ countries for just €9.99/month
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-sky-600 hover:to-emerald-600 transition-all duration-300 shadow-xl"
          >
            Get your home channels now →
          </Link>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Table of contents */}
        <nav className="bg-gray-800 rounded-xl p-6 mb-12 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-4">
            What you&apos;ll discover:
          </h2>
          <ol className="space-y-2 text-gray-300">
            <li>
              1.{' '}
              <a
                href="#expat-struggle"
                className="text-sky-400 hover:text-sky-300"
              >
                The real TV struggle for expats in Belgium
              </a>
            </li>
            <li>
              2.{' '}
              <a
                href="#belgian-tv-problem"
                className="text-sky-400 hover:text-sky-300"
              >
                Why Belgian cable TV fails internationals
              </a>
            </li>
            <li>
              3.{' '}
              <a href="#comparison" className="text-sky-400 hover:text-sky-300">
                Complete comparison: IPTV vs Cable vs Multiple Streaming
              </a>
            </li>
            <li>
              4.{' '}
              <a
                href="#international-channels"
                className="text-sky-400 hover:text-sky-300"
              >
                Channels from your home country (UK, US, DE, FR, and 96+ more)
              </a>
            </li>
            <li>
              5.{' '}
              <a
                href="#belgian-content"
                className="text-sky-400 hover:text-sky-300"
              >
                Understanding Belgian TV (for integration)
              </a>
            </li>
            <li>
              6.{' '}
              <a href="#setup" className="text-sky-400 hover:text-sky-300">
                Setup guide: From zero to watching in 10 minutes
              </a>
            </li>
            <li>
              7.{' '}
              <a href="#legal" className="text-sky-400 hover:text-sky-300">
                Is it legal? Everything you need to know
              </a>
            </li>
            <li>
              8.{' '}
              <a
                href="#testimonials"
                className="text-sky-400 hover:text-sky-300"
              >
                What 5,000+ expats in Belgium are saying
              </a>
            </li>
          </ol>
        </nav>

        {/* Powerful introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">Picture this:</strong> You&apos;ve
            just moved to Belgium for work. You&apos;re paying €85/month for
            Proximus or Telenet, but 95% of the channels are in Dutch or French.
            You can&apos;t watch BBC, Sky Sports, or your favorite shows from
            home. The customer service doesn&apos;t speak English. You&apos;re
            locked into a 2-year contract.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Sound familiar? You&apos;re not alone. Belgium has over 200,000
            expats, and most are frustrated with the TV situation. But
            here&apos;s what the cable companies don&apos;t want you to know:
            <strong className="text-white">
              {' '}
              there&apos;s a perfectly legal way
            </strong>{' '}
            to watch
            <strong className="text-emerald-400">
              {' '}
              all your home channels PLUS Belgian TV for just €9.99/month
            </strong>
            .
          </p>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500 rounded-lg p-6">
            <p className="text-white text-lg">
              💡 <strong>Fun fact:</strong> You&apos;re currently paying 8x more
              than necessary for 133x less content. Let&apos;s fix that today.
            </p>
          </div>
        </section>

        {/* Section 1: The Expat Struggle */}
        <section id="expat-struggle" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            1. The Real TV Struggle for Expats in Belgium
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Living in Belgium as an expat comes with many challenges, but nobody
            warns you about the TV situation. Here&apos;s what you&apos;re
            dealing with:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-3">
                😤 Current Reality
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• €85-105/month for mostly foreign language TV</li>
                <li>• No BBC, Sky, or familiar channels</li>
                <li>• Customer service in Dutch/French only</li>
                <li>• 2-year contracts with €250 cancellation fee</li>
                <li>• Need VPN + multiple subscriptions</li>
                <li>• Constant buffering and geo-blocks</li>
              </ul>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                ✨ What&apos;s Possible
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• €9.99/month for everything</li>
                <li>• 500+ English channels</li>
                <li>• 24/7 support in English</li>
                <li>• No contract, cancel anytime</li>
                <li>• One subscription, all countries</li>
                <li>• Perfect quality, no VPN needed</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              The numbers don&apos;t lie:
            </h3>
            <p className="text-gray-300 mb-4">
              Average expat in Belgium spends:
            </p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li>• Proximus/Telenet: €85/month</li>
              <li>• Netflix: €15.99/month</li>
              <li>• VPN service: €10/month</li>
              <li>• Extra streaming: €20/month</li>
            </ul>
            <p className="text-xl text-red-400 font-bold">
              Total: €130.99/month = €1,571.88/year 😱
            </p>
            <p className="text-xl text-emerald-400 font-bold mt-4">
              With IPTV2Belgie: €9.99/month = €119.88/year
            </p>
            <p className="text-xl text-white font-bold">
              You save €1,452 every year!
            </p>
          </div>
        </section>

        {/* Section 2: Belgian TV Problem */}
        <section id="belgian-tv-problem" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            2. Why Belgian Cable TV Fails International Residents
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                The language barrier nobody talks about:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-red-400 mb-2">
                    ❌ Proximus Pickx:
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• 90% Dutch/French channels</li>
                    <li>• 5-10 English channels max</li>
                    <li>• No UK channels</li>
                    <li>• No US channels</li>
                    <li>• Support in Dutch/French only</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-red-400 mb-2">
                    ❌ Telenet Play:
                  </p>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• 95% Flemish content</li>
                    <li>• BBC World News only</li>
                    <li>• No Sky Sports</li>
                    <li>• No entertainment channels</li>
                    <li>• Flemish-only interface</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-3">
                The hidden costs for expats:
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • <strong>Installation:</strong> €59-99 + wait 2-3 weeks for
                  technician
                </li>
                <li>
                  • <strong>English package:</strong> Not available at any price
                </li>
                <li>
                  • <strong>Multiple decoders:</strong> €5-10 extra per TV
                </li>
                <li>
                  • <strong>Early termination:</strong> €250 if you leave
                  Belgium
                </li>
                <li>
                  • <strong>VPN for home content:</strong> €10-15/month extra
                </li>
                <li>
                  • <strong>Multiple streaming services:</strong> €50+/month
                </li>
              </ul>
              <p className="text-red-400 font-bold mt-4">
                Real total cost: €150+/month for incomplete solution
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Detailed Comparison */}
        <section id="comparison" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            3. The Complete Comparison: All Your Options
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-sky-600 to-emerald-600">
                <tr>
                  <th className="px-4 py-3 text-left text-white">Feature</th>
                  <th className="px-4 py-3 text-center text-white">
                    IPTV2Belgie
                  </th>
                  <th className="px-4 py-3 text-center text-white">
                    Belgian Cable
                  </th>
                  <th className="px-4 py-3 text-center text-white">
                    Multiple Streaming
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Monthly cost
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    €9.99
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    €79.99-105
                  </td>
                  <td className="px-4 py-3 text-center text-yellow-400">
                    €50-80
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    English channels
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    500+
                  </td>
                  <td className="px-4 py-3 text-center">5-10</td>
                  <td className="px-4 py-3 text-center">Varies</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Countries covered
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    100+
                  </td>
                  <td className="px-4 py-3 text-center">Belgium only</td>
                  <td className="px-4 py-3 text-center">Limited</td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    BBC/Sky/ITV
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    ✓ All included
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">✗ None</td>
                  <td className="px-4 py-3 text-center text-yellow-400">
                    Geo-blocked
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    US channels
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    ✓ 300+
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">✗ None</td>
                  <td className="px-4 py-3 text-center text-yellow-400">
                    Limited
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Sports packages
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    All included
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    +€24.95
                  </td>
                  <td className="px-4 py-3 text-center text-yellow-400">
                    Multiple subs
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Contract required
                  </td>
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
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    English support
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    24/7
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">No</td>
                  <td className="px-4 py-3 text-center text-yellow-400">
                    Varies
                  </td>
                </tr>
                <tr className="hover:bg-gray-700">
                  <td className="px-4 py-3 text-white font-semibold">
                    Installation time
                  </td>
                  <td className="px-4 py-3 text-center text-emerald-400 font-bold">
                    10 minutes
                  </td>
                  <td className="px-4 py-3 text-center text-red-400">
                    2-3 weeks
                  </td>
                  <td className="px-4 py-3 text-center text-yellow-400">
                    Instant
                  </td>
                </tr>
                <tr className="hover:bg-gray-700 font-bold text-lg">
                  <td className="px-4 py-4 text-white">YEARLY COST</td>
                  <td className="px-4 py-4 text-center text-emerald-400">
                    €119.88
                  </td>
                  <td className="px-4 py-4 text-center text-red-400">
                    €960-1260
                  </td>
                  <td className="px-4 py-4 text-center text-yellow-400">
                    €600-960
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA for expats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            🌍 Special Deal for International Residents
          </h3>
          <p className="text-white text-lg mb-6">
            First month only €4.99 - Test with all your favorite channels
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300"
          >
            Claim expat discount →
          </Link>
        </div>

        {/* Section 4: International Channels */}
        <section id="international-channels" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            4. Watch TV From Your Home Country
          </h2>

          {/* UK & Ireland */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🇬🇧 UK & Ireland Channels
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/netflix/the crown netflix.png"
                  alt="BBC The Crown British TV"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/hbo/succession hbo.png"
                  alt="Sky Atlantic Succession"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/france/park des princes stadium - psg france.png"
                  alt="Sky Sports Football"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/logos/cnn.png"
                  alt="BBC News CNN"
                  fill
                  className="object-cover object-contain bg-gray-700"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  Entertainment:
                </p>
                <p className="text-sm">
                  BBC One/Two/Three/Four, ITV 1/2/3/4, Channel 4, E4, More4,
                  Film4, Channel 5, Sky One, Sky Atlantic
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  Sports & News:
                </p>
                <p className="text-sm">
                  Sky Sports (all channels), BT Sport, BBC News, Sky News, ITV
                  News, GB News
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-emerald-900/30 rounded-lg border border-emerald-600">
              <p className="text-emerald-300 text-sm">
                💚 Finally watch Match of the Day, Strictly, Love Island, and
                all your favorite UK shows!
              </p>
            </div>
          </div>

          {/* USA */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🇺🇸 American Channels
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/hbo/house of dragons hbo.png"
                  alt="HBO House of Dragons"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/movie_posters/general/amazon/the boys prime video.png"
                  alt="Amazon Prime The Boys"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/logos/national-geographic.png"
                  alt="National Geographic"
                  fill
                  className="object-cover object-contain bg-gray-700"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/logos/disney.png"
                  alt="Disney ABC"
                  fill
                  className="object-cover object-contain bg-gray-700"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <p className="font-semibold text-sky-400 mb-2">Networks:</p>
                <p className="text-sm">
                  HBO, ESPN (all channels), CNN, Fox, NBC, ABC, CBS, AMC,
                  Showtime, Starz
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  Entertainment:
                </p>
                <p className="text-sm">
                  Comedy Central, Adult Swim, Cartoon Network, Discovery,
                  History, TLC, Food Network
                </p>
              </div>
            </div>
          </div>

          {/* European */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🇪🇺 European Channels
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold text-sky-400 mb-2">🇩🇪 Germany:</p>
                <p className="text-gray-300 text-sm">
                  ARD, ZDF, RTL, ProSieben, SAT.1, Sky Deutschland, DAZN, Sport1
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">🇫🇷 France:</p>
                <p className="text-gray-300 text-sm">
                  TF1, France 2/3, Canal+, BeIN Sports, RMC Sport, M6, Arte
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  🇳🇱 Netherlands:
                </p>
                <p className="text-gray-300 text-sm">
                  NPO 1/2/3, RTL 4/5, SBS6, Veronica, Fox Sports Eredivisie
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">🇮🇹 Italy:</p>
                <p className="text-gray-300 text-sm">
                  RAI 1/2/3, Mediaset, Sky Italia, DAZN, Premium Cinema
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">🇪🇸 Spain:</p>
                <p className="text-gray-300 text-sm">
                  TVE, Antena 3, Telecinco, La Sexta, Movistar+, DAZN
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">🇵🇱 Poland:</p>
                <p className="text-gray-300 text-sm">
                  TVP, Polsat, TVN, Canal+ Polska, Eleven Sports
                </p>
              </div>
            </div>
          </div>

          {/* Asian & Others */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              🌏 Asian, Middle Eastern & More
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  Asian Channels:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>🇮🇳 India: Star Plus, Sony, Zee TV, Colors</li>
                  <li>🇵🇰 Pakistan: Geo, ARY, Hum TV</li>
                  <li>🇨🇳 China: CCTV, Phoenix</li>
                  <li>🇯🇵 Japan: NHK, Fuji TV</li>
                  <li>🇰🇷 Korea: KBS, MBC, SBS</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  Middle East & Africa:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>🇸🇦 Arabic: MBC, Al Jazeera, Rotana</li>
                  <li>🇹🇷 Turkey: TRT, Show TV, ATV</li>
                  <li>🇮🇱 Israel: Channel 12, 13, Kan</li>
                  <li>🇿🇦 South Africa: SABC, SuperSport</li>
                  <li>🇳🇬 Nigeria: NTA, Channels TV</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistics box */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-semibold text-white mb-4">
              Coverage that actually matters:
            </h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-sky-400">100+</p>
                <p className="text-gray-300">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-400">50+</p>
                <p className="text-gray-300">Languages</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-purple-400">20,000+</p>
                <p className="text-gray-300">Live channels</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-400">100,000+</p>
                <p className="text-gray-300">Movies/Series</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Belgian Content */}
        <section id="belgian-content" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            5. Belgian TV Explained (For Integration)
          </h2>

          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Understanding the Belgian TV landscape:
            </h3>
            <p className="text-gray-300 mb-4">
              While you&apos;ll mainly watch channels from home, having access
              to Belgian TV helps with integration, language learning, and
              staying informed about local news and events.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  🇧🇪 Flemish channels (Dutch):
                </p>
                <p className="text-gray-300 text-sm mb-3">
                  Eén, Canvas (public), VTM, VIER, Play4-7 (commercial)
                </p>
                <p className="text-gray-400 text-xs">
                  Good for: Local news, Belgian football, Flemish series
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400 mb-2">
                  🇧🇪 Walloon channels (French):
                </p>
                <p className="text-gray-300 text-sm mb-3">
                  La Une, La Deux (public), RTL-TVI, Club RTL (commercial)
                </p>
                <p className="text-gray-400 text-xs">
                  Good for: French-language content, Walloon culture
                </p>
              </div>
            </div>
          </div>

          {/* Belgian sports */}
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Belgian Sports (Great for socializing with colleagues):
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/club brugge - champions league.png"
                  alt="Belgian football Club Brugge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/cycling/cycling-belgium.webp"
                  alt="Belgian cycling classics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/standard de liège players on the pitch.png"
                  alt="Standard Liège Belgian football"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/assets/sports/football/belgium/KRC Genk - people with jersey.png"
                  alt="Belgian football fans"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-300">
              • <strong>Football:</strong> Jupiler Pro League, Belgian Red
              Devils matches
              <br />• <strong>Cycling:</strong> Tour of Flanders,
              Liège-Bastogne-Liège
              <br />• <strong>All included</strong> with Eleven Sports channels
              (normally €24.95 extra)
            </p>
          </div>
        </section>

        {/* Section 6: Setup Guide */}
        <section id="setup" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            6. Setup Guide: Easier Than Making Belgian Waffles
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-900/20 border border-red-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">
                ❌ Proximus/Telenet Setup
              </h3>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li>1. Call and wait on hold (Dutch/French only)</li>
                <li>2. Schedule installation (2-3 weeks wait)</li>
                <li>3. Take day off work for technician</li>
                <li>4. Technician arrives (maybe)</li>
                <li>5. Drilling holes, running cables</li>
                <li>6. Pay €59-99 installation fee</li>
                <li>7. Discover most channels are Dutch/French</li>
                <li>8. Regret everything</li>
              </ol>
              <p className="text-red-400 font-bold mt-4">
                Total time: 2-3 weeks + lost workday
              </p>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                ✓ IPTV2Belgie Setup
              </h3>
              <ol className="space-y-2 text-gray-300 text-sm">
                <li>1. Order online (2 minutes)</li>
                <li>2. Receive login (10 minutes)</li>
                <li>3. Download IPTV Smarters app</li>
                <li>4. Enter your login details</li>
                <li>5. Start watching!</li>
                <li className="text-gray-500">6. -</li>
                <li className="text-gray-500">7. -</li>
                <li className="text-gray-500">8. -</li>
              </ol>
              <p className="text-emerald-400 font-bold mt-4">
                Total time: 10 minutes maximum
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Works on ALL your devices:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
              <div className="text-center">
                <div className="text-3xl mb-2">📺</div>
                <p>Smart TV</p>
                <p className="text-xs text-gray-500">Samsung, LG, Sony</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <p>Phone/Tablet</p>
                <p className="text-xs text-gray-500">iOS & Android</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <p>Computer</p>
                <p className="text-xs text-gray-500">Windows & Mac</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔥</div>
                <p>Streaming</p>
                <p className="text-xs text-gray-500">Firestick, Apple TV</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-600">
              <p className="text-blue-300 text-sm">
                💡 Pro tip: Most expats use it on their Smart TV in the living
                room and phone/tablet in bed. You can use up to 5 devices
                simultaneously!
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Legal */}
        <section id="legal" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            7. Is IPTV Legal? Yes, Here&apos;s Everything You Need to Know
          </h2>

          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Short answer:</strong> Yes, IPTV is
              completely legal in Belgium and the EU. You&apos;re paying for
              access to content, just like Netflix, Spotify, or YouTube Premium.
            </p>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">The key difference:</strong> Piracy
              means accessing content without paying. With IPTV2Belgie, you pay
              a monthly subscription for legal access to channels and content.
            </p>
            <div className="bg-green-900/20 border border-green-600 rounded-lg p-4">
              <p className="text-green-300">
                ✅ We operate transparently with VAT number, invoices, and
                official customer service. Just like any other legal streaming
                service in Belgium.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Common concerns addressed:
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-sky-400">
                  Q: &quot;But how can it be so cheap?&quot;
                </p>
                <p className="text-gray-300 text-sm">
                  No physical stores, no technicians, no expensive
                  infrastructure. We use existing internet, keeping costs 10x
                  lower than traditional cable.
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400">
                  Q: &quot;Will my ISP know or care?&quot;
                </p>
                <p className="text-gray-300 text-sm">
                  It&apos;s just regular internet traffic, like watching
                  YouTube. Your ISP doesn&apos;t care what legal streaming
                  services you use.
                </p>
              </div>
              <div>
                <p className="font-semibold text-sky-400">
                  Q: &quot;What about my employer?&quot;
                </p>
                <p className="text-gray-300 text-sm">
                  It&apos;s your personal home entertainment choice. As legal as
                  having Netflix or Spotify.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Testimonials */}
        <section id="testimonials" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            8. Join 5,000+ Happy Expats in Belgium
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/emma-avatar.jpeg"
                  alt="Emma British expat Belgium"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Emma Thompson</p>
                  <p className="text-gray-400 text-sm">
                    🇬🇧 British, Brussels (2 years)
                  </p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Finally can watch BBC and ITV! No more missing Strictly or
                Love Island. The kids have CBeebies, husband has Sky Sports. We
                save €100/month compared to our old setup. Brilliant!&quot;
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/thomas-avatar.jpeg"
                  alt="Thomas American expat Belgium"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Thomas Richardson</p>
                  <p className="text-gray-400 text-sm">
                    🇺🇸 American, Antwerp (1 year)
                  </p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;ESPN, HBO, all US channels work perfectly. No VPN needed!
                Setup took literally 5 minutes. Customer service actually speaks
                English. This is what I&apos;ve been looking for since moving
                here.&quot;
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/hans-avatar.jpeg"
                  alt="Hans German expat Belgium"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Hans Mueller</p>
                  <p className="text-gray-400 text-sm">
                    🇩🇪 German, Ghent (3 years)
                  </p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;All German channels plus Belgian ones to practice Dutch.
                Bundesliga, Formula 1, everything. Proximus wanted €95/month
                with no German channels. This is €19.99 for 2 screens.
                Unglaublich!&quot;
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/avatars/sophie-avatar.jpeg"
                  alt="Sophie French expat Belgium"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-white">Sophie Dubois</p>
                  <p className="text-gray-400 text-sm">
                    🇫🇷 French, Leuven (6 months)
                  </p>
                  <div className="text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Perfect for French expats! TF1, France 2, Canal+,
                everything. Plus I get Belgian channels to improve my Dutch.
                Support helped me set up in English. Magnifique!&quot;
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              What expats love most:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                • &quot;Finally, English-speaking support!&quot;
                <br />
                • &quot;All my home channels work perfectly&quot;
                <br />
                • &quot;No more VPN headaches&quot;
                <br />• &quot;Kids can watch their shows&quot;
              </div>
              <div>
                • &quot;Sports from home + Belgian football&quot;
                <br />
                • &quot;One app for everything&quot;
                <br />
                • &quot;Works when traveling too&quot;
                <br />• &quot;Saving €100+ every month&quot;
              </div>
            </div>
          </div>
        </section>

        {/* Extended FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Everything Else You&apos;re Wondering
          </h2>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🌍 &quot;I travel a lot. Will it work abroad?&quot;
              </h3>
              <p className="text-gray-300">
                Yes! Your subscription works worldwide. Watch Belgian TV from
                anywhere, or enjoy your home channels while traveling. Perfect
                for expats who travel for work.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                💳 &quot;How do I pay from my non-Belgian bank?&quot;
              </h3>
              <p className="text-gray-300">
                SEPA transfer works from any EU bank account. We also accept
                PayPal and even cryptocurrency if you prefer. Payment
                confirmation in 10 minutes.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🏠 &quot;What if I move back home or to another country?&quot;
              </h3>
              <p className="text-gray-300">
                No problem! No contract means you can cancel anytime. Plus, the
                service works worldwide, so you can keep it if you want. Many
                expats keep using it after leaving Belgium.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🌐 &quot;What internet speed do I need?&quot;
              </h3>
              <p className="text-gray-300">
                10 Mbps for HD, 25 Mbps for 4K. Belgian internet (Proximus
                fiber, Telenet, Orange) is more than enough. Even basic packages
                work perfectly.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🆘 &quot;What if I need help with setup?&quot;
              </h3>
              <p className="text-gray-300">
                24/7 English support via WhatsApp and Telegram. Most expats are
                watching within 10 minutes, but we&apos;re here if you need us.
                Average response time: 2 minutes.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-2">
                🎁 &quot;Can I try before committing?&quot;
              </h3>
              <p className="text-gray-300">
                Yes! 24-hour free trial to test everything. No credit card
                needed. We&apos;re confident you&apos;ll love it. 95% of trial
                users become customers.
              </p>
            </div>
          </div>
        </section>

        {/* Powerful conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">
            Your Choice: Keep Struggling or Start Enjoying
          </h2>

          <div className="bg-gray-800 rounded-xl p-8">
            <p className="text-lg text-gray-300 mb-6">
              You moved to Belgium for a better life, not to struggle with basic
              things like watching TV. You shouldn&apos;t have to choose between
              expensive cable you can&apos;t understand and juggling multiple
              streaming services with VPNs.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-900/20 border border-red-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-3">
                  Option 1: Status Quo
                </h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Keep paying €85+/month</li>
                  <li>• Watch 5% of available channels</li>
                  <li>• Miss shows from home</li>
                  <li>• Deal with Dutch/French support</li>
                  <li>• Stay frustrated</li>
                </ul>
              </div>

              <div className="bg-emerald-900/20 border border-emerald-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                  Option 2: Smart Choice
                </h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Pay only €9.99/month</li>
                  <li>• Watch channels from 100+ countries</li>
                  <li>• Enjoy everything from home</li>
                  <li>• Get support in English</li>
                  <li>• Save €900+ per year</li>
                </ul>
              </div>
            </div>

            <p className="text-xl text-white font-semibold text-center">
              5,000+ expats already made the switch. What are you waiting for?
            </p>
          </div>
        </section>

        {/* Final ultra-powerful CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-10 text-center border-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-white mb-4">
            🌍 EXPAT EXCLUSIVE: First Month €4.99
          </h2>
          <p className="text-2xl text-yellow-300 mb-4">
            That&apos;s less than a Belgian beer at a bar!
          </p>
          <p className="text-white text-lg mb-6">
            Test with all your favorite channels from home.
            <br />
            No commitment. Cancel anytime.
          </p>
          <p className="text-white mb-8">
            Join 5,000+ international residents who already switched
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-yellow-500 text-black px-10 py-5 rounded-lg text-xl font-black hover:bg-yellow-400 transition-all duration-300 shadow-2xl animate-pulse"
          >
            START WATCHING IN ENGLISH NOW →
          </Link>
          <p className="text-white mt-6">
            ✅ No contract • ✅ English support • ✅ Works in 10 minutes
          </p>
        </div>
      </div>
    </article>
  );
}
