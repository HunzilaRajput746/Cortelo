import React from "react";

export default function TechPill({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-lg bg-[#131926] border border-cortelo-border text-[11px] font-mono text-cortelo-muted hover:text-cortelo-mint hover:border-cortelo-mint/40 transition-colors">
      {label}
    </span>
  );
}
