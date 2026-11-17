/**
 * Background video slots.
 *
 * Each slot plays the studio's own film from /public/assets/videos/cortelo/<file>.
 * Until that file exists the browser falls through to the fallback source,
 * and the poster still shows while anything loads, so no slot is ever empty.
 * The stand-in film is shown in grey so it never passes for the real one.
 * Process slots have no stand-in film: they rest on the studio's own UI stills.
 *
 * To swap a film: drop the new .mp4 into public/assets/videos/cortelo/
 * with exactly the file name below. No code change is needed.
 */
export interface VideoSlotConfig {
  file: string;
  fallback?: string;
  poster: string;
}

const DIR = "/assets/videos/cortelo";

export const VIDEO_SLOTS = {
  hero: {
    file: `${DIR}/hero.mp4`,
    fallback: "/assets/videos/hero_ambient.mp4",
    poster: "/assets/images/hero_ambient.mp4.jpg",
  },
  ambient: {
    file: `${DIR}/ambient.mp4`,
    fallback: "/assets/videos/hero_ambient.mp4",
    poster: "/assets/images/hero_ambient.mp4.jpg",
  },
  statement: {
    file: `${DIR}/statement.mp4`,
    fallback: "/assets/videos/hero_ambient.mp4",
    poster: "/assets/images/hero_ambient.mp4.jpg",
  },
  processDiscover: {
    file: `${DIR}/process-discover.mp4`,
    poster: "/assets/projects/revenue_crm_preview.svg",
  },
  processBuild: {
    file: `${DIR}/process-build.mp4`,
    poster: "/assets/projects/deal_engine_preview.svg",
  },
  processHandover: {
    file: `${DIR}/process-handover.mp4`,
    poster: "/assets/projects/n8n_engine_preview.svg",
  },
  founders: {
    file: `${DIR}/founders.mp4`,
    fallback: "/assets/videos/hero_ambient.mp4",
    poster: "/assets/images/hero_ambient.mp4.jpg",
  },
  closing: {
    file: `${DIR}/closing.mp4`,
    fallback: "/assets/videos/hero_ambient.mp4",
    poster: "/assets/images/hero_ambient.mp4.jpg",
  },
} satisfies Record<string, VideoSlotConfig>;

export type VideoSlotName = keyof typeof VIDEO_SLOTS;
