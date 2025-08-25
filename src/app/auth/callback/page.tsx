'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

export default function AuthCallback() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    // Check if this is a password reset
    const hash = window.location.hash;
    if (!hash || !hash.includes('type=invite')) {
      router.push('/');
    }
  }, []);

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      setError(error.message);
    } else {
      alert('Password set successfully!');
      router.push('/admin/login');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <form
        onSubmit={handlePasswordUpdate}
        className="bg-slate-800 p-8 rounded-xl w-96"
      >
        <h1 className="text-2xl font-bold text-white mb-6">
          Set Your Password
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-400 rounded">
            {error}
          </div>
        )}

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
          className="w-full p-3 mb-4 bg-slate-700 text-white rounded"
          required
        />

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full p-3 mb-6 bg-slate-700 text-white rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-sky-500 text-white rounded font-bold"
        >
          {loading ? 'Setting Password...' : 'Set Password'}
        </button>
      </form>
    </div>
  );
}
