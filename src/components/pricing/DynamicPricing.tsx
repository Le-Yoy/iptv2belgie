// src/components/pricing/DynamicPricing.tsx - Updated Version
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailCaptureModal from '../modals/EmailCaptureModal';

interface PricingProps {
  language: 'nl-BE' | 'fr-BE' | 'en';
  onEmailCapture?: (email: string) => void;
}

interface PricingPlan {
  id: string;
  duration: { 'nl-BE': string; 'fr-BE': string; en: string };
  price: number;
  monthly: number;
  badge: { 'nl-BE': string; 'fr-BE': string; en: string } | null;
  savings: string | null;
  popular: boolean;
}

const pricingData: Record<string, PricingPlan[]> = {
  '1-device': [
    {
      id: '12month-1d',
      duration: { 'nl-BE': '12 Maanden', 'fr-BE': '12 Mois', en: '12 Months' },
      price: 69,
      monthly: 5.75,
      badge: {
        'nl-BE': 'BESTE WAARDE',
        'fr-BE': 'MEILLEURE VALEUR',
        en: 'BEST VALUE',
      },
      savings: '62%',
      popular: true,
    },
    {
      id: '3month-1d',
      duration: { 'nl-BE': '3 Maanden', 'fr-BE': '3 Mois', en: '3 Months' },
      price: 35,
      monthly: 11.67,
      badge: { 'nl-BE': 'POPULAIR', 'fr-BE': 'POPULAIRE', en: 'POPULAR' },
      savings: '22%',
      popular: false,
    },
    {
      id: '1month-1d',
      duration: { 'nl-BE': '1 Maand', 'fr-BE': '1 Mois', en: '1 Month' },
      price: 15,
      monthly: 15,
      badge: null,
      savings: null,
      popular: false,
    },
  ],
  '2-devices': [
    {
      id: '12month-2d',
      duration: { 'nl-BE': '12 Maanden', 'fr-BE': '12 Mois', en: '12 Months' },
      price: 118, // (69 * 2) - 20
      monthly: 9.83,
      badge: {
        'nl-BE': 'MAXIMALE BESPARING',
        'fr-BE': 'ÉCONOMIE MAX',
        en: 'MAX SAVINGS',
      },
      savings: '34%',
      popular: true,
    },
    {
      id: '3month-2d',
      duration: { 'nl-BE': '3 Maanden', 'fr-BE': '3 Mois', en: '3 Months' },
      price: 60, // (35 * 2) - 10
      monthly: 20,
      badge: {
        'nl-BE': 'MEEST GEKOZEN',
        'fr-BE': 'PLUS CHOISI',
        en: 'MOST CHOSEN',
      },
      savings: '20%',
      popular: false,
    },
    {
      id: '1month-2d',
      duration: { 'nl-BE': '1 Maand', 'fr-BE': '1 Mois', en: '1 Month' },
      price: 25, // (15 * 2) - 5
      monthly: 25,
      badge: { 'nl-BE': 'GEZIN', 'fr-BE': 'FAMILLE', en: 'FAMILY' },
      savings: '17%',
      popular: false,
    },
  ],
  '3-devices': [
    {
      id: '12month-3d',
      duration: { 'nl-BE': '12 Maanden', 'fr-BE': '12 Mois', en: '12 Months' },
      price: 167, // (69 * 3) - 40
      monthly: 13.92,
      badge: {
        'nl-BE': 'MAXIMALE BESPARING',
        'fr-BE': 'ÉCONOMIE MAX',
        en: 'MAX SAVINGS',
      },
      savings: '38%',
      popular: true,
    },
    {
      id: '3month-3d',
      duration: { 'nl-BE': '3 Maanden', 'fr-BE': '3 Mois', en: '3 Months' },
      price: 85, // (35 * 3) - 20
      monthly: 28.33,
      badge: {
        'nl-BE': 'MEEST GEKOZEN',
        'fr-BE': 'PLUS CHOISI',
        en: 'MOST CHOSEN',
      },
      savings: '24%',
      popular: false,
    },
    {
      id: '1month-3d',
      duration: { 'nl-BE': '1 Maand', 'fr-BE': '1 Mois', en: '1 Month' },
      price: 35, // (15 * 3) - 10
      monthly: 35,
      badge: null,
      savings: '22%',
      popular: false,
    },
  ],
  '4-devices': [
    {
      id: '12month-4d',
      duration: { 'nl-BE': '12 Maanden', 'fr-BE': '12 Mois', en: '12 Months' },
      price: 206, // (69 * 4) - 70
      monthly: 17.17,
      badge: {
        'nl-BE': 'MAXIMALE BESPARING',
        'fr-BE': 'ÉCONOMIE MAX',
        en: 'MAX SAVINGS',
      },
      savings: '43%',
      popular: true,
    },
    {
      id: '3month-4d',
      duration: { 'nl-BE': '3 Maanden', 'fr-BE': '3 Mois', en: '3 Months' },
      price: 105, // (35 * 4) - 35
      monthly: 35,
      badge: {
        'nl-BE': 'MEEST GEKOZEN',
        'fr-BE': 'PLUS CHOISI',
        en: 'MOST CHOSEN',
      },
      savings: '30%',
      popular: false,
    },
    {
      id: '1month-4d',
      duration: { 'nl-BE': '1 Maand', 'fr-BE': '1 Mois', en: '1 Month' },
      price: 45, // (15 * 4) - 15
      monthly: 45,
      badge: null,
      savings: '25%',
      popular: false,
    },
  ],
  '5-devices': [
    {
      id: '12month-5d',
      duration: { 'nl-BE': '12 Maanden', 'fr-BE': '12 Mois', en: '12 Months' },
      price: 245, // (69 * 5) - 100
      monthly: 20.42,
      badge: {
        'nl-BE': 'MAXIMALE BESPARING',
        'fr-BE': 'ÉCONOMIE MAX',
        en: 'MAX SAVINGS',
      },
      savings: '47%',
      popular: true,
    },
    {
      id: '3month-5d',
      duration: { 'nl-BE': '3 Maanden', 'fr-BE': '3 Mois', en: '3 Months' },
      price: 125, // (35 * 5) - 50
      monthly: 41.67,
      badge: {
        'nl-BE': 'MEEST GEKOZEN',
        'fr-BE': 'PLUS CHOISI',
        en: 'MOST CHOSEN',
      },
      savings: '33%',
      popular: false,
    },
    {
      id: '1month-5d',
      duration: { 'nl-BE': '1 Maand', 'fr-BE': '1 Mois', en: '1 Month' },
      price: 55, // (15 * 5) - 20
      monthly: 55,
      badge: null,
      savings: '27%',
      popular: false,
    },
  ],
};

const features = {
  'nl-BE': {
    included: [
      '50,000+ kanalen HD/4K/8K',
      'Netflix, Disney+, HBO, Viaplay inbegrepen',
      'Alle Nederlandse en Belgische zenders',
      'Eredivisie + Pro League volledig',
      'Max Verstappen F1 races live',
      'WhatsApp support 24/7 Nederlands',
      'Werkt op Smart TV, telefoon, tablet',
      'Geen contract - stop wanneer u wilt',
    ],
  },
  'fr-BE': {
    included: [
      '50,000+ chaînes HD/4K/8K',
      'Netflix, Disney+, HBO, Viaplay inclus',
      'Toutes les chaînes belges et françaises',
      'Pro League + Ligue 1 complet',
      'Max Verstappen F1 en direct',
      'Support WhatsApp 24/7 en français',
      'Fonctionne sur Smart TV, téléphone, tablette',
      'Sans contrat - arrêtez quand vous voulez',
    ],
  },
  en: {
    included: [
      '50,000+ channels HD/4K/8K',
      'Netflix, Disney+, HBO, Viaplay included',
      'All Dutch and Belgian channels',
      'Eredivisie + Pro League complete',
      'Max Verstappen F1 races live',
      'WhatsApp support 24/7 English',
      'Works on Smart TV, phone, tablet',
      'No contract - cancel anytime',
    ],
  },
};

export default function DynamicPricing({
  language,
  onEmailCapture,
}: PricingProps) {
  const [deviceType, setDeviceType] = useState<string>('1-device');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const currentPlans = pricingData[deviceType];
  const currentFeatures = features[language];

  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setShowEmailModal(true);
  };

  const handleEmailCapture = (email: string) => {
    if (onEmailCapture) {
      onEmailCapture(email);
    }
    setShowEmailModal(false);
    // Redirect to payment or show success
    setTimeout(() => {
      window.location.href = '#telegram';
    }, 1000);
  };

  const getComparisonText = (language: string) => {
    const texts = {
      'nl-BE': {
        vs: 'vs €89/maand bij Telenet of Proximus',
        save: 'Bespaar',
        perMonth: '/maand',
      },
      'fr-BE': {
        vs: 'vs €89/mois chez Telenet ou Proximus',
        save: 'Économisez',
        perMonth: '/mois',
      },
      en: {
        vs: 'vs €89/month at Telenet or Proximus',
        save: 'Save',
        perMonth: '/month',
      },
    };
    return texts[language as keyof typeof texts];
  };

  const texts = getComparisonText(language);

  const deviceOptions = [
    {
      key: '1-device',
      label: { 'nl-BE': '1 Apparaat', 'fr-BE': '1 Appareil', en: '1 Device' },
    },
    {
      key: '2-devices',
      label: {
        'nl-BE': '2 Apparaten',
        'fr-BE': '2 Appareils',
        en: '2 Devices',
      },
    },
    {
      key: '3-devices',
      label: {
        'nl-BE': '3 Apparaten',
        'fr-BE': '3 Appareils',
        en: '3 Devices',
      },
    },
    {
      key: '4-devices',
      label: {
        'nl-BE': '4 Apparaten',
        'fr-BE': '4 Appareils',
        en: '4 Devices',
      },
    },
    {
      key: '5-devices',
      label: {
        'nl-BE': '5 Apparaten',
        'fr-BE': '5 Appareils',
        en: '5 Devices',
      },
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {language === 'nl-BE'
              ? 'Kies Uw Plan'
              : language === 'fr-BE'
                ? 'Choisissez Votre Plan'
                : 'Choose Your Plan'}
          </h2>
          <p className="text-xl text-gray-400 mb-8">{texts.vs}</p>

          {/* Device Toggle - Mobile Optimized */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {deviceOptions.map((option) => (
              <button
                key={option.key}
                onClick={() => setDeviceType(option.key)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                  deviceType === option.key
                    ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {option.label[language]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={deviceType}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative p-6 lg:p-8 rounded-2xl backdrop-blur-md border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-sky-900/30 to-emerald-900/30 border-sky-500 shadow-2xl shadow-sky-500/20 scale-105'
                    : 'bg-slate-800/50 border-slate-700 hover:border-sky-500/50'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap">
                      {plan.badge[language]}
                    </span>
                  </div>
                )}

                {/* Plan details */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.duration[language]}
                  </h3>
                  <div className="text-5xl font-bold text-white mb-2">
                    €{plan.price}
                  </div>
                  <div className="text-gray-400">
                    €{plan.monthly.toFixed(2)}
                    {texts.perMonth}
                  </div>
                  {plan.savings && (
                    <div className="mt-2">
                      <span className="text-emerald-400 font-semibold text-lg">
                        {texts.save} {plan.savings}
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-sky-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-sky-500/30 transform hover:scale-105'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {language === 'nl-BE'
                    ? 'Selecteer Plan'
                    : language === 'fr-BE'
                      ? 'Sélectionner'
                      : 'Select Plan'}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            {language === 'nl-BE'
              ? 'Inbegrepen in alle plannen:'
              : language === 'fr-BE'
                ? 'Inclus dans tous les plans:'
                : 'Included in all plans:'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {currentFeatures.included.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <svg
                  className="w-5 h-5 text-emerald-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span className="text-gray-400">SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇧🇪</span>
            <span className="text-gray-400">Belgian Company</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <span className="text-gray-400">50,000+ Happy Customers</span>
          </div>
        </motion.div>
      </div>

      {/* Email Modal */}
      {showEmailModal && selectedPlan && (
        <EmailCaptureModal
          isOpen={showEmailModal}
          onClose={() => setShowEmailModal(false)}
          plan={selectedPlan}
          language={language}
          onEmailCapture={handleEmailCapture}
        />
      )}
    </section>
  );
}
