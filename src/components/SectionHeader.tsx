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
      <span className="px-3.5 py-1 rounded-full border border-cortelo-mint/40 bg-cortelo-mint/10 text-xs font-mono text-cortelo-mint font-semibold uppercase tracking-wider">
        {badge}
      </span>
      <h2 className="text-3xl sm:text-5xl font-black uppercase text-cortelo-text tracking-tight">
        {title}{" "}
        {highlight && <span className="text-cortelo-mint italic font-serif lowercase">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-cortelo-muted leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
