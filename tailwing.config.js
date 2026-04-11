/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8FAFC",
        secondary: "#FFFFFF",
        surface: "#F1F5F9",
        border: "#E2E8F0",
        accent: "#1D4ED8",
        accentSoft: "#3B82F6",
        textPrimary: "#0F172A",
        textSecondary: "#475569",
      },

      animation: {
  marquee: "marquee 20s linear infinite",
},
keyframes: {
  marquee: {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" },
  },
},
    },
  },
  plugins: [],
};