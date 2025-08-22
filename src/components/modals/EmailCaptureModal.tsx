// src/components/modals/EmailCaptureModal.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: any;
  language: 'nl-BE' | 'fr-BE' | 'en';
  onEmailCapture?: (email: string) => void;
}

export default function EmailCaptureModal({
  isOpen,
  onClose,
  plan,
  language,
  onEmailCapture,
}: EmailCaptureModalProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (onEmailCapture) {
      onEmailCapture(email);
    }

    // Store in localStorage for persistence
    localStorage.setItem('user_email', email);
    localStorage.setItem('user_phone', phone);
    localStorage.setItem('selected_plan', JSON.stringify(plan));

    setIsSubmitting(false);
    onClose();
  };

  const content = {
    'nl-BE': {
      title: 'Laatste Stap!',
      subtitle: 'Vul uw gegevens in voor directe toegang',
      emailLabel: 'E-mailadres',
      phoneLabel: 'Telefoonnummer (optioneel)',
      submit: 'Activeer Mijn Toegang',
      processing: 'Verwerken...',
      secure: '🔒 100% Veilig & Versleuteld',
      guarantee: '✅ 7 dagen geld-terug-garantie',
    },
    'fr-BE': {
      title: 'Dernière Étape!',
      subtitle: 'Entrez vos coordonnées pour un accès immédiat',
      emailLabel: 'Adresse e-mail',
      phoneLabel: 'Numéro de téléphone (optionnel)',
      submit: 'Activer Mon Accès',
      processing: 'Traitement...',
      secure: '🔒 100% Sécurisé & Crypté',
      guarantee: '✅ Garantie remboursement 7 jours',
    },
    en: {
      title: 'Final Step!',
      subtitle: 'Enter your details for instant access',
      emailLabel: 'Email address',
      phoneLabel: 'Phone number (optional)',
      submit: 'Activate My Access',
      processing: 'Processing...',
      secure: '🔒 100% Secure & Encrypted',
      guarantee: '✅ 7-day money-back guarantee',
    },
  };

  const text = content[language];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-slate-900 rounded-2xl p-6 md:p-8 max-w-md w-full border border-sky-500/20 shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{text.title}</h3>
            <p className="text-gray-400">{text.subtitle}</p>
          </div>

          {/* Selected Plan Display */}
          <div className="bg-gradient-to-r from-sky-500/10 to-emerald-500/10 rounded-xl p-4 mb-6 border border-sky-500/20">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">
                {plan.duration[language]}
              </span>
              <span className="text-2xl font-bold gradient-text">
                €{plan.price}
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {text.emailLabel}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                {text.phoneLabel}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors"
                placeholder="+32 XXX XX XX XX"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-sky-500/30 transition-all disabled:opacity-50"
            >
              {isSubmitting ? text.processing : text.submit}
            </button>
          </form>

          {/* Trust badges */}
          <div className="mt-6 space-y-2 text-center">
            <p className="text-sm text-gray-400">{text.secure}</p>
            <p className="text-sm text-gray-400">{text.guarantee}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
