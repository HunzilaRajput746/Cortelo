"use client";

import React, { useState, useEffect } from "react";

export default function AmbientVideoBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07090E]">
      {/* 1. Ambient 60FPS Video Background from Fragment.im */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-35 contrast-125 saturate-110"
      >
        <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
      </video>

      {/* 2. Deep Obsidian Gradient & Vignette Veil for 4K Typography Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/60 via-[#07090E]/75 to-[#07090E] pointer-events-none" />

      {/* 3. Soft Atmospheric Specular Radial Glow (behind hero crystal area) */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cortelo-mint/10 via-cyan-400/10 to-purple-600/10 filter blur-[90px] pointer-events-none" />

      {/* 4. Peripheral Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#07090E_100%)] pointer-events-none opacity-80" />
    </div>
  );
}
