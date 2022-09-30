/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      spacemono: ["Space Mono", "monospace"],
      firamono: ["Fira Mono", "monospace"],
    },
    extend: {
      boxShadow: {
        neu1: "-5px -5px 15px 2px rgb(0 0 0 / 0.1)",
        neu2: "-5px -5px 10px 2px rgb(0.9 0.9 0.9 / 0.1)",
        darkneu1: "-5px -5px 10px 2px rgb(0.9 0.9 0.9 / 1)",
        darkneu2: "-5px -5px 15px 2px rgb(0 0 0 / 0.8)",
        innerneu1: "inset -5px -5px 10px 2px rgb(0.9 0.9 0.9 / 1)",
        innerneu2: "inset -5px -5px 15px 2px rgb(0 0 0 / 0.9)",
        iconneu: "-5px -5px 10px 2px rgb(0.9 0.9 0.9 / 0.15)",
        darkiconneu: "-5px -5px 10px 2px rgb(0 0 0 / 0.45)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
