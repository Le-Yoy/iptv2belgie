// src/components/ui/FloatingTelegram.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FloatingTelegramProps {
  language: 'nl-BE' | 'fr-BE' | 'en';
}

export default function FloatingTelegram({ language }: FloatingTelegramProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const telegramUrl = "https://t.me/iptv2belgie_support";

  const messages = {
    'nl-BE': 'Support 24/7',
    'fr-BE': 'Support 24/7',
    'en': 'Support 24/7'
  };

  if (!isVisible) return null;

  return (
    <motion.a
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-sky-500 to-sky-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-3 hover:shadow-xl transition-all duration-300"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-1.908 7.937-2.697 9.372-.335.607-.502.607-.67.636-.377.061-.664-.246-.664-.246l-3.040-2.369s-.359-.269-.391-.837c-.033-.569.4-.861.4-.861l7.822-6.062c.115-.061.23-.027.281.061.052.089.018.185-.098.245l-6.282 5.656s-.292.412.22.569l3.853 2.462s.486.197.518-.169c.18-1.536 1.683-7.351 1.683-7.351s.09-.559-.433-.679c-.135-.03-.602.03-.602.03z"/>
      </svg>
      <span className="font-medium">{messages[language]}</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
    </motion.a>
  );
}