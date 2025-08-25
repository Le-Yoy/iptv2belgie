'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthHandler() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;

      // Handle Supabase auth callbacks
      if (hash && hash.includes('access_token')) {
        if (hash.includes('type=invite') || hash.includes('type=recovery')) {
          // Store the token temporarily
          sessionStorage.setItem('supabase_auth_token', hash);
          router.push('/auth/set-password');
        } else {
          // Clean up URL for other token types
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }
      }
    }
  }, [pathname, router]);

  return null;
}
