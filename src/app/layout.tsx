// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Arial',
    'sans-serif',
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iptv2belgie.be'),
  // OPTIMIZED: Added "IPTV Belgique" (3,600 volume) and addressed "amende" concern
  title: 'IPTV Belgique & België €6.90 | Alternative Proximus Telenet',
  // OPTIMIZED: Front-loaded with highest volume keywords, addresses legal concerns
  description:
    'IPTV Belgique et IPTV België sans amende. Alternative à Proximus TV, Telenet, streaming légal. 50.000+ chaînes 4K/8K, Netflix Disney+ inclus. €6.90/mois.',
  // OPTIMIZED: Removed redundant keywords, added high-volume terms from SEMrush
  keywords:
    'iptv belgique, iptv belgie, iptv belgique amende, abonnement iptv belgique, iptv belgique legal, proximus tv alternatief, telenet opzeggen, streaming belgique, iptv abonnement, proximus streaming',
  authors: [{ name: 'IPTV2Belgie' }],
  alternates: {
    canonical: 'https://www.iptv2belgie.be',
    languages: {
      'fr-BE': 'https://www.iptv2belgie.be',
      'nl-BE': 'https://www.iptv2belgie.be',
    },
  },
  openGraph: {
    title: 'IPTV Belgique - Alternative Proximus & Telenet €6.90',
    description:
      'IPTV légal en Belgique. 50.000+ chaînes, tous les sports, Netflix inclus. Installation 10 minutes.',
    url: 'https://www.iptv2belgie.be',
    siteName: 'IPTV2Belgie',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IPTV Belgique - Service Premium',
      },
    ],
    locale: 'fr_BE', // Changed to French for higher volume
    alternateLocale: ['nl_BE', 'en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Belgique €6.90 - 50.000+ Chaînes 4K',
    description:
      'Alternative Proximus et Telenet. Installation directe, sans contrat.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enhanced Schema with FAQ for "amende" concerns
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'IPTV2Belgie Player',
        operatingSystem:
          'Android, iOS, Windows, MacOS, Smart TV, Fire Stick, Android Box',
        applicationCategory: 'EntertainmentApplication',
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '6.90',
          highPrice: '16.90',
          priceCurrency: 'EUR',
          offerCount: '4',
          availability: 'https://schema.org/InStock',
          priceValidUntil: '2025-12-31',
          seller: {
            '@type': 'Organization',
            name: 'IPTV2Belgie',
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '3427',
          bestRating: '5',
          worstRating: '1',
        },
        description:
          'IPTV Belgique et België. Stream 50.000+ chaînes et 100.000+ VOD en 4K/8K.',
        screenshot: 'https://www.iptv2belgie.be/og-image.jpg',
        featureList: [
          '50.000+ Chaînes Live',
          '100.000+ Films & Séries',
          'Qualité 4K/8K',
          'Sans Buffering',
          'Support 24/7',
          'Tous les appareils',
        ],
        softwareVersion: '3.0',
        datePublished: '2021-01-01',
        dateModified: '2025-01-15',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'IPTV Belgique amende - est-ce légal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Notre service IPTV respecte les normes européennes de streaming. Nous opérons comme alternative légale à Proximus et Telenet.',
            },
          },
          {
            '@type': 'Question',
            name: 'Combien coûte IPTV Belgique?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "IPTV Belgique commence à €6.90 par mois pour 1 appareil, jusqu'à €16.90 pour 5 appareils. Moins cher que Proximus TV et Telenet.",
            },
          },
          {
            '@type': 'Question',
            name: 'Comment remplacer Proximus TV?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'IPTV2Belgie remplace complètement Proximus TV avec plus de chaînes pour 90% moins cher. Installation en 10 minutes.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body
        className={`${inter.className} bg-slate-900 text-white antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
