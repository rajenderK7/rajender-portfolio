/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      spacemono: ["Space Mono", "monospace"],
      firamono: ["Fira Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
