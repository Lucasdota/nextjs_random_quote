/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        //custom media query for extra small devices
        'xs': { 'min': '0px', 'max': '281px'},
      },
      keyframes: {
        click: {
          '0%': {transform: 'scale(1)'},
          '25%': {transform: 'scale(1.1)'},
          '50%': {transform: 'scale(1.2)'},
          '75%': {transform: 'scale(1.1)'},
          '100%': {transform: 'scale(1)'}
        },
      },
      animation: {
        click: 'click 0.3s ease-out running'
      }
    },
  },
  plugins: [],
}