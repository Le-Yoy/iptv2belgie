'use client';

import { useState } from 'react';

export default function TestAuth() {
  const [result, setResult] = useState('');

  const testDirectAuth = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/token?grant_type=password`,
      {
        method: 'POST',
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'payment@iptv2belgie.be',
          password: 'Admin2025!',
        }),
      }
    );

    const data = await response.json();
    setResult(JSON.stringify(data, null, 2));
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <button
        onClick={testDirectAuth}
        className="px-6 py-3 bg-sky-500 text-white rounded"
      >
        Test Auth API Directly
      </button>
      <pre className="mt-4 text-white">{result}</pre>
    </div>
  );
}
