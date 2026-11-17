"use client";

import React, { useEffect, useRef } from "react";
import { VIDEO_SLOTS, type VideoSlotName } from "@/lib/media";

interface VideoGroundProps {
  slot: VideoSlotName;
  className?: string;
  /** 0-1, how strongly the film shows through */
  opacity?: number;
  /** paused until the slot is near the viewport */
  lazy?: boolean;
}

/**
 * A muted, looping background film. Plays only while on screen,
 * rests on its poster under reduced motion, and falls back to the
 * stand-in film until the studio's own file is in place.
 */
export default function VideoGround({ slot, className = "", opacity = 1, lazy = true }: VideoGroundProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const cfg = VIDEO_SLOTS[slot];

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      video.pause();
      return;
    }

    if (!lazy) {
      video.play().catch(() => {});
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "200px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [lazy]);

  return (
    <div className={`video-ground pointer-events-none ${className}`} aria-hidden="true">
      <video
        ref={ref}
        className="h-full w-full object-cover"
        style={{ opacity }}
        muted
        loop
        playsInline
        preload={lazy ? "metadata" : "auto"}
        poster={cfg.poster}
      >
        {/* client slot: {cfg.file} */}
        <source src={cfg.file} type="video/mp4" />
        {"fallback" in cfg && cfg.fallback ? <source src={cfg.fallback} type="video/mp4" /> : null}
      </video>
    </div>
  );
}
