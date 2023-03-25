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
        'fade-in': {
          '0%': {
            opacity: '0',
            // transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            // transform: 'translateY(0)'
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0)',
            // scale: '0',
            // transform: 'translateY(-10px)'
          },
          '100%': {
            transform: 'scale(1)',
            // opacity: '1',
            // transform: 'translateY(0)'
          },
        },
        'border-radius-animation': {
          '0%': { 'border-radius': '1px' },
          '50%': { 'border-radius': '50px' },
          '100%': { 'border-radius': '1px' },
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
      animation: {
        'fade-in': 'fade-in 0.5s ease',
        'scale-in': 'scale-in 0.5s',
        'border-radius': 'border-radius-animation 6s infinite ease-in',
      }
    },
  },
  plugins: [],
}
