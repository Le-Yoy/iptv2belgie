// src/components/content/MovieCarousel.tsx - Dutch Variant
'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MovieCarouselProps {
  language: 'nl-BE' | 'fr-BE' | 'en';
}

const movieSections = [
  {
    id: 'dutch-content',
    title: {
      'nl-BE': 'Nederlandse Series & Films',
      'fr-BE': 'Séries & Films Néerlandais',
      en: 'Dutch Series & Movies',
    },
    movies: [
      '/assets/movie_posters/countries/belgium/Cargo- belgium.png',
      '/assets/movie_posters/countries/belgium/The shift- belgium.png',
      '/assets/movie_posters/countries/belgium/torpedo berlin- belgium.png',
      '/assets/movie_posters/countries/belgie/DETWAALF belgie.png',
      '/assets/movie_posters/countries/france/montecristo - france.png',
      '/assets/movie_posters/countries/france/trois mousquetaires - france.png',
    ],
  },
  {
    id: 'streaming-hits',
    title: {
      'nl-BE': 'Streaming Toppers',
      'fr-BE': 'Tops du Streaming',
      en: 'Streaming Hits',
    },
    movies: [
      '/assets/movie_posters/general/netflix/squid game netflix.png',
      '/assets/movie_posters/general/netflix/money heist netflix.png',
      '/assets/movie_posters/general/netflix/the crown netflix.png',
      '/assets/movie_posters/general/netflix/emily in paris netflix.png',
      '/assets/movie_posters/general/apple/ted lasso appletv.png',
      '/assets/movie_posters/general/apple/severance apple.png',
    ],
  },
  {
    id: 'kids-family',
    title: {
      'nl-BE': 'Kids & Familie',
      'fr-BE': 'Enfants & Famille',
      en: 'Kids & Family',
    },
    movies: [
      '/assets/movie_posters/general/disney/mandalorian disney.png',
      '/assets/movie_posters/general/disney/loki disney.png',
      '/assets/movie_posters/general/disney/ahsoka disney.png',
      '/assets/movie_posters/general/disney/for perc jackson disney.png',
      '/assets/movie_posters/general/movies/x men general.png',
      '/assets/movie_posters/general/movies/blade movie.png',
    ],
  },
];

export default function MovieCarousel({ language }: MovieCarouselProps) {
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollLeft = (sectionId: string) => {
    const container = scrollRefs.current[sectionId];
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = (sectionId: string) => {
    const container = scrollRefs.current[sectionId];
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {language === 'nl-BE'
              ? 'Onbeperkt Entertainment'
              : language === 'fr-BE'
                ? 'Divertissement Illimité'
                : 'Unlimited Entertainment'}
          </h2>
          <p className="text-xl text-gray-400">
            {language === 'nl-BE'
              ? '50,000+ films en series direct beschikbaar'
              : language === 'fr-BE'
                ? '50,000+ films et séries disponibles'
                : '50,000+ movies and series available'}
          </p>
        </motion.div>

        {/* Movie Sections */}
        <div className="space-y-12">
          {movieSections.map((section, sectionIndex) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveSection(section.id)}
              onHoverEnd={() => setActiveSection(null)}
            >
              {/* Section Title with Navigation */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  {section.title[language]}
                  {activeSection === section.id && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-sm px-3 py-1 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full"
                    >
                      HD/4K
                    </motion.span>
                  )}
                </h3>

                {/* Navigation Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => scrollLeft(section.id)}
                    className="p-2.5 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl transition-all backdrop-blur-sm border border-slate-600"
                    aria-label="Scroll left"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollRight(section.id)}
                    className="p-2.5 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl transition-all backdrop-blur-sm border border-slate-600"
                    aria-label="Scroll right"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Movie Carousel */}
              <div className="relative">
                <div
                  ref={(el) => {
                    scrollRefs.current[section.id] = el;
                  }}
                  className="flex gap-4 overflow-x-auto scroll-smooth-touch no-scrollbar pb-4"
                >
                  {section.movies.map((movie, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true, amount: 0.3 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="flex-shrink-0 cursor-pointer group"
                    >
                      <div className="relative w-[160px] sm:w-[180px] lg:w-[200px] aspect-[2/3] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-sky-500/20 transition-all duration-300">
                        <Image
                          src={movie}
                          alt="Movie poster"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 200px"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <button
                              onClick={scrollToPricing}
                              className="w-full py-2 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                            >
                              {language === 'nl-BE'
                                ? 'Bekijken'
                                : language === 'fr-BE'
                                  ? 'Regarder'
                                  : 'Watch'}
                            </button>
                          </div>
                        </div>
                        {/* Quality Badge */}
                        <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs font-bold text-white">
                          4K
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            {language === 'nl-BE'
              ? '+50,000 tevreden kijkers'
              : language === 'fr-BE'
                ? '+50,000 spectateurs satisfaits'
                : '+50,000 happy viewers'}
          </p>
          <button onClick={scrollToPricing} className="btn-premium text-lg">
            {language === 'nl-BE'
              ? 'Start Nu Met Kijken →'
              : language === 'fr-BE'
                ? 'Commencer à Regarder →'
                : 'Start Watching Now →'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
