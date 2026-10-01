/** @type {import('tailwindcss').Config} */
module.exports = {
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
          DEFAULT: "#4F7399",
          blue: "#4F7399",
          hover: "#3D5D7F",
        },
        dusty: {
          DEFAULT: "#A7B8CC",
          blue: "#A7B8CC",
          light: "#C5D2E0",
          subtle: "#E4EBF2",
        },
        beige: {
          DEFAULT: "#DCD3C4",
          soft: "#DCD3C4",
          light: "#EBE5D9",
          muted: "#CEC4B2",
        },
        cream: {
          DEFAULT: "#F8F5ED",
          warm: "#F8F5ED",
          pure: "#FCFAF6",
        },
        // Semantic aliases
        "blue-navy": "#1F3A5F",
        "blue-slate": "#4F7399",
        "blue-dusty": "#A7B8CC",
        "beige-soft": "#DCD3C4",
        "cream-warm": "#F8F5ED",
        // Backward-compatible mappings
        "charcoal-deep": "#1F3A5F",
        "ivory-warm": "#F8F5ED",
        "stone-muted": "#4F7399",
        "brass-elegant": "#1F3A5F",
        "sage-restrained": "#DCD3C4",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
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
