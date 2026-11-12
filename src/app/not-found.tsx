import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 flex flex-col justify-center items-center text-center relative z-10">
      <div className="glass-panel p-12 rounded-2xl border border-cortelo-border max-w-lg space-y-6">
        <span className="text-xs font-mono text-cortelo-mint uppercase tracking-widest">Error 404 &bull; Routing Exception</span>
        <h1 className="text-6xl font-black uppercase text-cortelo-text">404</h1>
        <h2 className="text-xl font-bold uppercase text-cortelo-text">Vector Not Found</h2>
        <p className="text-xs text-cortelo-muted leading-relaxed font-light">
          The requested path does not exist in the Cortelo system registry. It may have been relocated or deprecated.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full bg-cortelo-mint text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(45,212,167,0.3)]"
          >
            Return to Systems Core
          </Link>
        </div>
      </div>
    </main>
  );
}

