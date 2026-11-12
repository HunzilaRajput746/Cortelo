import React from "react";

interface BrandLogoProps {
  className?: string;
  showWordmark?: boolean;
}

export default function BrandLogo({ className = "w-7 h-7", showWordmark = true }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3 group">
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M72 26 C60 16 38 16 26 28 C14 40 14 60 26 72 C38 84 60 84 72 74"
          stroke="#FF4533"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <circle cx="50" cy="50" r="9" fill="#F2F0EA" />
      </svg>
      {showWordmark && (
        <span className="font-extrabold text-lg tracking-[-0.03em] uppercase text-cortelo-text">
          Cortelo
        </span>
      )}
    </div>
  );
}

