// src/components/ui/EmailSuccessNotification.tsx
'use client';

import { motion } from 'framer-motion';

interface EmailSuccessNotificationProps {
  language: 'nl-BE' | 'fr-BE' | 'en';
}

export default function EmailSuccessNotification({ language }: EmailSuccessNotificationProps) {
  const messages = {
    'nl-BE': {
      title: 'Succesvol!',
      text: 'U ontvangt binnen 5 minuten een e-mail met uw toegangsgegevens.'
    },
    'fr-BE': {
      title: 'Succès!',
      text: 'Vous recevrez un email avec vos accès dans 5 minutes.'
    },
    'en': {
      title: 'Success!',
      text: 'You will receive an email with your access details within 5 minutes.'
    }
  };

  const content = messages[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-6 py-4 rounded-xl shadow-2xl"
    >
      <div className="flex items-center gap-3">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <div>
          <p className="font-bold">{content.title}</p>
          <p className="text-sm">{content.text}</p>
        </div>
      </div>
    </motion.div>
  );
}