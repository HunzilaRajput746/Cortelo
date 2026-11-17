import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cortelo: {
          obsidian: "#07090a",
          surface: "#0d1112",
          surface2: "#131819",
          surface3: "#1a2022",
          border: "rgba(255, 255, 255, 0.10)",
          borderHover: "rgba(95, 212, 192, 0.45)",
          mint: "#5fd4c0",
          emerald: "#86e3d3",
          flame: "#5fd4c0",
          flameHover: "#86e3d3",
          text: "#eef2f0",
          muted: "rgba(255, 255, 255, 0.56)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Instrument Serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "conic-slow": "spin 25s linear infinite",
        "conic-reverse": "spin-reverse 30s linear infinite",
        "float": "float 8s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
