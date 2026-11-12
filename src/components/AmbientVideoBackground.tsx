"use client";

import React, { useState, useEffect } from "react";

export default function AmbientVideoBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#000000]">
      {/* 1. Conversion Signature Rotating Conic Gradient Orbs */}
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none opacity-45">
        <div className="w-full h-full conic-flame-orb animate-conic-slow" />
      </div>

      <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[550px] h-[550px] pointer-events-none opacity-30 mix-blend-screen">
        <div className="w-full h-full conic-warm-orb animate-conic-reverse" />
      </div>

      {/* 2. Mid-page Ambient Accent Orb */}
      <div className="absolute top-[45%] -left-[150px] w-[500px] h-[500px] pointer-events-none opacity-20">
        <div className="w-full h-full conic-flame-orb animate-conic-slow" />
      </div>

      <div className="absolute top-[75%] -right-[150px] w-[550px] h-[550px] pointer-events-none opacity-25">
        <div className="w-full h-full conic-warm-orb animate-conic-reverse" />
      </div>

      {/* 3. Deep Radial Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000000_90%)] pointer-events-none opacity-90" />

      {/* 4. Fine Grain Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
