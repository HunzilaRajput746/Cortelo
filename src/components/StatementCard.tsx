"use client";

import React, { useEffect, useRef, useState } from "react";
import VideoGround from "./VideoGround";

const WORDS =
  "Most agencies rent you software by the seat. We build yours, host it on servers you control, and give you the keys the day it ships.".split(
    " ",
  );

/**
 * The page's type moment: the studio's position set large over its film.
 * Words light up one after another while the section is on screen.
 */
export default function StatementCard() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLit(WORDS.length);
      return;
    }
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      setLit(Math.round(progress * WORDS.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section aria-labelledby="statement-h" className="relative isolate overflow-hidden py-28 md:py-40">
      {/* client slot: /assets/videos/cortelo/statement.mp4 */}
      <VideoGround slot="statement" className="absolute inset-0 -z-20" opacity={0.35} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--bg)_0%,rgba(7,9,10,0.7)_30%,rgba(7,9,10,0.7)_70%,var(--bg)_100%)]" />

      <div className="wrap">
        <h2 id="statement-h" className="eyebrow mb-10">
          How the studio works
        </h2>
        <p ref={ref} className="max-w-[1100px] text-[32px] sm:text-[46px] lg:text-[62px] font-medium leading-[1.08] tracking-[-0.035em]">
          {WORDS.map((w, i) => (
            <span
              key={i}
              className="transition-colors duration-500"
              style={{ color: i < lit ? "var(--text)" : "rgba(238,242,240,0.16)" }}
            >
              {w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
