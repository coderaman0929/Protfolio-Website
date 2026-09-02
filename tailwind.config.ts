import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        space: {
          950: "#0A0A0F",
          900: "#0F0F1A",
          800: "#161625",
          700: "#1E1E35",
          600: "#2A2A4A",
        },
        violet: {
          DEFAULT: "#7C3AED",
          light: "#A855F7",
          glow: "#9F7AEA",
        },
        cyan: {
          electric: "#00D4FF",
          glow: "#22D3EE",
        },
        slate: {
          muted: "#6B7280",
          light: "#9CA3AF",
        },
        white: {
          soft: "#F0F0FF",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "0.9" }],
        "display-lg": ["clamp(2rem, 5vw, 5rem)", { lineHeight: "1" }],
        "display-md": ["clamp(1.5rem, 3vw, 3rem)", { lineHeight: "1.1" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      animation: {
        "gradient-shift": "gradientShift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        "spin-slow": "spin 20s linear infinite",
        "aurora": "aurora 12s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(124, 58, 237, 0.9)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%", opacity: "0.6" },
          "50%": { backgroundPosition: "100% 50%", opacity: "1" },
          "100%": { backgroundPosition: "0% 50%", opacity: "0.6" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-aurora": "linear-gradient(135deg, #0A0A0F, #1a0a3e, #0a1a3e, #0A0A0F)",
        "glass": "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-violet": "0 0 30px rgba(124, 58, 237, 0.4)",
        "glow-cyan": "0 0 30px rgba(0, 212, 255, 0.4)",
        "glow-sm": "0 0 10px rgba(124, 58, 237, 0.2)",
        "card": "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
