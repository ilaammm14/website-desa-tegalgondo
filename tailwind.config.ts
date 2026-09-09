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
        // Deep Forest Green — primary dark
        forest: {
          DEFAULT: "#1a3a2a",
          50: "#f0f7f4",
          100: "#d9ede4",
          200: "#b5dccc",
          300: "#83c4aa",
          400: "#52a484",
          500: "#308a67",
          600: "#236f52",
          700: "#1d5a43",
          800: "#1a3a2a",
          900: "#152f22",
        },
        // Natural Green — primary brand
        natural: {
          DEFAULT: "#2d6a4f",
          50: "#f0f9f4",
          100: "#dbf0e5",
          200: "#b9e0cc",
          300: "#87c9a9",
          400: "#52a982",
          500: "#2d6a4f",
          600: "#245940",
          700: "#1e4834",
          800: "#1a3a2a",
          900: "#152f22",
        },
        // Leaf Green — light accent
        leaf: {
          DEFAULT: "#52b788",
          50: "#f0fbf6",
          100: "#d3f4e3",
          200: "#a9e8c9",
          300: "#72d4a5",
          400: "#52b788",
          500: "#299966",
          600: "#1e7a51",
          700: "#1a6243",
          800: "#184e37",
          900: "#16402e",
        },
        // Subtle Gold — accent
        gold: {
          DEFAULT: "#c9a84c",
          50: "#fdf9ee",
          100: "#f8f0d3",
          200: "#f1dfa3",
          300: "#e8c86a",
          400: "#c9a84c",
          500: "#b8912e",
          600: "#9e7524",
          700: "#7f5c21",
          800: "#674a21",
          900: "#573e20",
        },
        // Soft Beige — light background
        beige: {
          DEFAULT: "#f5f0e8",
          50: "#fdfcf9",
          100: "#faf8f3",
          200: "#f5f0e8",
          300: "#ede4d3",
          400: "#dfd3bc",
          500: "#ccbda0",
          600: "#b5a07e",
          700: "#9a8263",
          800: "#7e6950",
          900: "#685745",
        },
        // Warm White
        cream: "#faf8f3",
        // Dark Charcoal — text
        charcoal: {
          DEFAULT: "#1c1c1e",
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#1c1c1e",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "46": "11.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "soft": "0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)",
        "medium": "0 4px 25px -5px rgba(0,0,0,0.1), 0 10px 30px -5px rgba(0,0,0,0.07)",
        "strong": "0 10px 40px -10px rgba(0,0,0,0.2), 0 20px 50px -10px rgba(0,0,0,0.15)",
        "green": "0 4px 25px -5px rgba(45,106,79,0.25)",
        "gold": "0 4px 25px -5px rgba(201,168,76,0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-forest": "linear-gradient(135deg, #1a3a2a 0%, #2d6a4f 50%, #52b788 100%)",
        "gradient-warm": "linear-gradient(135deg, #f5f0e8 0%, #faf8f3 100%)",
        "gradient-dark": "linear-gradient(180deg, rgba(26,58,42,0) 0%, rgba(26,58,42,0.7) 60%, rgba(26,58,42,0.95) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
