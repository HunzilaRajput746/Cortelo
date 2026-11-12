import React from "react";

export default function CardGlow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group rounded-3xl overflow-hidden p-[1px] bg-gradient-to-b from-white/10 via-transparent to-transparent hover:from-[#FF4533]/40 transition-all duration-500 ${className}`}>
      <div className="relative rounded-3xl bg-[#0D0D0D] h-full w-full">
        {children}
      </div>
    </div>
  );
}
