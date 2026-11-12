"use client";

import React, { useState } from "react";
import { Plus, Minus, ExternalLink } from "lucide-react";
import { AGENCY_FAQS, FOUNDER_DATA } from "@/lib/agencyData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-6 sm:px-10 max-w-[1440px] mx-auto border-t border-white/10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/90 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
          FAQs
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#FCFCFA] tracking-tight">
          Frequently asked <span className="font-serif italic font-normal text-white lowercase">questions</span>.
        </h2>
        <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
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
              className={`rounded-2xl border transition-all duration-300 bg-[#0D0D0D] ${
                isOpen
                  ? "border-[#FF4533]/50 shadow-[0_0_25px_rgba(255,69,51,0.1)]"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full p-6 sm:p-7 text-left flex justify-between items-center gap-4 focus:outline-none cursor-pointer group"
              >
                <span className="font-bold text-base sm:text-lg text-[#FCFCFA] group-hover:text-white transition-colors">
                  {faq.q}
                </span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? "bg-[#FF4533] text-white border-[#FF4533]"
                      : "bg-white/[0.04] text-white/60 border-white/10 group-hover:border-white/20 group-hover:text-white"
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
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm text-white/60 leading-relaxed font-light border-t border-white/10 pt-4 animate-in fade-in duration-200 space-y-3">
                  <p>{faq.a}</p>

                  {/* Additional Founder link for credibility */}
                  {index === 2 && (
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <a
                        href={FOUNDER_DATA.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF4533] hover:underline font-semibold"
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
      <div className="mt-14 max-w-2xl mx-auto p-6 rounded-2xl border border-white/10 bg-[#0D0D0D] text-center space-y-2">
        <p className="text-xs font-mono text-white/50">
          Have an architecture question not answered here?
        </p>
        <p className="text-sm text-[#FCFCFA]">
          Reach out directly to Hunzila Nisar via{" "}
          <a
            href={FOUNDER_DATA.whatsappUrl}
            className="text-[#FF4533] font-semibold hover:underline"
          >
            Direct Project Briefing
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${FOUNDER_DATA.email}`}
            className="text-[#FF4533] font-semibold hover:underline"
          >
            {FOUNDER_DATA.email}
          </a>
        </p>
      </div>
    </section>
  );
}
