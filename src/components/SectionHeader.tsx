import React from "react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`space-y-4 mb-16 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono text-white/90 font-semibold uppercase tracking-wider inline-flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4533]" />
        {badge}
      </span>
      <h2 className="text-3xl sm:text-5xl font-black uppercase text-[#FCFCFA] tracking-tight">
        {title}{" "}
        {highlight && (
          <span className="font-serif italic font-normal text-white lowercase">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
