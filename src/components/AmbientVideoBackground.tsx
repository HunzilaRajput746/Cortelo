"use client";

import React, { useState, useEffect } from "react";

export default function AmbientVideoBackground() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Gentle smooth throttle
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07090E]">
      {/* 1. Ambient 60FPS Video Background from Fragment */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-30 contrast-125 saturate-110 filter blur-[0.5px]"
      >
        <source src="/assets/videos/hero_ambient.mp4" type="video/mp4" />
      </video>

      {/* 2. Deep Obsidian Gradient & Vignette Veil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090E]/65 via-[#07090E]/80 to-[#07090E] pointer-events-none" />

      {/* 3. Subtle Dynamic Specular Radial Glow tracking cursor */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cortelo-mint/12 via-cyan-400/8 to-purple-600/10 filter blur-[110px] pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* 4. Peripheral Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#07090E_100%)] pointer-events-none opacity-85" />

      {/* 5. Micro-Grid Matrix Overlay for 4K Technical Atmosphere */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
