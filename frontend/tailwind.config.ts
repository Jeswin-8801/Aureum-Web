/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",

  content: [
    "./app/**/*.{ts,tsx,css}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  plugins: {
    tailwindcssAnimate: {},
  },
};
