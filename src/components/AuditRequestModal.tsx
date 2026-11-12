"use client";

import React, { useState } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditRequestModal({ isOpen, onClose }: AuditModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg p-8 rounded-3xl bg-[#0B0F19] border border-cortelo-border space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 text-cortelo-muted hover:text-white cursor-pointer">
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cortelo-mint font-semibold">
            Technical Audit
          </span>
          <h3 className="text-2xl font-black uppercase text-cortelo-text">
            Request Architecture Audit
          </h3>
          <p className="text-xs text-cortelo-muted leading-relaxed font-light">
            Direct review with Hunzila Nisar. We will analyze your workflows and propose a dedicated VPS deployment roadmap.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-cortelo-mint/10 border border-cortelo-mint/30 text-center space-y-2">
            <Check className="w-8 h-8 text-cortelo-mint mx-auto" />
            <p className="text-sm font-bold text-cortelo-text">Audit Request Received</p>
            <p className="text-xs text-cortelo-muted">We will respond within 4 business hours via WhatsApp or email.</p>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name & Company"
              required
              className="w-full p-3.5 rounded-xl bg-[#131926] border border-cortelo-border text-xs text-cortelo-text focus:outline-none focus:border-cortelo-mint"
            />
            <input
              type="email"
              placeholder="Work Email"
              required
              className="w-full p-3.5 rounded-xl bg-[#131926] border border-cortelo-border text-xs text-cortelo-text focus:outline-none focus:border-cortelo-mint"
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-cortelo-mint text-[#07090E] font-bold uppercase text-xs tracking-wider hover:opacity-90 transition-all cursor-pointer"
            >
              Submit Audit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
