"use client";

import React, { useState } from "react";
import { Mail, Clock, MessageSquare, ExternalLink, Award, User } from "lucide-react";
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
    <main className="min-h-screen pt-36 pb-24 px-6 relative z-10 bg-[#000000]">
      <div className="max-w-[1440px] mx-auto space-y-16">

        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/90 font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
            <span>Direct Founder Access &bull; 06 Contact</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#FCFCFA]">
            Initiate Architecture{" "}
            <span className="font-serif italic font-normal text-white lowercase">Briefing</span>.
          </h1>
          <p className="text-base text-white/60 leading-relaxed font-light">
            We respond within 24 hours. Every inquiry is personally reviewed by founders <strong>Hunzila Nisar</strong> and <strong>Mahreen Hashir</strong>. Mutual NDA enforced.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl p-8 md:p-12 border border-white/10 bg-[#0D0D0D] shadow-xl">
            {submitted ? (
              <div className="p-10 rounded-2xl border border-[#FF4533]/50 bg-[#141414] text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#FF4533]/20 text-[#FF4533] flex items-center justify-center font-bold text-2xl shadow-[0_0_20px_rgba(255,69,51,0.3)]">
                  ✓
                </div>
                <h3 className="text-2xl font-bold uppercase text-[#FCFCFA]">
                  Briefing Received
                </h3>
                <p className="text-sm text-white/60 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your project specifications have been delivered directly to Hunzila Nisar &amp; team. We will respond with an architectural assessment within 24 hours.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={FOUNDER_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white text-xs font-mono font-semibold transition-all shadow-[0_0_20px_rgba(255,69,51,0.35)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Initiate Project Briefing</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-2 uppercase">
                      Your Name / Principal *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-[#141414] border border-white/10 text-sm text-white focus:border-[#FF4533] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-2 uppercase">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-[#141414] border border-white/10 text-sm text-white focus:border-[#FF4533] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-2 uppercase">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Systems Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-[#141414] border border-white/10 text-sm text-white focus:border-[#FF4533] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-2 uppercase">
                      Service Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-12 px-4 rounded-lg bg-[#141414] border border-white/10 text-sm text-white focus:border-[#FF4533] outline-none transition-colors"
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
                  <label className="block text-xs font-mono text-white/60 mb-2 uppercase">
                    Target Scope / Investment Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg bg-[#141414] border border-white/10 text-sm text-white focus:border-[#FF4533] outline-none transition-colors"
                  >
                    <option>$10,000 – $25,000 (Sprint 0 Architecture & MVP)</option>
                    <option>$25,000 – $50,000 (Full Production Deployment)</option>
                    <option>$50,000 – $100,000+ (Enterprise Multi-System Infrastructure)</option>
                    <option>Monthly Engineering Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 mb-2 uppercase">
                    Project Requirements / Objectives *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current bottleneck, target metrics, or system requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-lg bg-[#141414] border border-white/10 text-xs font-mono text-white focus:border-[#FF4533] outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-conversion-primary w-full h-14 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs tracking-wider uppercase active:scale-[0.99] transition-all shadow-[0_0_24px_rgba(255,69,51,0.35)] cursor-pointer"
                >
                  Submit Briefing Direct to Founders
                </button>
              </form>
            )}
          </div>

          {/* Details & Direct Contact Channels Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Quick Founder Channels Box */}
            <div className="rounded-3xl p-8 border border-white/10 bg-[#0D0D0D] space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-white/90 font-semibold">
                Priority Communication Channels
              </span>

              <div className="space-y-4 text-xs font-mono">
                <a
                  href={FOUNDER_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-white/10 bg-[#141414] flex items-center justify-between hover:border-[#FF4533] transition-all text-white group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[#FF4533]" />
                    <div>
                      <div className="font-bold text-[#FCFCFA]">Direct Inquiry</div>
                      <div className="text-[11px] text-white/50">Available on Request</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
                </a>

                <a
                  href={`mailto:${FOUNDER_DATA.email}`}
                  className="p-4 rounded-xl border border-white/10 bg-[#141414] flex items-center justify-between hover:border-[#FF4533] transition-all text-white/60 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#FF4533]" />
                    <div>
                      <div className="font-bold text-[#FCFCFA]">Direct Founder Email</div>
                      <div className="text-[11px] text-white/50">{FOUNDER_DATA.email}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
                </a>

                <a
                  href={FOUNDER_DATA.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-white/10 bg-[#141414] flex items-center justify-between hover:border-[#FF4533] transition-all text-white/60 hover:text-white group"
                >
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-[#FF4533]" />
                    <div>
                      <div className="font-bold text-[#FCFCFA]">Hunzila Nisar Portfolio</div>
                      <div className="text-[11px] text-white/50">devhunzila.site</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
                </a>

                <a
                  href={FOUNDER_DATA.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border border-white/10 bg-[#141414] flex items-center justify-between hover:border-green-400 transition-all text-green-400 group"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="font-bold text-[#FCFCFA]">Fiverr Pro Services</div>
                      <div className="text-[11px] text-green-400">Top Rated Seller Profile</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:translate-x-0.5 group-hover:text-white transition-all" />
                </a>
              </div>
            </div>

            {/* Response Time & NDA Box */}
            <div className="rounded-3xl p-8 border border-white/10 space-y-4 bg-[#0D0D0D]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4533]">
                <Clock className="w-4 h-4" />
                <span>Response SLA: Within 24 Hours</span>
              </div>
              <h4 className="text-sm font-bold uppercase text-[#FCFCFA]">
                Mutual Non-Disclosure Agreement
              </h4>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                We sign and enforce bilateral NDAs before reviewing any proprietary datasets, CRM architectures, or enterprise codebases.
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
