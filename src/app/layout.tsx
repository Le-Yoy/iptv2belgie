// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthHandler from '@/components/AuthHandler';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
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
    url: 'https://iptv2belgie.be',
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-900 text-white antialiased`}
      >
        <AuthHandler />
        {children}
      </body>
    </html>
  );
}
