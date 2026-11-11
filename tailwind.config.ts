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
          obsidian: "#07090E",
          surface: "#0F131D",
          surface2: "#161C2B",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(45, 212, 167, 0.4)",
          mint: "#2DD4A7",
          emerald: "#0FA68A",
          text: "#F2F0EA",
          muted: "#8C94A6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
