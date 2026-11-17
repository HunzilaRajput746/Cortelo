"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { AGENCY_FAQS, FOUNDER_DATA } from "@/lib/agencyData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-h" className="py-24 md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-6">Questions</p>
          <h2 id="faq-h" className="h2">
            Questions clients ask <span className="soft">before the first call.</span>
          </h2>
          <p className="lede mt-6 max-w-[380px]">
            Something else on your mind?{" "}
            <a href={`mailto:${FOUNDER_DATA.agencyEmail}`} className="link-draw">
              Write to us
            </a>
            .
          </p>
        </div>

        <ul className="border-t border-[var(--line)]">
          {AGENCY_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={faq.q} className="border-b border-[var(--line)]">
                <h3>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${index}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className={`text-[18px] md:text-[20px] font-medium tracking-[-0.02em] transition-colors ${isOpen ? "text-[var(--text)]" : "text-[var(--text-muted)] group-hover:text-[var(--text)]"}`}>
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen
                          ? "rotate-45 border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-ink)]"
                          : "border-[var(--line-strong)] text-[var(--text-muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[640px] pb-7 text-[15px] leading-relaxed text-[var(--text-muted)]">{faq.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
