/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0099E5",
          light: "#33ADEB",
          dark: "#007BBF",
        },
        secondary: {
          DEFAULT: "#0077B6",
          light: "#3391C3",
          dark: "#005E8F",
        },
        accent: {
          DEFAULT: "#16A34A",
          light: "#22C55E",
          dark: "#15803D",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};