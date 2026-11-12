"use client";

import React, { useState } from "react";
import { Mail, Clock, ShieldCheck, MapPin, MessageSquare, ExternalLink, Award, User } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Custom CRM & Revenue Architecture (Revenue.inc Style)",
    budget: "$25,000 – $50,000 (Full Production Deployment)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10">
      <div className="max-w-[1440px] mx-auto space-y-16">
        
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase">
            <span>Direct Founder Access &bull; 06 Contact</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-cortelo-text">
            Initiate Architecture Briefing.
          </h1>
          <p className="text-base text-cortelo-muted leading-relaxed font-light">
            We respond within 24 hours. Every inquiry is personally reviewed by founders <strong>Hunzila Nisar</strong> and <strong>Mahreen Hashir</strong>. Mutual NDA enforced.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 md:p-12 border border-cortelo-mint/40 bg-[#0F131D]/90 shadow-xl">
            {submitted ? (
              <div className="p-10 rounded-xl border border-cortelo-mint/50 bg-cortelo-surface/80 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-cortelo-mint/20 text-cortelo-mint flex items-center justify-center font-bold text-2xl shadow-[0_0_20px_rgba(45,212,167,0.3)]">
                  ✓
                </div>
                <h3 className="text-2xl font-bold uppercase text-cortelo-text">
                  Briefing Received
                </h3>
                <p className="text-sm text-cortelo-muted max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your project specifications have been delivered directly to Hunzila Nisar &amp; team. We will respond with an architectural assessment within 24 hours.
                </p>
                <div className="pt-4 border-t border-cortelo-border">
                  <a
                    href={FOUNDER_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-mono font-semibold hover:bg-emerald-500/30 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp (+92 318 6326746)</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-cortelo-muted mb-2 uppercase">
                      Your Name / Principal *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
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
                      placeholder="Acme Systems Corp"
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
                      <option>Custom CRM & Revenue Architecture (Revenue.inc Style)</option>
                      <option>Autonomous AI Agents & Multi-Agent Swarms</option>
                      <option>Workflow Automation & Self-Hosted n8n VPS</option>
                      <option>Full-Stack Web & Next.js 15 Platform Engineering</option>
                      <option>Classic AI, Deep Learning & Computer Vision</option>
                      <option>Growth Marketing & High-Ticket Funnel Strategy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-cortelo-muted mb-2 uppercase">
                    Target Scope / Investment Range
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
                    className="w-full p-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-xs font-mono text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-14 rounded-full bg-cortelo-mint text-black font-bold text-xs tracking-wider uppercase hover:opacity-90 active:scale-[0.99] transition-all shadow-[0_0_24px_rgba(45,212,167,0.35)]"
                >
                  Submit Briefing Direct to Founders
                </button>
              </form>
            )}
          </div>

          {/* Details & Direct Contact Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Founder Channels Box */}
            <div className="glass-panel rounded-2xl p-8 border border-cortelo-mint/40 bg-[#0F131D]/90 space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-cortelo-mint font-semibold">
                Priority Communication Channels
              </span>
              
              <div className="space-y-4 text-xs font-mono">
                <a
                  href={FOUNDER_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-between hover:bg-emerald-500/20 transition-all text-emerald-400 group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5" />
                    <div>
                      <div className="font-bold text-cortelo-text">Direct WhatsApp</div>
                      <div className="text-[11px] text-emerald-400">+92 318 6326746</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={`mailto:${FOUNDER_DATA.email}`}
                  className="p-4 rounded-xl border border-cortelo-border bg-cortelo-surface flex items-center justify-between hover:border-cortelo-mint transition-all text-cortelo-muted hover:text-cortelo-text group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cortelo-mint" />
                    <div>
                      <div className="font-bold text-cortelo-text">Direct Founder Email</div>
                      <div className="text-[11px] text-cortelo-muted">{FOUNDER_DATA.email}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={FOUNDER_DATA.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-cortelo-border bg-cortelo-surface flex items-center justify-between hover:border-cortelo-mint transition-all text-cortelo-muted hover:text-cortelo-text group"
                >
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-cortelo-mint" />
                    <div>
                      <div className="font-bold text-cortelo-text">Hunzila Nisar Portfolio</div>
                      <div className="text-[11px] text-cortelo-muted">devhunzila.site</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href={FOUNDER_DATA.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-green-500/30 bg-green-500/5 flex items-center justify-between hover:border-green-400 transition-all text-green-400 group"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-bold text-cortelo-text">Fiverr Pro Services</div>
                      <div className="text-[11px] text-green-400">Top Rated Seller Profile</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Response Time & NDA Box */}
            <div className="glass-panel rounded-2xl p-8 border border-cortelo-border space-y-4 bg-[#0F131D]/80">
              <div className="flex items-center gap-2 text-xs font-mono text-cortelo-mint">
                <Clock className="w-4 h-4" />
                <span>Response SLA: Within 24 Hours</span>
              </div>
              <h4 className="text-sm font-bold uppercase text-cortelo-text">
                Mutual Non-Disclosure Agreement
              </h4>
              <p className="text-xs text-cortelo-muted leading-relaxed font-light">
                We sign and enforce bilateral NDAs before reviewing any proprietary datasets, CRM architectures, or enterprise codebases.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
