import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070E18",
          900: "#0C1726",
          850: "#0F1A2D",
          800: "#121F36",
          700: "#1A2C4B",
          600: "#233A62",
          500: "#324E7E",
        },
        gold: {
          50: "#FAF6EE",
          100: "#F5EEDC",
          200: "#EADCB9",
          300: "#DFC996",
          DEFAULT: "#C7A567",
          600: "#B89352",
          700: "#99773D",
        },
        forest: {
          DEFAULT: "#10241D",
        },
        cream: {
          DEFAULT: "#FDFBF5",
          light: "#FFFDF9",
        },
        trustpilot: {
          DEFAULT: "#00b67a",
          dark: "#009c68",
        },
        muted: {
          DEFAULT: "#57606C",
          light: "#6D6C6C",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
