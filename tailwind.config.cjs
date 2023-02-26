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
        georgia: ['"Georgia"', 'serif'],
        helvetica: ['"Helvetica Neue"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        // garamond: ['Cormorant Garamond', 'serif'],
        // palatino: ['"Palatino"', 'serif'],
      },
      transitionProperty: {
        'width': 'width'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.3)' },
        },
        // wave: {
        //   '0%': { transform: 'rotate(0.0deg)' },
        //   '10%': { transform: 'rotate(14deg)' },
        //   '20%': { transform: 'rotate(-8deg)' },
        //   '30%': { transform: 'rotate(14deg)' },
        //   '40%': { transform: 'rotate(-4deg)' },
        //   '50%': { transform: 'rotate(10.0deg)' },
        //   '60%': { transform: 'rotate(0.0deg)' },
        //   '100%': { transform: 'rotate(0.0deg)' },
        // },
      },
      // animation: {
      //   'waving-hand': 'wave 2s linear infinite',
      // },
    },
  },
  plugins: [],
}
