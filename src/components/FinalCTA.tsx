"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { FOUNDER_DATA } from "@/lib/agencyData";
import { useAgencyShell } from "./ClientShell";
import VideoGround from "./VideoGround";

export default function FinalCTA() {
  const { openDrawer } = useAgencyShell();

  return (
    <section aria-labelledby="cta-h" className="py-16 md:py-24">
      <div className="wrap">
        <div className="relative isolate overflow-hidden rounded-[var(--radius-l)] border border-[var(--line)] px-6 py-20 md:px-16 md:py-28">
          {/* client slot: /assets/videos/cortelo/closing.mp4 */}
          <VideoGround slot="closing" className="absolute inset-0 -z-20" opacity={0.55} />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(7,9,10,0.35)_0%,rgba(7,9,10,0.9)_75%)]" />

          <div className="mx-auto max-w-[860px] text-center">
            <p className="eyebrow mb-7 justify-center">Next step</p>
            <h2 id="cta-h" className="display text-[32px] sm:text-[48px] lg:text-[64px]">
              Tell us what you want <span className="serif-accent text-[var(--accent)]">running</span> by next quarter.
            </h2>
            <p className="lede mx-auto mt-7 max-w-[540px]">
              A 15-minute call with a founder. You leave with a scope, a stack and a price, whether you hire us or not.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <button onClick={() => openDrawer("15-Min Discovery Call")} className="btn btn-primary !min-h-[56px] w-full !px-8 sm:w-auto">
                Book a 15-minute call <ArrowRight className="h-4 w-4" />
              </button>
              <a href={`mailto:${FOUNDER_DATA.agencyEmail}`} className="btn btn-ghost !min-h-[56px] w-full !px-8 sm:w-auto">
                {FOUNDER_DATA.agencyEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
