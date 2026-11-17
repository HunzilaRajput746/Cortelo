import React from "react";

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
}

/** The C-arc mark. On hover of its parent link the arc turns a quarter. */
export default function BrandLogo({ className = "w-7 h-7", showWordmark = true }: BrandLogoProps) {
  return (
    <span className="flex items-center gap-2.5 group/logo">
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g className="origin-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/logo:rotate-90">
          <path
            d="M72 26 C60 16 38 16 26 28 C14 40 14 60 26 72 C38 84 60 84 72 74"
            stroke="var(--accent)"
            strokeWidth="11"
            strokeLinecap="round"
          />
        </g>
        <circle cx="50" cy="50" r="9" fill="var(--text)" />
      </svg>
      {showWordmark && (
        <span className="font-semibold text-[17px] tracking-[-0.03em] text-[var(--text)]">Cortelo</span>
      )}
    </span>
  );
}
