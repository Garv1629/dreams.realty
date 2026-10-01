import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact "Blue & Cream" Color System
        navy: {
          DEFAULT: "#1F3A5F",
          dark: "#152842",
          light: "#2B4D7B",
        },
        slate: {
          blue: "#4F7399",
          hover: "#3D5D7F",
        },
        dusty: {
          blue: "#A7B8CC",
          light: "#C5D2E0",
          subtle: "#E4EBF2",
        },
        beige: {
          soft: "#DCD3C4",
          light: "#EBE5D9",
          muted: "#CEC4B2",
        },
        cream: {
          warm: "#F8F5ED",
          DEFAULT: "#F8F5ED",
          pure: "#FCFAF6",
        },
        // Semantic aliases
        "blue-navy": "#1F3A5F",
        "blue-slate": "#4F7399",
        "blue-dusty": "#A7B8CC",
        "beige-soft": "#DCD3C4",
        "cream-warm": "#F8F5ED",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      letterSpacing: {
        widest: "0.2em",
        cinema: "0.3em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
