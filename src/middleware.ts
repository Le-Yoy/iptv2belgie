import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Protect admin routes
  if (
    req.nextUrl.pathname.startsWith('/admin') &&
    !req.nextUrl.pathname.includes('/admin/login')
  ) {
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    // Verify admin email
    if (session.user.email !== 'leboutaleb@gmail.com') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ['/admin/:path*'],
};
