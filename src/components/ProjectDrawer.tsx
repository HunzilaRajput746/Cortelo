"use client";

import React, { useState } from "react";
import BrandLogo from "./BrandLogo";

interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ isOpen, onClose }: ProjectDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discipline: "Autonomous Agent Systems & Swarms",
    scope: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Drawer Body */}
      <aside
        className="relative z-10 w-full max-w-xl glass-panel p-8 md:p-12 overflow-y-auto h-full flex flex-col justify-between border-l border-cortelo-border shadow-2xl animate-in slide-in-from-right duration-300"
        aria-label="Project Briefing Drawer"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-cortelo-border">
            <BrandLogo />
            <button
              onClick={onClose}
              className="text-xs font-mono px-3 py-1.5 rounded-full border border-cortelo-border hover:border-cortelo-mint text-cortelo-muted hover:text-white transition-all"
            >
              CLOSE &times;
            </button>
          </div>

          <div className="py-8 space-y-6">
            <div>
              <span className="text-xs font-mono text-cortelo-mint tracking-widest uppercase">
                Direct Founder Access
              </span>
              <h3 className="text-2xl font-bold mt-2 text-cortelo-text">
                Commission an Architecture.
              </h3>
              <p className="text-sm text-cortelo-muted mt-2 leading-relaxed">
                Led personally by founders <strong>Hunzila Nisar</strong> and <strong>Mahreen Hashir</strong>. We evaluate feasibility, data security, and latency parameters within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl border border-cortelo-mint/50 bg-cortelo-surface/80 text-center space-y-3">
                <div className="w-10 h-10 mx-auto rounded-full bg-cortelo-mint/20 text-cortelo-mint flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-cortelo-text">Brief Received</h4>
                <p className="text-xs font-mono text-cortelo-muted leading-relaxed">
                  Your specifications have been routed directly to Hunzila Nisar & Mahreen Hashir. Expect a technical assessment within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-cortelo-muted mb-1.5 uppercase">
                    Your Name / Principal
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full h-11 px-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-sm text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cortelo-muted mb-1.5 uppercase">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@enterprise.com"
                    className="w-full h-11 px-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-sm text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-cortelo-muted mb-1.5 uppercase">
                    Primary Discipline
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full h-11 px-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-sm text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                  >
                    <option>Autonomous Agent Systems & Swarms</option>
                    <option>Custom ML & Deep Learning Pipeline</option>
                    <option>Generative AI, RAG & LLM Engineering</option>
                    <option>High-Throughput Full-Stack Platform</option>
                    <option>Continuous MLOps & Telemetry Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-cortelo-muted mb-1.5 uppercase">
                    Challenge & Latency Objectives
                  </label>
                  <textarea
                    rows={3}
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    placeholder="e.g. Processing 50k documents daily with P99 < 150ms..."
                    className="w-full p-4 rounded-lg bg-cortelo-surface border border-cortelo-border text-sm text-cortelo-text focus:border-cortelo-mint outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-cortelo-mint text-black font-bold text-sm tracking-wide uppercase hover:opacity-90 active:scale-[0.99] transition-all shadow-[0_0_24px_rgba(45,212,167,0.3)] mt-2"
                >
                  Submit Brief Direct to Founders
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-6 border-t border-cortelo-border text-xs font-mono text-cortelo-muted flex justify-between">
          <span>Mutual NDA Enforced</span>
          <span>PKT / UTC+5 &bull; Global Delivery</span>
        </div>
      </aside>
    </div>
  );
}

