"use client";

import React, { useState } from "react";
import { Plus, Minus, ExternalLink, HelpCircle } from "lucide-react";
import { AGENCY_FAQS, FOUNDER_DATA } from "@/lib/agencyData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-cortelo-border">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-3.5 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase tracking-wider">
          FAQs
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-cortelo-text tracking-tight">
          Frequently asked <span className="text-cortelo-mint italic">questions</span>.
        </h2>
        <p className="text-sm sm:text-base text-cortelo-muted leading-relaxed font-light">
          Everything you need to know about our proprietary AI development, deployment schedules, self-hosted VPS infrastructure, and 100% IP ownership.
        </p>
      </div>

      {/* Accordion Container */}
      <div className="max-w-4xl mx-auto space-y-4">
        {AGENCY_FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`glass-panel rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-cortelo-mint/40 bg-[#0B0F19]/90 shadow-[0_0_20px_rgba(45,212,167,0.06)]"
                  : "border-cortelo-border/70 bg-[#0B0F19]/60 hover:border-cortelo-mint/30"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full p-6 sm:p-7 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer group"
              >
                <span className="font-bold text-base sm:text-lg text-cortelo-text group-hover:text-cortelo-mint transition-colors">
                  {faq.q}
                </span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? "bg-cortelo-mint text-[#07090E] border-cortelo-mint"
                      : "bg-white/[0.03] text-cortelo-muted border-cortelo-border group-hover:border-cortelo-mint/40 group-hover:text-cortelo-text"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm text-cortelo-muted leading-relaxed font-light border-t border-cortelo-border/40 pt-4 animate-in fade-in duration-200 space-y-3">
                  <p>{faq.a}</p>
                  
                  {/* Additional Founder link for credibility */}
                  {index === 2 && (
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <a
                        href={FOUNDER_DATA.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cortelo-mint hover:underline font-semibold"
                      >
                        <span>Founder Portfolio & Projects (devhunzila.site)</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact Banner */}
      <div className="mt-14 max-w-2xl mx-auto p-6 rounded-2xl border border-cortelo-border/80 bg-[#0F131D]/40 text-center space-y-2">
        <p className="text-xs font-mono text-cortelo-muted">
          Have an architecture question not answered here?
        </p>
        <p className="text-sm text-cortelo-text">
          Reach out directly to Hunzila Nisar via{" "}
          <a
            href={FOUNDER_DATA.whatsappUrl}
            className="text-cortelo-mint font-semibold hover:underline"
          >
            Direct Project Briefing
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${FOUNDER_DATA.email}`}
            className="text-cortelo-mint font-semibold hover:underline"
          >
            {FOUNDER_DATA.email}
          </a>
        </p>
      </div>
    </section>
  );
}

