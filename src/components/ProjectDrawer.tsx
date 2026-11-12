"use client";

import React, { useState, useEffect } from "react";
import BrandLogo from "./BrandLogo";
import { MessageSquare, Mail, Shield, Lock } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";

interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: string;
}

export default function ProjectDrawer({ isOpen, onClose, initialScope = "" }: ProjectDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    discipline: "Custom CRM & Revenue Architecture (Revenue.inc Style)",
    scope: initialScope,
  });

  useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({ ...prev, scope: initialScope }));
    }
  }, [initialScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Drawer Surface */}
      <aside
        className="relative z-10 w-full max-w-xl p-8 md:p-12 overflow-y-auto h-full flex flex-col justify-between border-l border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.9)] bg-[#0D0D0D] animate-in slide-in-from-right duration-300"
        aria-label="Project Briefing Drawer"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <BrandLogo />
            <button
              onClick={onClose}
              className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-all cursor-pointer"
            >
              CLOSE &times;
            </button>
          </div>

          <div className="py-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono text-white/90 font-semibold uppercase">
                <Lock className="w-3 h-3 text-[#FF4533]" />
                Mutual NDA Protected &bull; Founder Direct
              </div>
              <h3 className="text-2xl font-black mt-2 uppercase text-[#FCFCFA] tracking-tight">
                Initiate Architecture Briefing.
              </h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed font-light">
                Evaluated personally by agency founder <strong>Hunzila Nisar</strong> and co-founder <strong>Mahreen Hashir</strong>. We assess architectural feasibility, VPS topologies, and latency budgets within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl border border-[#FF4533]/50 bg-[#141414] text-center space-y-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#FF4533]/20 text-[#FF4533] flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(255,69,51,0.3)]">
                  ✓
                </div>
                <h4 className="text-xl font-bold uppercase text-[#FCFCFA]">
                  Specification Received
                </h4>
                <p className="text-xs font-mono text-white/60 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your project specifications have been delivered directly to <strong>Hunzila Nisar</strong> and team. Expect a response with an architectural blueprint within 24 hours.
                </p>
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <p className="text-[11px] font-mono text-white/50">
                    Need instant response? Contact Hunzila directly:
                  </p>
                  <a
                    href={`mailto:${FOUNDER_DATA.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 text-white border border-white/10 font-mono text-xs font-semibold hover:border-[#FF4533] hover:text-[#FF4533] transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FF4533]" />
                    <span>Email: {FOUNDER_DATA.email}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                    Your Name / Principal *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full h-11 px-4 rounded-lg bg-[#141414] border border-white/10 text-sm text-white focus:border-[#FF4533] outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@enterprise.com"
                      className="w-full h-11 px-4 rounded-lg bg-[#141414] border border-white/10 text-sm text-white focus:border-[#FF4533] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Systems Corp"
                      className="w-full h-11 px-4 rounded-lg bg-[#141414] border border-white/10 text-sm text-white focus:border-[#FF4533] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                    Primary Service Discipline
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full h-11 px-4 rounded-lg bg-[#141414] border border-white/10 text-sm text-white focus:border-[#FF4533] outline-none transition-colors"
                  >
                    <option>Custom CRM & Revenue Architecture (Revenue.inc Style)</option>
                    <option>Autonomous AI Agents & Multi-Agent Swarms</option>
                    <option>Workflow Automation & Self-Hosted n8n VPS</option>
                    <option>Full-Stack Web & Next.js 15 Platform Engineering</option>
                    <option>Classic AI, Deep Learning & Computer Vision</option>
                    <option>Growth Marketing & High-Ticket Funnel Strategy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/60 mb-1.5 uppercase">
                    Challenge & Latency Objectives
                  </label>
                  <textarea
                    rows={4}
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    placeholder="Describe your current system bottleneck, desired integrations, or custom CRM requirements..."
                    className="w-full p-4 rounded-lg bg-[#141414] border border-white/10 text-xs font-mono text-white focus:border-[#FF4533] outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-conversion-primary w-full h-12 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold text-xs tracking-wider uppercase active:scale-[0.99] transition-all shadow-[0_0_24px_rgba(255,69,51,0.35)] mt-2 cursor-pointer"
                >
                  Submit Brief Directly to Hunzila &amp; Team
                </button>
              </form>
            )}

            {/* Direct Quick Channels */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 block">
                Direct Channels &bull; Immediate Contact:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <a
                  href={FOUNDER_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-[#FF4533] hover:border-[#FF4533]/40 transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3 h-3 text-[#FF4533]" />
                  <span>Direct Inquiry Channel</span>
                </a>
                <a
                  href={`mailto:${FOUNDER_DATA.email}`}
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white transition-all flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3 text-[#FF4533]" />
                  <span>{FOUNDER_DATA.email}</span>
                </a>
                <a
                  href={FOUNDER_DATA.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-[#FF4533] hover:border-[#FF4533]/40 transition-all flex items-center gap-1.5"
                >
                  <span>devhunzila.site</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-xs font-mono text-white/50 flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#FF4533]" />
            100% IP Handover
          </span>
          <span>PKT (UTC+5) &bull; Global Remote Delivery</span>
        </div>
      </aside>
    </div>
  );
}
