// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Temporarily bypass middleware for testing
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
