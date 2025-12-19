/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/**/layouts/**/*.html",
    "./static/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Custom brand colors from your design
        'brand-primary': '#022F51',
        'brand-dark': '#000000',
        'brand-green': '#17C96B'
      },
      fontFamily: {
        'din-bold': ['DIN-bold', 'sans-serif'],
        'din-medium': ['DIN-medium', 'sans-serif']
      },
      screens: {
        'xs': '576px',
        'sm': '768px', 
        'md': '992px',
        'lg': '1200px',
        'xl': '1400px',
        'xxl': '1600px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}