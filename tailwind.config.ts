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
        "neon-blue": "#00D4FF",
        "neon-green": "#00FF88",
        "neon-purple": "#9D4EDD",
        "dark-bg": "#050816",
        "dark-card": "#0A0F1E",
        "dark-border": "#1a2035",
        "text-muted": "#8892B0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse at 20% 50%, rgba(0,212,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(157,78,221,0.15) 0%, transparent 50%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(157,78,221,0.08) 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #00D4FF 0%, #9D4EDD 50%, #00FF88 100%)",
        "blue-purple": "linear-gradient(135deg, #00D4FF 0%, #9D4EDD 100%)",
        "purple-green": "linear-gradient(135deg, #9D4EDD 0%, #00FF88 100%)",
      },
      boxShadow: {
        "neon-blue": "0 0 20px rgba(0,212,255,0.4), 0 0 40px rgba(0,212,255,0.1)",
        "neon-green": "0 0 20px rgba(0,255,136,0.4), 0 0 40px rgba(0,255,136,0.1)",
        "neon-purple": "0 0 20px rgba(157,78,221,0.4), 0 0 40px rgba(157,78,221,0.1)",
        "card-glow": "0 4px 32px rgba(0,212,255,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "shimmer": "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.3)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
