/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        borderSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scan: {
          "0%": { transform: "translateY(120%)", opacity: "0" },
          "20%": { opacity: "0.15" },
          "50%": { opacity: "0.25" },
          "80%": { opacity: "0.15" },
          "100%": { transform: "translateY(-120%)", opacity: "0" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        borderSpin: "borderSpin 8s linear infinite",
        scan: "scan 6s ease-in-out infinite",
        pulseSlow: "pulseSlow 3.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
