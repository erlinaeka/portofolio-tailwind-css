/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      fontFamily: {
        'nunito' : ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary' : '#4338ca',
        'secondary': '#feca06',
        'dark': '#0f172a',
      },
      brightness: {
        '65' : '.65'
      }
    },
  },
  plugins: [],
}
