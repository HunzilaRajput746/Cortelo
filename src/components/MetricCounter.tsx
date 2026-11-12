import React from "react";

interface MetricCounterProps {
  value: string;
  label: string;
  subtext?: string;
}

export default function MetricCounter({ value, label, subtext }: MetricCounterProps) {
  return (
    <div className="p-6 rounded-2xl bg-[#0B0F19]/80 border border-cortelo-border/70 hover:border-cortelo-mint/40 transition-colors">
      <div className="text-3xl sm:text-4xl font-black font-mono text-cortelo-mint tracking-tight">
        {value}
      </div>
      <div className="text-xs uppercase font-mono text-cortelo-text font-bold mt-1">
        {label}
      </div>
      {subtext && (
        <div className="text-[11px] text-cortelo-muted mt-1 font-light">
          {subtext}
        </div>
      )}
    </div>
  );
}
