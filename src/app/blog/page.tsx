import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog IPTV Belgique 2025 - Guides Économiser 900€/an | IPTV2Belgie',
  description:
    'Guides pratiques IPTV Belgique. Économisez 900€/an sur votre TV. Comparatifs Proximus vs Telenet. Installation, prix, alternatives. Articles FR, NL, EN.',
  keywords:
    'iptv belgique blog, iptv belgië gids, iptv belgium guide, proximus alternatief, telenet opzeggen, iptv installation, iptv sans decodeur',
  openGraph: {
    title: 'Blog IPTV2Belgie - Économisez 900€/an sur votre TV',
    description:
      'Guides complets pour économiser sur votre abonnement TV en Belgique. Articles en 3 langues.',
    url: 'https://www.iptv2belgie.be/blog',
    locale: 'fr_BE',
    type: 'website',
  },
};

export default function BlogIndex() {
  // Schema markup for blog collection with AggregateRating
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'IPTV Belgium Blog - Expert Guides',
    description:
      'Comprehensive guides about IPTV in Belgium, saving money on TV subscriptions',
    url: 'https://www.iptv2belgie.be/blog',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Article',
            headline: 'Comment Marc Économise €180/an Sans Décodeur',
            url: 'https://www.iptv2belgie.be/blog/installer-iptv-sans-decodeur-belgique',
            datePublished: '2025-01-20',
            dateModified: '2025-01-20',
            author: {
              '@type': 'Organization',
              name: 'IPTV2Belgie',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Article',
            headline: 'Pieter Bespaart €15/maand Zonder Decoder',
            url: 'https://www.iptv2belgie.be/blog/iptv-installeren-zonder-decoder-belgie',
            datePublished: '2025-01-20',
            dateModified: '2025-01-20',
            author: {
              '@type': 'Organization',
              name: 'IPTV2Belgie',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Article',
            headline: 'Prix IPTV Belgique 2025: Économisez 900€/an',
            url: 'https://www.iptv2belgie.be/blog/iptv-belgique-prix-comparatif-2025',
            datePublished: '2025-01-15',
            dateModified: '2025-01-15',
            author: {
              '@type': 'Organization',
              name: 'IPTV2Belgie',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Article',
            headline: 'IPTV België: Beter & Goedkoper dan Proximus en Telenet',
            url: 'https://www.iptv2belgie.be/blog/iptv-belgie-proximus-telenet-alternatief',
            datePublished: '2025-01-15',
            dateModified: '2025-01-15',
            author: {
              '@type': 'Organization',
              name: 'IPTV2Belgie',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Article',
            headline: 'Best IPTV Belgium for Expats 2025',
            url: 'https://www.iptv2belgie.be/blog/best-iptv-belgium-expats-guide',
            datePublished: '2025-01-15',
            dateModified: '2025-01-15',
            author: {
              '@type': 'Organization',
              name: 'IPTV2Belgie',
            },
          },
        },
        {
          '@type': 'ListItem',
          position: 6,
          item: {
            '@type': 'Article',
            headline: 'IPTV Smarters Pro Belgium Setup Guide',
            url: 'https://www.iptv2belgie.be/blog/iptv-smarters-pro-belgium-guide',
            datePublished: '2025-01-15',
            dateModified: '2025-01-15',
            author: {
              '@type': 'Organization',
              name: 'IPTV2Belgie',
            },
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '3427',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Blog IPTV Belgique
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Guides complets pour économiser 900€/an sur votre TV
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
          <div className="bg-gray-800 rounded-lg p-3 md:p-4 text-center">
            <p className="text-2xl md:text-3xl font-bold text-emerald-400">
              900€
            </p>
            <p className="text-gray-300 text-xs md:text-sm">Économie/an</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 md:p-4 text-center">
            <p className="text-2xl md:text-3xl font-bold text-sky-400">10K+</p>
            <p className="text-gray-300 text-xs md:text-sm">Clients</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 md:p-4 text-center">
            <p className="text-2xl md:text-3xl font-bold text-purple-400">
              100+
            </p>
            <p className="text-gray-300 text-xs md:text-sm">Pays</p>
          </div>
        </div>

        {/* NEW Featured Articles Section */}
        <section className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="text-xl md:text-2xl">⭐</span>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Nouveaux Articles / Nieuwe Artikelen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Link
              href="/blog/installer-iptv-sans-decodeur-belgique"
              className="group block"
            >
              <article className="bg-gradient-to-br from-sky-900/30 to-emerald-900/30 rounded-xl p-4 md:p-6 border border-sky-500/50 hover:border-sky-400 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
                    Marc Économise €180/an Sans Décodeur
                  </h3>
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded animate-pulse">
                    NOUVEAU
                  </span>
                </div>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  Histoire vraie: Comment Marc de Liège a viré son décodeur
                  Proximus et économise €15/mois.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sky-400 text-sm font-semibold">
                    Lire l&apos;histoire →
                  </span>
                  <span className="text-gray-500 text-xs">12 min lecture</span>
                </div>
              </article>
            </Link>

            <Link
              href="/blog/iptv-installeren-zonder-decoder-belgie"
              className="group block"
            >
              <article className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-xl p-4 md:p-6 border border-orange-500/50 hover:border-orange-400 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                    Pieter Bespaart €15/maand Zonder Decoder
                  </h3>
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded animate-pulse">
                    NIEUW
                  </span>
                </div>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  Het verhaal van Pieter uit Antwerpen die zijn Telenet decoder
                  terugbracht.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 text-sm font-semibold">
                    Verhaal lezen →
                  </span>
                  <span className="text-gray-500 text-xs">12 min leestijd</span>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* French Section */}
        <section className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="text-xl md:text-2xl">🇫🇷</span>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Articles en Français
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Link
              href="/blog/installer-iptv-sans-decodeur-belgique"
              className="group block"
            >
              <article className="bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-sky-500 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
                    Installer IPTV Sans Décodeur
                  </h3>
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                    €180/an
                  </span>
                </div>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  Guide complet pour installer IPTV sans décodeur sur Smart TV,
                  mobile et PC. 5 minutes chrono.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sky-400 text-sm font-semibold">
                    Lire le guide →
                  </span>
                  <span className="text-gray-500 text-xs">12 min lecture</span>
                </div>
              </article>
            </Link>

            <Link
              href="/blog/iptv-belgique-prix-comparatif-2025"
              className="group block"
            >
              <article className="bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-sky-500 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
                    Prix IPTV: Économisez 900€/an
                  </h3>
                  <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded">
                    Guide 2025
                  </span>
                </div>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  Comparatif complet des prix TV en Belgique. Proximus vs
                  Telenet vs IPTV2Belgie. Calculateur d&apos;économies inclus.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sky-400 text-sm font-semibold">
                    Lire l&apos;article →
                  </span>
                  <span className="text-gray-500 text-xs">10 min lecture</span>
                </div>
              </article>
            </Link>

            <Link
              href="/blog/iptv-belgique-2025-guide-complet"
              className="group block"
            >
              <article className="bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-sky-500 transition-all duration-300 h-full">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white group-hover:text-sky-400 transition-colors">
                  Guide Complet IPTV Belgique
                </h3>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  Installation en 10 minutes, légalité, et meilleurs services
                  2025. Tout ce qu&apos;il faut savoir.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sky-400 text-sm font-semibold">
                    Lire l&apos;article →
                  </span>
                  <span className="text-gray-500 text-xs">8 min lecture</span>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Dutch Section */}
        <section className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="text-xl md:text-2xl">🇳🇱</span>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              Nederlandse Artikelen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Link
              href="/blog/iptv-installeren-zonder-decoder-belgie"
              className="group block"
            >
              <article className="bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    IPTV Zonder Decoder Installeren
                  </h3>
                  <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
                    €180/jaar
                  </span>
                </div>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  Complete gids: IPTV installeren zonder dure decoder. Direct op
                  Smart TV, tablet, telefoon.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-sm font-semibold">
                    Gids lezen →
                  </span>
                  <span className="text-gray-500 text-xs">12 min leestijd</span>
                </div>
              </article>
            </Link>

            <Link
              href="/blog/iptv-belgie-proximus-telenet-alternatief"
              className="group block"
            >
              <article className="bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    Beter dan Proximus & Telenet
                  </h3>
                  <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded">
                    Gids 2025
                  </span>
                </div>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  Stop met €85/maand betalen. Ontdek het slimme alternatief.
                  Bespaar €900 per jaar.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-sm font-semibold">
                    Artikel lezen →
                  </span>
                  <span className="text-gray-500 text-xs">10 min leestijd</span>
                </div>
              </article>
            </Link>

            <Link
              href="/blog/iptv-belgie-2025-complete-gids"
              className="group block"
            >
              <article className="bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300 h-full">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  Complete IPTV België Gids
                </h3>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  Alles over IPTV: legaliteit, installatie, beste services 2025.
                  Compleet overzicht.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-sm font-semibold">
                    Artikel lezen →
                  </span>
                  <span className="text-gray-500 text-xs">8 min leestijd</span>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* English Section */}
        <section className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="text-xl md:text-2xl">🇬🇧</span>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              English Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Link
              href="/blog/best-iptv-belgium-expats-guide"
              className="group block"
            >
              <article className="bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    IPTV for Expats in Belgium
                  </h3>
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                    Guide 2025
                  </span>
                </div>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  Watch TV from 100+ countries. BBC, Sky, CNN and more. Perfect
                  for internationals.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm font-semibold">
                    Read article →
                  </span>
                  <span className="text-gray-500 text-xs">10 min read</span>
                </div>
              </article>
            </Link>

            <Link
              href="/blog/iptv-smarters-pro-belgium-guide"
              className="group block"
            >
              <article className="bg-slate-800 rounded-xl p-4 md:p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-2 md:mb-3">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    IPTV Smarters Pro Setup
                  </h3>
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    Tutorial
                  </span>
                </div>
                <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                  Complete installation guide for Belgium. Step-by-step setup in
                  10 minutes.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 text-sm font-semibold">
                    Read guide →
                  </span>
                  <span className="text-gray-500 text-xs">5 min read</span>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="mb-8 md:mb-12 pb-8 border-b border-gray-700">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
            Sujets Populaires / Populaire Onderwerpen
          </h2>

          <div className="flex flex-wrap gap-2 md:gap-3">
            <span className="bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-gray-300 border border-gray-700 text-sm hover:border-sky-500 transition-colors">
              💰 Prix / Prijzen
            </span>
            <span className="bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-gray-300 border border-gray-700 text-sm hover:border-sky-500 transition-colors">
              📺 Proximus
            </span>
            <span className="bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-gray-300 border border-gray-700 text-sm hover:border-sky-500 transition-colors">
              🌍 Expats
            </span>
            <span className="bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-gray-300 border border-gray-700 text-sm hover:border-sky-500 transition-colors">
              📦 Sans Décodeur
            </span>
            <span className="bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-gray-300 border border-gray-700 text-sm hover:border-sky-500 transition-colors">
              🎬 Netflix
            </span>
            <span className="bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-gray-300 border border-gray-700 text-sm hover:border-sky-500 transition-colors">
              📱 Installation
            </span>
            <span className="bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-gray-300 border border-gray-700 text-sm hover:border-sky-500 transition-colors">
              🔧 Telenet
            </span>
            <span className="bg-gray-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-gray-300 border border-gray-700 text-sm hover:border-sky-500 transition-colors">
              ✅ Légal / Legaal
            </span>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-sky-600 to-emerald-600 rounded-xl p-6 md:p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            Prêt à économiser 900€/an?
          </h2>
          <p className="text-white mb-4 md:mb-6 text-sm md:text-base">
            Klaar om €900/jaar te besparen? • Ready to save €900/year?
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-white text-sky-600 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Voir nos prix / Bekijk onze prijzen →
          </Link>
        </div>
      </div>
    </div>
  );
}
