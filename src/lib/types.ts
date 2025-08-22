export type Language = 'fr-BE' | 'nl-BE' | 'en';

export interface HeroSlide {
  id: string;
  background: string;
  content: {
    [key in Language]: {
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
}

export interface BrandLogo {
  name: string;
  icon: string;
  path: string;
}

export type EmailCaptureSource = "hero" | "modal" | "pricing" | "email_capture" | "exit_intent";

export interface EmailCaptureData {
  email: string;
  customerNumber: number;
  timestamp: string;
  source: EmailCaptureSource;
}
