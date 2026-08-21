import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 bg-obsidian-950 min-h-screen flex items-center justify-center font-sans border-b border-obsidian-800">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="p-4 rounded-xl bg-obsidian-900 border border-obsidian-800 space-y-2 font-mono">
          <div className="text-rust-500 font-bold text-4xl">404</div>
          <div className="text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
            <Terminal className="w-4 h-4 text-rust-500" />
            ROUTE_NOT_FOUND.ERR
          </div>
          <p className="text-slate-400 text-xs pt-2 border-t border-obsidian-800">
            The requested technical path does not exist in Laxman's portfolio index.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded bg-rust-500 hover:bg-rust-600 text-white font-mono text-xs font-bold transition-colors shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
