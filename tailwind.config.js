/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0071dc",
        lightBlue: "#e6f1fc",
        yellow: "#ffc220",
        hoverBg: "#004f9a",
        lightText: "#46474a",
      },
      boxShadow: {
        bannerShadow: "0 1px 2px 1px #00000026",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
};
