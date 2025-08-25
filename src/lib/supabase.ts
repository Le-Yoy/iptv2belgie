import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client for public operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for server-side operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Type definitions for your database
export type Order = {
  id: number;
  customer_number: number;
  email: string;
  phone: string | null;
  plan_id: string;
  plan_duration: string;
  plan_price: number;
  device_count: number;
  language: string;
  status: 'pending' | 'contacted' | 'paid' | 'active' | 'cancelled';
  payment_method: string | null;
  payment_verified: boolean;
  credentials_sent: boolean;
  notes: string | null;
  created_at: string;
  updated_at: string;
};
