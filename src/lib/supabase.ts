import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Public client for browser
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client only for server-side (API routes)
export const getSupabaseAdmin = () => {
  if (typeof window !== 'undefined') {
    throw new Error('Admin client can only be used server-side');
  }
  return createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY!);
};

// For convenience in API routes
export const supabaseAdmin = typeof window === 'undefined' 
  ? createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY!)
  : null as any;
