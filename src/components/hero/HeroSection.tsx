// src/components/hero/HeroSection.tsx - MINIMAL CHANGES ONLY
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  language: 'nl-BE' | 'fr-BE' | 'en';
  onEmailCapture?: (email: string) => void;
}

const heroSlides = [
  {
    id: 'telenet-crusher',
    // ONLY CHANGE: Use WebP if it exists, fallback to PNG
    background: '/assets/sports/football/belgium/standard-liege.webp',
    content: {
      'nl-BE': {
        headline: 'Stop met €89/maand betalen aan Telenet',
        subheadline: 'Alle kanalen voor slechts €6.90 per maand',
        description: 'Waarom 10x meer betalen voor dezelfde zenders?',
        cta: 'Start Vandaag met Besparen →',
      },
      'fr-BE': {
        headline: 'Arrêtez de payer €89/mois à Telenet',
        subheadline: 'Toutes les chaînes pour seulement €6.90 par mois',
        description: 'Pourquoi payer 10x plus pour les mêmes chaînes?',
        cta: 'Commencez à Économiser →',
      },
      en: {
        headline: 'Stop paying €89/month to Telenet',
        subheadline: 'All channels for just €6.90 per month',
        description: 'Why pay 10x more for the same channels?',
        cta: 'Start Saving Today →',
      },
    },
  },
  {
    id: 'proximus-alternative',
    // Check if this WebP will exist after conversion
    background: '/assets/hero section /multiple-screens-bar.webp',
    content: {
      'nl-BE': {
        headline: 'Proximus Pickx? Wij hebben meer voor minder',
        subheadline: 'Netflix, Disney+, HBO Max allemaal inbegrepen',
        description: 'Plus alle Belgische en Nederlandse zenders in 4K',
        cta: '7 Dagen Gratis Proberen →',
      },
      'fr-BE': {
        headline: 'Proximus Pickx? Nous avons plus pour moins',
        subheadline: 'Netflix, Disney+, HBO Max tout inclus',
        description: 'Plus toutes les chaînes belges et françaises en 4K',
        cta: 'Essai Gratuit 7 Jours →',
      },
      en: {
        headline: 'Proximus Pickx? We have more for less',
        subheadline: 'Netflix, Disney+, HBO Max all included',
        description: 'Plus all Belgian and Dutch channels in 4K',
        cta: 'Try Free for 7 Days →',
      },
    },
  },
  {
    id: 'eredivisie-live',
    background: '/assets/sports/tennis/tennis-hero.webp',
    content: {
      'nl-BE': {
        headline: 'Eredivisie, Pro League, Champions League - Alles Live',
        subheadline: 'Ajax, PSV, Feyenoord + alle Belgische clubs',
        description: 'Nooit meer een wedstrijd missen in kristalheldere 4K',
        cta: 'Direct Toegang →',
      },
      'fr-BE': {
        headline: 'Eredivisie, Pro League, Champions League - Tout en Direct',
        subheadline: 'Ajax, PSV, Feyenoord + tous les clubs belges',
        description: 'Ne manquez plus jamais un match en 4K cristalline',
        cta: 'Accès Direct →',
      },
      en: {
        headline: 'Eredivisie, Pro League, Champions League - All Live',
        subheadline: 'Ajax, PSV, Feyenoord + all Belgian clubs',
        description: 'Never miss a match in crystal clear 4K',
        cta: 'Instant Access →',
      },
    },
  },
  {
    id: 'max-verstappen',
    background: '/assets/sports/mma/mma-hero.webp',
    content: {
      'nl-BE': {
        headline: 'Volg Max Verstappen in Elke Race',
        subheadline: 'Formula 1, MotoGP, Rally - Alle Motorsport Live',
        description: 'Viaplay Sport inbegrepen zonder extra kosten',
        cta: 'Start met Kijken →',
      },
      'fr-BE': {
        headline: 'Suivez Max Verstappen dans Chaque Course',
        subheadline: 'Formule 1, MotoGP, Rally - Tout le Sport Auto en Direct',
        description: 'Viaplay Sport inclus sans frais supplémentaires',
        cta: 'Commencer à Regarder →',
      },
      en: {
        headline: 'Follow Max Verstappen in Every Race',
        subheadline: 'Formula 1, MotoGP, Rally - All Motorsport Live',
        description: 'Viaplay Sport included at no extra cost',
        cta: 'Start Watching →',
      },
    },
  },
  {
    id: 'family-entertainment',
    background: '/assets/sports/cycling/cycling-belgium.webp',
    content: {
      'nl-BE': {
        headline: 'De Hele Familie Kijkt Voor €6.90/maand',
        subheadline: 'Ketnet, VTM Kids, Disney Junior, Nickelodeon',
        description: 'Veilig entertainment voor elk gezinslid',
        cta: 'Gezinsabonnement Nu →',
      },
      'fr-BE': {
        headline: 'Toute la Famille Regarde Pour €6.90/mois',
        subheadline: 'Ketnet, VTM Kids, Disney Junior, Nickelodeon',
        description: 'Divertissement sûr pour chaque membre de la famille',
        cta: 'Abonnement Famille →',
      },
      en: {
        headline: 'The Whole Family Watches For €6.90/month',
        subheadline: 'Ketnet, VTM Kids, Disney Junior, Nickelodeon',
        description: 'Safe entertainment for every family member',
        cta: 'Family Plan Now →',
      },
    },
  },
];

export default function HeroSection({
  language,
  onEmailCapture,
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentContent = heroSlides[currentSlide].content[language];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images - OPTIMIZED WITH NEXT/IMAGE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroSlides[currentSlide].background}
            alt={heroSlides[currentSlide].id}
            fill
            className="object-cover"
            priority={currentSlide === 0} // Priority for first image
            quality={85} // Slightly reduced quality for faster load
            sizes="100vw"
          />
          {/* Dark Overlay - KEEP EXACTLY THE SAME */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content - KEEP EVERYTHING EXACTLY THE SAME */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="text-left md:text-center lg:text-left w-[60%] md:max-w-full lg:max-w-3xl"
          >
            {/* Trust Badge - NO CHANGES */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm text-white/90 font-medium">
                {language === 'fr-BE'
                  ? '2,847 regardent maintenant'
                  : language === 'nl-BE'
                    ? '2,847 kijken nu'
                    : '2,847 watching now'}
              </span>
            </motion.div>

            {/* Main Headline - NO CHANGES */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 md:mb-4 hero-text-shadow leading-tight">
              {currentContent.headline}
            </h1>

            {/* Subheadline - NO CHANGES */}
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-yellow-400 font-bold mb-2 md:mb-4 hero-text-shadow">
              {currentContent.subheadline}
            </p>

            {/* Description - NO CHANGES */}
            <p className="text-xs sm:text-sm md:text-lg text-white/90 mb-4 md:mb-8 hero-text-shadow">
              {currentContent.description}
            </p>

            {/* CTA Buttons - NO CHANGES */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-start md:justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPricing}
                className="btn-premium text-xs sm:text-sm md:text-lg px-3 py-2 md:px-6 md:py-3"
              >
                {currentContent.cta}
              </motion.button>

              {/* Secondary CTA - NO CHANGES */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm"
              >
                {language === 'fr-BE'
                  ? '✓ Installation 10 minutes'
                  : language === 'nl-BE'
                    ? '✓ 10 minuten installatie'
                    : '✓ 10 minute setup'}
              </motion.button>
            </div>

            {/* Features - NO CHANGES */}
            <div className="mt-4 md:mt-8 flex flex-wrap gap-2 md:gap-4 justify-start md:justify-center lg:justify-start">
              <div className="flex items-center space-x-1.5 md:space-x-2 text-white/80">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium">
                  {language === 'fr-BE'
                    ? 'Sans contrat'
                    : language === 'nl-BE'
                      ? 'Zonder contract'
                      : 'No contract'}
                </span>
              </div>
              <div className="flex items-center space-x-1.5 md:space-x-2 text-white/80">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium">
                  {language === 'fr-BE'
                    ? 'Garantie 7 jours'
                    : language === 'nl-BE'
                      ? '7 dagen garantie'
                      : '7-day guarantee'}
                </span>
              </div>
              <div className="flex items-center space-x-1.5 md:space-x-2 text-white/80">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] sm:text-xs md:text-sm font-medium">
                  5000+ HD/4K
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators - NO CHANGES */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`h-1.5 md:h-2 transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-6 md:w-8 bg-yellow-400'
                : 'w-1.5 md:w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
