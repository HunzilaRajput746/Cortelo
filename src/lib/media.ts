/**
 * Background video slots.
 *
 * Each slot plays the studio's own film from /public/assets/videos/cortelo/<file>.
 * Until that file exists the browser falls through to the fallback source,
 * and the poster still shows while anything loads, so no slot is ever empty.
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
    fallback: "/assets/videos/prism_loop.mp4",
    poster: "/assets/images/prism_loop.mp4.jpg",
  },
  processDiscover: {
    file: `${DIR}/process-discover.mp4`,
    fallback: "/assets/videos/case_study_1.mp4",
    poster: "/assets/images/case_study_1.mp4.jpg",
  },
  processBuild: {
    file: `${DIR}/process-build.mp4`,
    fallback: "/assets/videos/case_study_2.mp4",
    poster: "/assets/images/case_study_2.mp4.jpg",
  },
  processHandover: {
    file: `${DIR}/process-handover.mp4`,
    fallback: "/assets/videos/case_study_3.mp4",
    poster: "/assets/images/case_study_3.mp4.jpg",
  },
  founders: {
    file: `${DIR}/founders.mp4`,
    fallback: "/assets/videos/prism_loop.mp4",
    poster: "/assets/images/prism_frame_1.jpg",
  },
  closing: {
    file: `${DIR}/closing.mp4`,
    fallback: "/assets/videos/hero_ambient.mp4",
    poster: "/assets/images/hero_ambient.mp4.jpg",
  },
} satisfies Record<string, VideoSlotConfig>;

export type VideoSlotName = keyof typeof VIDEO_SLOTS;
