import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog IPTV Belgique | Guides et Actualités | IPTV2Belgie',
  description:
    'Découvrez nos guides IPTV, actualités streaming, et conseils pour choisir le meilleur service IPTV en Belgique.',
};

export default function BlogIndex() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 gradient-text">
        Blog IPTV Belgique
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <Link href="/blog/iptv-belgique-2025-guide-complet" className="group">
          <article className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-sky-500/50 transition-all">
            <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-sky-400 transition-colors">
              IPTV Belgique 2025: Guide Complet
            </h2>
            <p className="text-gray-300 mb-4">
              Tout savoir sur l'IPTV en Belgique: légalité, amendes, et comment
              choisir le meilleur service en toute sécurité.
            </p>
            <span className="text-sky-400 text-sm">Lire l'article →</span>
          </article>
        </Link>
      </div>
    </div>
  );
}
