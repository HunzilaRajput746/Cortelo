import React from "react";

export const metadata = {
  title: "Privacy Policy — Cortelo",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[860px] mx-auto glass-panel p-10 md:p-14 rounded-2xl border border-cortelo-border space-y-8 font-light text-cortelo-muted">
        <div>
          <span className="text-xs font-mono text-cortelo-mint uppercase tracking-wider">Legal & Compliance</span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase text-cortelo-text mt-2">Privacy Policy</h1>
          <p className="text-xs font-mono mt-1">Effective Date: November 2026 &bull; Cortelo Systems</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase text-cortelo-text">1. Zero Client Data Training Policy</h2>
          <p className="text-sm leading-relaxed">
            Cortelo strictly adheres to an absolute privacy standard: we never use client datasets, proprietary source code, or confidential operational logs to train public models or third-party foundation models.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase text-cortelo-text">2. Data Collection and Retention</h2>
          <p className="text-sm leading-relaxed">
            We collect only the information provided voluntarily through our project briefing forms (e.g., name, corporate email, project scope) to evaluate and execute engineering contracts. We never sell, rent, or distribute client contact records.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase text-cortelo-text">3. Security Standards</h2>
          <p className="text-sm leading-relaxed">
            All project materials are stored within isolated private VPCs with AES-256 encryption at rest and TLS 1.3 in transit, in alignment with OWASP ASVS Level 2 security specifications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold uppercase text-cortelo-text">4. Inquiries & Data Rights</h2>
          <p className="text-sm leading-relaxed">
            To request data deletion or inspect personal records, email our privacy team directly at <a href="mailto:hello@cortelo.ai" className="text-cortelo-mint underline">hello@cortelo.ai</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
