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
  title: 'IPTV Belgique & België €6.90 | Alternative Proximus Telenet',
  description:
    'IPTV Belgique et België. Alternative à Proximus TV, Telenet. 50.000+ chaînes 4K/8K, Netflix Disney+ inclus. €6.90/mois. Économisez 900€/an.',
  keywords:
    'iptv belgique, iptv belgie, abonnement iptv belgique, proximus alternative, telenet alternatief, streaming belgique',
  authors: [{ name: 'IPTV2Belgie' }],
  alternates: {
    canonical: 'https://www.iptv2belgie.be',
    languages: {
      'fr-BE': 'https://www.iptv2belgie.be',
      'nl-BE': 'https://www.iptv2belgie.be',
      en: 'https://www.iptv2belgie.be',
    },
  },
  openGraph: {
    title: 'IPTV Belgique - Alternative Proximus & Telenet €6.90',
    description:
      '50.000+ chaînes, tous les sports, Netflix inclus. Installation 10 minutes. Économisez 900€/an.',
    url: 'https://www.iptv2belgie.be',
    siteName: 'IPTV2Belgie',
    images: [
      {
        url: 'https://www.iptv2belgie.be/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IPTV Belgique - Service Premium',
      },
    ],
    locale: 'fr_BE',
    alternateLocale: ['nl_BE', 'en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Belgique €6.90 - 50.000+ Chaînes 4K',
    description:
      'Alternative Proximus et Telenet. Installation directe, sans contrat.',
    images: ['https://www.iptv2belgie.be/og-image.jpg'],
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
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.iptv2belgie.be/#organization',
    name: 'IPTV2Belgie',
    url: 'https://www.iptv2belgie.be',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.iptv2belgie.be/favicon.svg',
      width: 512,
      height: 512,
    },
    image: 'https://www.iptv2belgie.be/og-image.jpg',
    description:
      'Premium IPTV service in Belgium. Alternative to Proximus and Telenet.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BE',
      addressLocality: 'Brussels',
    },
    sameAs: ['https://t.me/iptv2belgie', 'https://wa.me/32123456789'],
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
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
        '@id': 'https://www.iptv2belgie.be/#organization',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '3427',
      bestRating: '5',
      worstRating: '1',
    },
    description: 'Stream 50.000+ channels and 100.000+ VOD in 4K/8K quality.',
    screenshot: 'https://www.iptv2belgie.be/og-image.jpg',
    featureList: [
      '50.000+ Live Channels',
      '100.000+ Movies & Series',
      '4K/8K Quality',
      'No Buffering',
      '24/7 Support',
      'All Devices',
    ],
    softwareVersion: '3.0',
    datePublished: '2021-01-01',
    dateModified: '2025-01-15',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.iptv2belgie.be/#organization',
    },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
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
