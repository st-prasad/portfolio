/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // font and fallback font
        garamond: ['Cormorant Garamond', 'serif'] ,
        georgia : ['"Georgia"', 'serif'],
        palatino : ['"Palatino"', 'serif'],
      },
    },
  },
  plugins: [],
}
