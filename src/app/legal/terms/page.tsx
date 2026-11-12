import React from "react";

export const metadata = {
  title: "Terms of Service — Cortelo",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[860px] mx-auto glass-panel p-10 md:p-14 rounded-2xl border border-cortelo-border space-y-8 font-light text-cortelo-muted">
        <div>
          <span className="text-xs font-mono text-cortelo-mint uppercase tracking-wider">Commercial Terms</span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase text-cortelo-text mt-2">Terms of Service</h1>
          <p className="text-xs font-mono mt-1">Effective Date: November 2026 &bull; Cortelo Systems</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase text-cortelo-text">1. Scope of Engagement</h2>
          <p className="text-sm leading-relaxed">
            Cortelo provides software engineering, AI architecture consulting, autonomous agent development, and systems deployment under fixed-scope sprint agreements or monthly engineering retainers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase text-cortelo-text">2. Intellectual Property Ownership</h2>
          <p className="text-sm leading-relaxed">
            Upon receipt of milestone payments, 100% of the custom source code, trained model checkpoints, dataset pipelines, and prompts developed for the client are irrevocably assigned to the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase text-cortelo-text">3. Confidentiality and NDAs</h2>
          <p className="text-sm leading-relaxed">
            All proprietary business logic, schemas, and credentials shared with Cortelo are protected by bilateral non-disclosure provisions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase text-cortelo-text">4. Warranty and Support</h2>
          <p className="text-sm leading-relaxed">
            All production deployments include 30 calendar days of post-launch monitoring and bug remediation. SLA-backed continuous support retainers are available by separate addendum.
          </p>
        </section>
      </div>
    </main>
  );
}

