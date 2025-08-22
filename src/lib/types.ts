// Global types for IPTV2Belgie
export interface Language {
 code: 'fr-BE' | 'nl-BE' | 'en';
 name: string;
 flag: string;
}

export interface SubscriptionPlan {
 id: string;
 name: string;
 duration: { 'fr-BE': string; 'nl-BE': string; 'en': string };
 price: number;
 monthly: number;
 originalPrice?: number;
 savings?: string;
 popular: boolean;
 badge?: { 'fr-BE': string; 'nl-BE': string; 'en': string } | null;
 deviceLimit: number;
 whatsappMessage?: string;
}

export interface Customer {
 id: number;
 name: string;
 location: string;
 country: string;
 avatar: string;
 plan: string;
 message: { 'fr-BE': string; 'nl-BE': string; 'en': string };
 timestamp: string;
 rating: number;
}

export interface FAQItem {
 id: number;
 question: string;
 answer: string;
}

export interface EmailCaptureData {
 email: string;
 customerNumber: number;
 timestamp: string;
 source: 'hero' | 'modal' | 'pricing' | 'email_capture';
 selectedPlan?: string;
 language: 'fr-BE' | 'nl-BE' | 'en';
}

export interface HeroSlide {
 id: string;
 background: string;
 content: {
   'fr-BE': {
     headline: string;
     subheadline: string;
     description: string;
     cta: string;
   };
   'nl-BE': {
     headline: string;
     subheadline: string;
     description: string;
     cta: string;
   };
   'en': {
     headline: string;
     subheadline: string;
     description: string;
     cta: string;
   };
 };
}

export interface MovieSection {
 id: string;
 title: { 'fr-BE': string; 'nl-BE': string; 'en': string };
 movies: string[];
}

export interface ApiResponse<T> {
 success: boolean;
 data?: T;
 error?: string;
}export interface BrandLogo {
  name: string;
  icon: string;
  path: string;
}
export interface BrandLogo {
  name: string;
  icon: string;
  path: string;
}

export interface BrandLogo {
  name: string;
  icon: string;
  path: string;
}
export interface BrandLogo { name: string; icon: string; path: string; }
