// src/components/modals/EmailCaptureModal.tsx - EmailJS Integration
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('r-TxVcUofG77t4JyM');

interface PricingPlan {
  id: string;
  duration: { 'nl-BE': string; 'fr-BE': string; en: string };
  price: number;
  monthly: number;
  badge: { 'nl-BE': string; 'fr-BE': string; en: string } | null;
  savings: string | null;
  popular: boolean;
}

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: PricingPlan;
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
  const [isSuccess, setIsSuccess] = useState(false);
  const [customerNumber, setCustomerNumber] = useState(3278); // Default value

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Extract device count from plan ID (accessible in try and catch)
    const deviceMatch =
      plan.id.match(/(\d+)-devices?/) || plan.id.match(/(\d)d$/);
    const deviceCount = deviceMatch ? parseInt(deviceMatch[1]) : 1;

    try {
      // Call API to save order
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          phone,
          planId: plan.id,
          planDuration: plan.duration[language],
          planPrice: plan.price,
          deviceCount,
          language,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Update customer number from database
        setCustomerNumber(result.data.customer_number);

        // Store in localStorage as backup
        localStorage.setItem('user_email', email);
        localStorage.setItem(
          'customer_number',
          result.data.customer_number.toString()
        );

        if (onEmailCapture) {
          onEmailCapture(email);
        }

        // Prepare email variables
        const emailVariables = {
          // Common variables
          customer_number: result.data.customer_number,
          customer_email: email,
          customer_phone: phone || 'Not provided',
          plan_duration: plan.duration[language],
          plan_price: plan.price,
          device_count: deviceCount,
          language: language,

          // Payment-specific variables
          payment_amount: plan.price,
          payment_reference: `BRENDT${result.data.customer_number}`,
          iban: 'IE14CITI99005171150683',
          bic: 'CITIIE2X',
          beneficiary: 'BOUTALEB LLC',
          whatsapp_number: '+32465123456',
          telegram_handle: '@iptv2belgie_support',

          // Payment instruction texts
          payment_instruction_title:
            language === 'nl-BE'
              ? 'Betalingsinstructies'
              : language === 'fr-BE'
                ? 'Instructions de Paiement'
                : 'Payment Instructions',
          payment_exact_amount:
            language === 'nl-BE'
              ? `Maak exact €${plan.price} over naar:`
              : language === 'fr-BE'
                ? `Transférez exactement €${plan.price} à:`
                : `Transfer exactly €${plan.price} to:`,
          payment_reference_warning:
            language === 'nl-BE'
              ? '⚠️ BELANGRIJK: Gebruik deze referentie of uw betaling wordt vertraagd!'
              : language === 'fr-BE'
                ? '⚠️ IMPORTANT: Utilisez cette référence ou votre paiement sera retardé!'
                : '⚠️ IMPORTANT: Use this reference or your payment will be delayed!',
          screenshot_instruction:
            language === 'nl-BE'
              ? 'Stuur screenshot van betaling naar:'
              : language === 'fr-BE'
                ? "Envoyez une capture d'écran du paiement à:"
                : 'Send payment screenshot to:',
          credentials_timing:
            language === 'nl-BE'
              ? 'U ontvangt uw toegang binnen 10 minuten na bevestiging'
              : language === 'fr-BE'
                ? 'Vous recevrez vos accès dans les 10 minutes après confirmation'
                : 'You will receive your credentials within 10 minutes after confirmation',
          peak_time_notice:
            language === 'nl-BE'
              ? 'Tijdens piekuren kan dit tot 1 uur duren'
              : language === 'fr-BE'
                ? "Pendant les heures de pointe, cela peut prendre jusqu'à 1 heure"
                : 'During peak times this may take up to 1 hour',

          // Language-specific variables (existing)
          confirmation_title:
            language === 'nl-BE'
              ? 'Bestelling Bevestigd!'
              : language === 'fr-BE'
                ? 'Commande Confirmée!'
                : 'Order Confirmed!',
          thank_you_message:
            language === 'nl-BE'
              ? 'Bedankt voor uw bestelling'
              : language === 'fr-BE'
                ? 'Merci pour votre commande'
                : 'Thank you for your order',
          order_number_label:
            language === 'nl-BE'
              ? 'Bestelnummer'
              : language === 'fr-BE'
                ? 'Numéro de commande'
                : 'Order Number',
          plan_label:
            language === 'nl-BE'
              ? 'Abonnement'
              : language === 'fr-BE'
                ? 'Abonnement'
                : 'Subscription',
          devices_label:
            language === 'nl-BE'
              ? 'Apparaten'
              : language === 'fr-BE'
                ? 'Appareils'
                : 'Devices',
          total_label:
            language === 'nl-BE'
              ? 'Totaal'
              : language === 'fr-BE'
                ? 'Total'
                : 'Total',
          next_steps_title:
            language === 'nl-BE'
              ? 'Volgende Stappen'
              : language === 'fr-BE'
                ? 'Prochaines Étapes'
                : 'Next Steps',
          payment_instruction:
            language === 'nl-BE'
              ? 'Contacteer ons via WhatsApp of Telegram om uw betaling te voltooien.'
              : language === 'fr-BE'
                ? 'Contactez-nous via WhatsApp ou Telegram pour finaliser votre paiement.'
                : 'Contact us via WhatsApp or Telegram to complete your payment.',
          credentials_message:
            language === 'nl-BE'
              ? 'U ontvangt uw inloggegevens binnen 5 minuten na betalingsbevestiging.'
              : language === 'fr-BE'
                ? 'Vous recevrez vos identifiants dans les 5 minutes après confirmation du paiement.'
                : 'You will receive your login credentials within 5 minutes after payment confirmation.',
          footer_support:
            language === 'nl-BE'
              ? 'Heeft u hulp nodig? Contacteer ons support team'
              : language === 'fr-BE'
                ? "Besoin d'aide? Contactez notre équipe support"
                : 'Need help? Contact our support team',
        };

        // Send confirmation email to customer using EmailJS
        try {
          await emailjs.send(
            'service_v3y8dra',
            'template_z7vmgeg',
            emailVariables
          );
          console.log('Customer confirmation email sent successfully');
        } catch (emailError) {
          console.error('Customer email failed:', emailError);
          // Don't block the order on email failure
        }

        // Send admin notification using EmailJS
        try {
          await emailjs.send(
            'service_v3y8dra',
            'template_cndg3kw',
            emailVariables
          );
          console.log('Admin notification sent successfully');
        } catch (adminEmailError) {
          console.error('Admin notification failed:', adminEmailError);
          // Don't block on admin email failure
        }

        setIsSuccess(true);
      } else {
        throw new Error('Failed to create order');
      }
    } catch (error) {
      console.error('Order submission error:', error);
      // Fallback to localStorage if API fails
      const fallbackNumber = Math.floor(Math.random() * 9000) + 3000;
      setCustomerNumber(fallbackNumber);
      localStorage.setItem('user_email', email);
      localStorage.setItem('customer_number', fallbackNumber.toString());

      // Still try to send emails with fallback data
      const fallbackVariables = {
        customer_number: fallbackNumber,
        customer_email: email,
        customer_phone: phone || 'Not provided',
        plan_duration: plan.duration[language],
        plan_price: plan.price,
        device_count: deviceCount,
        language: language,

        // Payment-specific variables
        payment_amount: plan.price,
        payment_reference: `BRENDT${fallbackNumber}`,
        iban: 'IE14CITI99005171150683',
        bic: 'CITIIE2X',
        beneficiary: 'BOUTALEB LLC',
        whatsapp_number: '+32465123456',
        telegram_handle: '@iptv2belgie_support',

        // Payment instruction texts
        payment_instruction_title:
          language === 'nl-BE'
            ? 'Betalingsinstructies'
            : language === 'fr-BE'
              ? 'Instructions de Paiement'
              : 'Payment Instructions',
        payment_exact_amount:
          language === 'nl-BE'
            ? `Maak exact €${plan.price} over naar:`
            : language === 'fr-BE'
              ? `Transférez exactement €${plan.price} à:`
              : `Transfer exactly €${plan.price} to:`,
        payment_reference_warning:
          language === 'nl-BE'
            ? '⚠️ BELANGRIJK: Gebruik deze referentie of uw betaling wordt vertraagd!'
            : language === 'fr-BE'
              ? '⚠️ IMPORTANT: Utilisez cette référence ou votre paiement sera retardé!'
              : '⚠️ IMPORTANT: Use this reference or your payment will be delayed!',
        screenshot_instruction:
          language === 'nl-BE'
            ? 'Stuur screenshot van betaling naar:'
            : language === 'fr-BE'
              ? "Envoyez une capture d'écran du paiement à:"
              : 'Send payment screenshot to:',
        credentials_timing:
          language === 'nl-BE'
            ? 'U ontvangt uw toegang binnen 10 minuten na bevestiging'
            : language === 'fr-BE'
              ? 'Vous recevrez vos accès dans les 10 minutes après confirmation'
              : 'You will receive your credentials within 10 minutes after confirmation',
        peak_time_notice:
          language === 'nl-BE'
            ? 'Tijdens piekuren kan dit tot 1 uur duren'
            : language === 'fr-BE'
              ? "Pendant les heures de pointe, cela peut prendre jusqu'à 1 heure"
              : 'During peak times this may take up to 1 hour',

        confirmation_title:
          language === 'nl-BE'
            ? 'Bestelling Bevestigd!'
            : language === 'fr-BE'
              ? 'Commande Confirmée!'
              : 'Order Confirmed!',
        thank_you_message:
          language === 'nl-BE'
            ? 'Bedankt voor uw bestelling'
            : language === 'fr-BE'
              ? 'Merci pour votre commande'
              : 'Thank you for your order',
        order_number_label:
          language === 'nl-BE'
            ? 'Bestelnummer'
            : language === 'fr-BE'
              ? 'Numéro de commande'
              : 'Order Number',
        plan_label:
          language === 'nl-BE'
            ? 'Abonnement'
            : language === 'fr-BE'
              ? 'Abonnement'
              : 'Subscription',
        devices_label:
          language === 'nl-BE'
            ? 'Apparaten'
            : language === 'fr-BE'
              ? 'Appareils'
              : 'Devices',
        total_label:
          language === 'nl-BE'
            ? 'Totaal'
            : language === 'fr-BE'
              ? 'Total'
              : 'Total',
        next_steps_title:
          language === 'nl-BE'
            ? 'Volgende Stappen'
            : language === 'fr-BE'
              ? 'Prochaines Étapes'
              : 'Next Steps',
        payment_instruction:
          language === 'nl-BE'
            ? 'Contacteer ons via WhatsApp of Telegram om uw betaling te voltooien.'
            : language === 'fr-BE'
              ? 'Contactez-nous via WhatsApp ou Telegram pour finaliser votre paiement.'
              : 'Contact us via WhatsApp or Telegram to complete your payment.',
        credentials_message:
          language === 'nl-BE'
            ? 'U ontvangt uw inloggegevens binnen 5 minuten na betalingsbevestiging.'
            : language === 'fr-BE'
              ? 'Vous recevrez vos identifiants dans les 5 minutes après confirmation du paiement.'
              : 'You will receive your login credentials within 5 minutes after payment confirmation.',
        footer_support:
          language === 'nl-BE'
            ? 'Heeft u hulp nodig? Contacteer ons support team'
            : language === 'fr-BE'
              ? "Besoin d'aide? Contactez notre équipe support"
              : 'Need help? Contact our support team',
      };

      try {
        await emailjs.send(
          'service_v3y8dra',
          'template_z7vmgeg',
          fallbackVariables
        );
        await emailjs.send(
          'service_v3y8dra',
          'template_cndg3kw',
          fallbackVariables
        );
      } catch (fallbackEmailError) {
        console.error('Fallback email failed:', fallbackEmailError);
      }

      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const messages = {
      'nl-BE': `Hallo IPTV2Belgie! Ik heb zojuist besteld:\n\n📦 Plan: ${plan.duration[language]}\n💰 Prijs: €${plan.price}\n✉️ Email: ${email}\n🔢 Klant #${customerNumber}\n\nIk wil graag mijn betaling afronden en toegang krijgen. Dank je!`,
      'fr-BE': `Bonjour IPTV2Belgie! Je viens de commander:\n\n📦 Plan: ${plan.duration[language]}\n💰 Prix: €${plan.price}\n✉️ Email: ${email}\n🔢 Client #${customerNumber}\n\nJe souhaite finaliser mon paiement et obtenir l'accès. Merci!`,
      en: `Hello IPTV2Belgie! I just ordered:\n\n📦 Plan: ${plan.duration[language]}\n💰 Price: €${plan.price}\n✉️ Email: ${email}\n🔢 Customer #${customerNumber}\n\nI want to complete my payment and get access. Thank you!`,
    };

    const whatsappUrl = `https://wa.me/32465123456?text=${encodeURIComponent(messages[language])}`;
    window.open(whatsappUrl, '_blank');

    // Auto-close modal after user contacts support
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const openTelegram = () => {
    const messages = {
      'nl-BE': `Hallo! Nieuwe bestelling:\n\nPlan: ${plan.duration[language]}\nPrijs: €${plan.price}\nEmail: ${email}\nKlant #${customerNumber}\n\nKlaar om te betalen!`,
      'fr-BE': `Bonjour! Nouvelle commande:\n\nPlan: ${plan.duration[language]}\nPrix: €${plan.price}\nEmail: ${email}\nClient #${customerNumber}\n\nPrêt à payer!`,
      en: `Hello! New order:\n\nPlan: ${plan.duration[language]}\nPrice: €${plan.price}\nEmail: ${email}\nCustomer #${customerNumber}\n\nReady to pay!`,
    };

    const telegramUrl = `https://t.me/iptv2belgie_support?text=${encodeURIComponent(messages[language])}`;
    window.open(telegramUrl, '_blank');

    // Auto-close modal after user contacts support
    setTimeout(() => {
      onClose();
    }, 2000);
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
      successTitle: 'Bestelling Bevestigd!',
      successSubtitle: 'Uw IPTV-toegang wordt voorbereid',
      credentialsMessage:
        'U ontvangt uw inloggegevens binnen 5 minuten op uw e-mail nadat de betaling is bevestigd.',
      paymentTitle: 'Kies uw betaalmethode:',
      whatsappButton: 'Betalen via WhatsApp',
      whatsappDesc: 'Direct contact met support',
      telegramButton: 'Betalen via Telegram',
      telegramDesc: 'Snelle geautomatiseerde service',
      customerInfo: 'Klant #',
      timelineStep1: 'Bestelling Geplaatst',
      timelineStep2: 'Contact Support',
      timelineStep3: 'Toegang Krijgen',
      paymentMethods: 'We accepteren: 💳 Bankoverschrijving • PayPal • Crypto',
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
      successTitle: 'Commande Confirmée!',
      successSubtitle: 'Votre accès IPTV est en préparation',
      credentialsMessage:
        'Vous recevrez vos identifiants dans les 5 minutes par email après confirmation du paiement.',
      paymentTitle: 'Choisissez votre méthode de paiement:',
      whatsappButton: 'Payer via WhatsApp',
      whatsappDesc: 'Contact direct avec le support',
      telegramButton: 'Payer via Telegram',
      telegramDesc: 'Service automatisé rapide',
      customerInfo: 'Client #',
      timelineStep1: 'Commande Passée',
      timelineStep2: 'Contacter Support',
      timelineStep3: 'Obtenir Accès',
      paymentMethods: 'Nous acceptons: 💳 Virement • PayPal • Crypto',
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
      successTitle: 'Order Confirmed!',
      successSubtitle: 'Your IPTV access is being prepared',
      credentialsMessage:
        'You will receive your login credentials within 5 minutes via email after payment confirmation.',
      paymentTitle: 'Choose your payment method:',
      whatsappButton: 'Pay via WhatsApp',
      whatsappDesc: 'Direct contact with support',
      telegramButton: 'Pay via Telegram',
      telegramDesc: 'Fast automated service',
      customerInfo: 'Customer #',
      timelineStep1: 'Order Placed',
      timelineStep2: 'Contact Support',
      timelineStep3: 'Get Access',
      paymentMethods: 'We accept: 💳 Bank Transfer • PayPal • Crypto',
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
          className="bg-slate-900 rounded-2xl p-6 md:p-8 max-w-md w-full border border-sky-500/20 shadow-2xl relative max-h-[90vh] overflow-y-auto"
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

          {!isSuccess ? (
            <>
              {/* Form View */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {text.title}
                </h3>
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
            </>
          ) : (
            <>
              {/* Success View */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="text-6xl mb-4"
                >
                  ✅
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {text.successTitle}
                </h3>
                <p className="text-gray-400 mb-4">{text.successSubtitle}</p>

                {/* Customer Info */}
                <div className="bg-gradient-to-r from-sky-500/10 to-emerald-500/10 rounded-xl p-4 mb-6 border border-sky-500/20">
                  <div className="text-white font-medium mb-1">
                    {plan.duration[language]} - €{plan.price}
                  </div>
                  <div className="text-sky-300 font-bold">
                    {text.customerInfo}
                    {customerNumber}
                  </div>
                </div>
              </div>

              {/* Timeline Indicator */}
              <div className="bg-slate-800/50 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">
                      1
                    </div>
                    <span className="text-gray-300 text-center text-xs">
                      {text.timelineStep1}
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white text-xs">
                      2
                    </div>
                    <span className="text-gray-300 text-center text-xs">
                      {text.timelineStep2}
                    </span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-gray-400 text-xs">
                      3
                    </div>
                    <span className="text-gray-400 text-center text-xs">
                      {text.timelineStep3}
                    </span>
                  </div>
                </div>
              </div>

              {/* Credentials Promise */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="text-emerald-400 text-xl mt-0.5">📧</div>
                  <p className="text-emerald-100 text-sm">
                    {text.credentialsMessage}
                  </p>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-4 text-center">
                  {text.paymentTitle}
                </h4>

                <div className="space-y-3">
                  {/* WhatsApp Option */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={openWhatsApp}
                    className="w-full flex items-center space-x-4 bg-emerald-600 hover:bg-emerald-700 rounded-xl p-4 transition-all duration-300 group"
                  >
                    <div className="text-3xl">💬</div>
                    <div className="flex-1 text-left">
                      <div className="text-white font-bold">
                        {text.whatsappButton}
                      </div>
                      <div className="text-emerald-100 text-sm">
                        {text.whatsappDesc}
                      </div>
                    </div>
                    <div className="text-white group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </motion.button>

                  {/* Telegram Option */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={openTelegram}
                    className="w-full flex items-center space-x-4 bg-blue-600 hover:bg-blue-700 rounded-xl p-4 transition-all duration-300 group"
                  >
                    <div className="text-3xl">✈️</div>
                    <div className="flex-1 text-left">
                      <div className="text-white font-bold">
                        {text.telegramButton}
                      </div>
                      <div className="text-blue-100 text-sm">
                        {text.telegramDesc}
                      </div>
                    </div>
                    <div className="text-white group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Payment Methods Accepted */}
              <div className="text-center text-xs text-gray-500 mb-4">
                <p>{text.paymentMethods}</p>
              </div>

              {/* Trust indicators */}
              <div className="flex justify-center space-x-6 text-xs text-gray-500">
                <span>🔒 Secure Payment</span>
                <span>⚡ Instant Setup</span>
                <span>🇧🇪 Belgian Support</span>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
