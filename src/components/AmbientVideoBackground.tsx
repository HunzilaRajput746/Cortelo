"use client";

import React from "react";
import VideoGround from "./VideoGround";

/** Fixed, page-wide film behind every page, held down so text always reads. */
export default function AmbientVideoBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[var(--bg)]">
      <VideoGround slot="ambient" className="absolute inset-0" opacity={0.14} lazy={false} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(95,212,192,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,10,0.55)_0%,rgba(7,9,10,0.92)_70%)]" />
    </div>
  );
}
