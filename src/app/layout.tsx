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
  title: 'IPTV2Belgie - 50,000+ Kanalen in 4K/8K | Premium IPTV Service',
  description:
    "België's #1 IPTV service met 50,000+ kanalen in 4K/8K kwaliteit. Netflix, Disney+, Sport & meer. Setup in 10 minuten. Geen contracten. Vanaf €6/maand.",
  keywords:
    'IPTV, IPTV België, IPTV Belgie, IPTV Netherlands, IPTV France, 4K streaming, sports streaming, Netflix, Disney+, Proximus, Telenet',
  authors: [{ name: 'IPTV2Belgie' }],
  openGraph: {
    title: 'IPTV2Belgie - Premium IPTV Service',
    description:
      '50,000+ kanalen in 4K/8K. Alle sporten, films & series. Vanaf €6/maand.',
    url: 'https://www.iptv2belgie.be',
    siteName: 'IPTV2Belgie',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IPTV2Belgie - Premium IPTV Service',
      },
    ],
    locale: 'nl_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV2Belgie - 50,000+ Kanalen in 4K/8K',
    description: 'Premium IPTV service met directe setup. Vanaf €6/maand.',
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
  // Schema.org structured data for IPTV service
  const jsonLdSchema = {
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
      'Stream 50,000+ kanalen en 100,000+ VOD content in 4K/8K kwaliteit',
    screenshot: 'https://www.iptv2belgie.be/og-image.jpg',
    featureList: [
      '50,000+ Live Kanalen',
      '100,000+ Films & Series',
      '4K/8K Kwaliteit',
      'Geen Buffering',
      '24/7 Support',
      'Werkt op alle apparaten',
    ],
    softwareVersion: '3.0',
    datePublished: '2021-01-01',
    dateModified: '2025-01-15',
  };

  return (
    <html lang="nl" className="scroll-smooth">
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
