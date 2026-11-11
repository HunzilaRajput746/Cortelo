"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What are your typical project timelines from architecture to deployment?",
    a: "Technical discovery takes 1 week. Complete production systems (AI models, pipelines, and full-stack interfaces) typically take 4 to 8 weeks depending on model complexity, integrations, and compliance benchmarks.",
  },
  {
    q: "Who owns the intellectual property and model checkpoints?",
    a: "You own 100% of all intellectual property, source code, dataset transformations, prompts, and trained model checkpoints from day one. Everything is deployed directly to your private cloud infrastructure.",
  },
  {
    q: "What is your pricing and engagement model?",
    a: "We operate exclusively on fixed-scope milestone deliverables or monthly dedicated engineering retainers. You receive clear cost boundaries with zero surprise billing.",
  },
  {
    q: "How do you handle confidential enterprise data and NDAs?",
    a: "We execute mutual non-disclosure agreements before inspecting any project material. All training and inference environments operate within isolated VPCs, with no data ever shared with third-party public training corpora.",
  },
  {
    q: "What post-launch maintenance is included?",
    a: "Every deployment includes 30 days of comprehensive post-launch telemetry monitoring, bug fixes, and performance tuning, with optional SLA-backed retainer packages for continuous model retraining.",
  },
  {
    q: "Can Cortelo work alongside our internal engineering team?",
    a: "Yes. We frequently embed with enterprise engineering teams as specialized AI architects, handling model development and pipeline hardening while holding weekly architecture synchronization sessions.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="glass-panel rounded-2xl border border-cortelo-border overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
            >
              <span className="font-bold text-base text-cortelo-text">
                {faq.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-cortelo-muted shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-cortelo-mint" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-cortelo-muted leading-relaxed font-light border-t border-cortelo-border/50 pt-4 animate-in fade-in duration-200">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
