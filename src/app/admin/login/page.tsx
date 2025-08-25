'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Direct check - no Supabase auth
    if (email === 'payment@iptv2belgie.be' && password === 'Admin2025!') {
      localStorage.setItem('admin_authenticated', 'true');
      router.push('/admin');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-slate-800 p-8 rounded-xl w-96">
        <h1 className="text-2xl font-bold text-white mb-6">Admin Login</h1>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-400 rounded">
            {error}
          </div>
        )}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="payment@iptv2belgie.be"
          className="w-full p-3 mb-4 bg-slate-700 text-white rounded"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Admin2025!"
          className="w-full p-3 mb-6 bg-slate-700 text-white rounded"
        />

        <button
          type="submit"
          className="w-full p-3 bg-sky-500 text-white rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
