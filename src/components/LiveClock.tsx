"use client";

import React, { useState, useEffect } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { timeZone: "Asia/Karachi", hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cortelo-border bg-white/[0.02] text-[11px] font-mono text-cortelo-muted">
      <span className="w-1.5 h-1.5 rounded-full bg-cortelo-mint animate-pulse" />
      <span>PKT {time} (UTC+5)</span>
    </div>
  );
}
