"use client";

import React, { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { AGENCY_FAQS, FOUNDER_DATA } from "@/lib/agencyData";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {AGENCY_FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`glass-panel rounded-2xl border transition-all ${isOpen ? "border-cortelo-mint/40 bg-[#0F131D]/90" : "border-cortelo-border bg-[#0F131D]/60"
              }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
            >
              <span className="font-bold text-base text-cortelo-text">
                {faq.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-cortelo-muted shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-cortelo-mint" : ""
                  }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-cortelo-muted leading-relaxed font-light border-t border-cortelo-border/50 pt-4 animate-in fade-in duration-200">
                <p>{faq.a}</p>
                {index === 2 && (
                  <div className="mt-3 pt-3 border-t border-cortelo-border/40 flex items-center gap-3">
                    <a
                      href={FOUNDER_DATA.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cortelo-mint hover:underline font-semibold"
                    >
                      <span>Explore Live Portfolio (devhunzila.site)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
