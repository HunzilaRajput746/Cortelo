"use client";

import React, { useState } from "react";
import { Mail, Clock, ShieldCheck, MapPin } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "AI Automation & Agents",
    budget: "$25,000 – $50,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[1360px] mx-auto space-y-16">
        
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase">
            05 &bull; Direct Contact
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-cortelo-text">
            Initiate Architecture Briefing.
          </h1>
          <p className="text-base text-cortelo-muted leading-relaxed font-light">
            We reply within 1 business day. Every inquiry is personally reviewed by founders Hunzila Nisar and Mahreen Hashir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Column */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 md:p-12 border border-cortelo-border">
            {submitted ? (
              <div className="p-10 rounded-xl border border-cortelo-mint/50 bg-cortelo-surface/80 text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-cortelo-mint/20 text-cortelo-mint flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold uppercase text-cortelo-text">
                  Briefing Received
                </h3>
                <p className="text-sm text-cortelo-muted max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your project briefing has been delivered directly to Hunzila Nisar and Mahreen Hashir. We will respond with an architectural assessment within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-cortelo-muted mb-2 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-sm text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-cortelo-muted mb-2 uppercase">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-sm text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-cortelo-muted mb-2 uppercase">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-sm text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-cortelo-muted mb-2 uppercase">
                      Service Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-sm text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                    >
                      <option>AI Automation & Agents</option>
                      <option>Custom Machine Learning Core</option>
                      <option>Generative AI & LLM Systems</option>
                      <option>Full-Stack Web & Mobile</option>
                      <option>Data Pipelines & MLOps</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-cortelo-muted mb-2 uppercase">
                    Estimated Project Scope / Investment
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-sm text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                  >
                    <option>$10,000 – $25,000 (Sprint 0 Architecture & MVP)</option>
                    <option>$25,000 – $50,000 (Full Production Deployment)</option>
                    <option>$50,000 – $100,000+ (Enterprise Multi-System Infrastructure)</option>
                    <option>Monthly Engineering Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-cortelo-muted mb-2 uppercase">
                    Project Requirements / Objectives *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current bottleneck, target metrics, or system requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-sm text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 rounded-full bg-cortelo-mint text-black font-bold text-sm tracking-wide uppercase hover:opacity-90 active:scale-[0.99] transition-all shadow-[0_0_24px_rgba(45,212,167,0.3)]"
                >
                  Submit Briefing Direct to Founders
                </button>
              </form>
            )}
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel rounded-2xl p-8 border border-cortelo-border space-y-6">
              <h3 className="text-xl font-bold uppercase text-cortelo-text">
                Direct Communication Channels
              </h3>
              
              <div className="space-y-4 text-xs font-mono text-cortelo-muted">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cortelo-mint shrink-0" />
                  <div>
                    <div className="text-cortelo-text font-bold">General Inquiries</div>
                    <a href="mailto:hello@cortelo.ai" className="hover:text-cortelo-mint underline">
                      hello@cortelo.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-cortelo-mint shrink-0" />
                  <div>
                    <div className="text-cortelo-text font-bold">Security Reporting</div>
                    <a href="mailto:security@cortelo.ai" className="hover:text-cortelo-mint underline">
                      security@cortelo.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cortelo-mint shrink-0" />
                  <div>
                    <div className="text-cortelo-text font-bold">Response Expectation</div>
                    <div>Within 1 business day &bull; PKT (UTC+5)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cortelo-mint shrink-0" />
                  <div>
                    <div className="text-cortelo-text font-bold">Global Remote Studio</div>
                    <div>Serving enterprise clients across US, EU, and APAC</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-8 border border-cortelo-border space-y-4">
              <h4 className="text-sm font-bold uppercase text-cortelo-text">
                Mutual Non-Disclosure (NDA)
              </h4>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                We execute bilateral NDAs before reviewing proprietary datasets, internal source code, or architecture diagrams.
              </p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
