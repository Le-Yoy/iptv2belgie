// src/components/forms/QuickEmailCapture.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface QuickEmailCaptureProps {
  language: 'nl-BE' | 'fr-BE' | 'en';
  onEmailCapture?: (email: string) => void;
}

export default function QuickEmailCapture({
  language,
  onEmailCapture,
}: QuickEmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && onEmailCapture) {
      onEmailCapture(email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const content = {
    'nl-BE': {
      title: 'Probeer 7 Dagen Gratis',
      subtitle: 'Geen creditcard nodig • Annuleer wanneer u wilt',
      placeholder: 'Vul uw e-mailadres in',
      button: 'Start Gratis Proefperiode',
      success: '✅ Check uw e-mail voor toegang!',
    },
    'fr-BE': {
      title: 'Essayez 7 Jours Gratuits',
      subtitle: 'Pas de carte de crédit • Annulez quand vous voulez',
      placeholder: 'Entrez votre email',
      button: "Commencer l'essai gratuit",
      success: "✅ Vérifiez votre email pour l'accès!",
    },
    en: {
      title: 'Try 7 Days Free',
      subtitle: 'No credit card needed • Cancel anytime',
      placeholder: 'Enter your email',
      button: 'Start Free Trial',
      success: '✅ Check your email for access!',
    },
  };

  const text = content[language];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-900/20 to-emerald-900/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {text.title}
          </h2>
          <p className="text-lg text-gray-300 mb-8">{text.subtitle}</p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={text.placeholder}
                  className="flex-1 px-5 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium whitespace-nowrap"
                >
                  {text.button}
                </motion.button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xl text-emerald-400 font-semibold"
            >
              {text.success}
            </motion.div>
          )}

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>
              ✓{' '}
              {language === 'nl-BE'
                ? 'Geen verborgen kosten'
                : language === 'fr-BE'
                  ? 'Pas de frais cachés'
                  : 'No hidden fees'}
            </span>
            <span>
              ✓{' '}
              {language === 'nl-BE'
                ? 'Direct toegang'
                : language === 'fr-BE'
                  ? 'Accès immédiat'
                  : 'Instant access'}
            </span>
            <span>
              ✓{' '}
              {language === 'nl-BE'
                ? '50,000+ gebruikers'
                : language === 'fr-BE'
                  ? '50,000+ utilisateurs'
                  : '50,000+ users'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
