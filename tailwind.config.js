/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        lightning: "lightning 1s ease-out infinite",
      },
      keyframes: {
        lightning: {
          "0%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
};
