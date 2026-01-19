// src/app/page.tsx - IPTV2Belgie Variant
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/hero/HeroSection';
import WhyUsSection from '@/components/conversion/WhyUsSection';
import ProofSection from '@/components/conversion/ProofSection';
import ChannelLogos from '@/components/content/ChannelLogos';
import MovieCarousel from '@/components/content/MovieCarousel';
import SportsSection from '@/components/content/SportsSection';
import TestimonialSection from '@/components/social/TestimonialSection';
import QuickEmailCapture from '@/components/forms/QuickEmailCapture';
import DynamicPricing from '@/components/pricing/DynamicPricing';
import FAQSection from '@/components/faq/FAQSection';
import Footer from '@/components/footer/Footer';
import FloatingTelegram from '@/components/ui/FloatingTelegram';
import EmailSuccessNotification from '@/components/ui/EmailSuccessNotification';

type Language = 'nl-BE' | 'fr-BE' | 'en';

// Loading component
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="text-white font-medium text-lg">
          IPTV2Belgie laden...
        </span>
      </div>
    </div>
  );
}

// Main content component
function HomeContent() {
  const [language, setLanguage] = useState<Language>('fr-BE');
  const [isLoading, setIsLoading] = useState(true);
  const [showEmailSuccess, setShowEmailSuccess] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const detectLanguage = () => {
      const urlLang = searchParams.get('lang');

      // URL parameter takes absolute priority
      if (urlLang && ['nl-BE', 'fr-BE', 'en'].includes(urlLang)) {
        return urlLang as Language;
      }

      // Browser language detection FIRST
      if (typeof navigator !== 'undefined') {
        // Get browser language preference
        const browserLang =
          navigator.language || navigator.languages?.[0] || '';
        const lowerLang = browserLang.toLowerCase();

        // Direct language matching
        if (lowerLang.startsWith('fr')) {
          return 'fr-BE';
        }
        if (lowerLang.startsWith('nl') || lowerLang === 'nl-be') {
          return 'nl-BE';
        }
        if (lowerLang.startsWith('en')) {
          return 'en';
        }

        // Check all languages in preference order
        if (navigator.languages && navigator.languages.length > 0) {
          for (const lang of navigator.languages) {
            const lower = lang.toLowerCase();
            if (lower.startsWith('fr')) return 'fr-BE';
            if (lower.startsWith('nl')) return 'nl-BE';
            if (lower.startsWith('en')) return 'en';
          }
        }
      }

      // Domain detection as secondary fallback
      const hostname = window.location.hostname;
      if (hostname.includes('belgique')) {
        return 'fr-BE';
      }
      if (hostname.includes('belgie')) {
        return 'nl-BE';
      }
      if (hostname.includes('belgium')) {
        return 'en';
      }

      // Default to French (most universal in Belgium)
      return 'fr-BE';
    };

    const detectedLanguage = detectLanguage();
    setLanguage(detectedLanguage);

    // Update URL to show language parameter
    if (!searchParams.get('lang')) {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', detectedLanguage);
      window.history.replaceState({}, '', url.toString());
    }

    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.replaceState({}, '', url.toString());

    // Store preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', newLang);
    }

    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'language_change', {
        event_category: 'engagement',
        event_label: newLang,
      });
    }
  };

  const handleEmailCapture = (email: string) => {
    // Store email in localStorage for persistence
    localStorage.setItem('captured_email', email);
    localStorage.setItem('capture_date', new Date().toISOString());

    // Show success notification
    setShowEmailSuccess(true);
    setTimeout(() => setShowEmailSuccess(false), 5000);

    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'email_capture', {
        event_category: 'conversion',
        event_label: 'email_form',
      });
    }
  };

  // Check for stored language preference
  useEffect(() => {
    const storedLang = localStorage.getItem('preferredLanguage');
    if (
      storedLang &&
      ['nl-BE', 'fr-BE', 'en'].includes(storedLang) &&
      !searchParams.get('lang')
    ) {
      setLanguage(storedLang as Language);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', storedLang);
      window.history.replaceState({}, '', url.toString());
    }
  }, [searchParams]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'IPTV2Belgie',
            url: 'https://www.iptv2belgie.be',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate:
                  'https://www.iptv2belgie.be/?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
            publisher: {
              '@type': 'Organization',
              name: 'IPTV2Belgie',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.iptv2belgie.be/favicon.svg',
              },
            },
          }),
        }}
      />
      <div className="min-h-screen bg-slate-900">
        {/* Header */}
        <Header
          currentLang={language}
          onLanguageChange={handleLanguageChange}
        />

        {/* Main Content */}
        <main>
          <section id="hero">
            <HeroSection
              language={language}
              onEmailCapture={handleEmailCapture}
            />
          </section>

          <section id="why-us">
            <WhyUsSection language={language} />
          </section>

          <section id="channels">
            <ChannelLogos language={language} />
          </section>

          <section id="movies">
            <MovieCarousel language={language} />
          </section>

          <section id="sports">
            <SportsSection language={language} />
          </section>

          <section id="testimonials">
            <TestimonialSection language={language} />
          </section>

          <section id="email-capture">
            <QuickEmailCapture
              language={language}
              onEmailCapture={handleEmailCapture}
            />
          </section>

          <section id="pricing">
            <DynamicPricing
              language={language}
              onEmailCapture={handleEmailCapture}
            />
          </section>

          <section id="proof">
            <ProofSection language={language} />
          </section>

          <section id="faq">
            <FAQSection language={language} />
          </section>
        </main>

        {/* Footer */}
        <Footer language={language} onLanguageChange={handleLanguageChange} />

        {/* Floating Elements */}
        <FloatingTelegram language={language} />
        <ScrollToTopButton />

        {/* Email Success Notification */}
        {showEmailSuccess && <EmailSuccessNotification language={language} />}
      </div>
    </>
  );
}

// Scroll to top button
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-sky-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeContent />
    </Suspense>
  );
}
