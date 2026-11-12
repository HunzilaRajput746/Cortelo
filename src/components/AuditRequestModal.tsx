"use client";

import React, { useState } from "react";
import { X, Check } from "lucide-react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditRequestModal({ isOpen, onClose }: AuditModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-6 shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-mono uppercase tracking-widest text-white/90 font-semibold inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
            Technical Audit
          </span>
          <h3 className="text-2xl font-black uppercase text-[#FCFCFA]">
            Request Architecture Audit
          </h3>
          <p className="text-xs text-white/60 leading-relaxed font-light">
            Direct review with Hunzila Nisar. We will analyze your workflows and propose a dedicated VPS deployment roadmap.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-[#FF4533]/10 border border-[#FF4533]/30 text-center space-y-2">
            <Check className="w-8 h-8 text-[#FF4533] mx-auto" />
            <p className="text-sm font-bold text-[#FCFCFA]">Audit Request Received</p>
            <p className="text-xs text-white/60">We will respond within 4 business hours via WhatsApp or email.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name & Company"
              required
              className="w-full p-3.5 rounded-xl bg-[#141414] border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF4533]"
            />
            <input
              type="email"
              placeholder="Work Email"
              required
              className="w-full p-3.5 rounded-xl bg-[#141414] border border-white/10 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF4533]"
            />
            <button
              type="submit"
              className="btn-conversion-primary w-full py-3.5 rounded-full bg-[#FF4533] hover:bg-[#FF220E] text-white font-bold uppercase text-xs tracking-wider transition-all cursor-pointer shadow-[0_0_20px_rgba(255,69,51,0.35)]"
            >
              Submit Audit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
