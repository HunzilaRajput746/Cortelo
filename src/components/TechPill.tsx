import React from "react";

export default function TechPill({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-1 rounded-lg bg-[#141414] border border-white/10 text-[11px] font-mono text-white/60 hover:text-white hover:border-[#FF4533] transition-colors">
      {label}
    </span>
  );
}
