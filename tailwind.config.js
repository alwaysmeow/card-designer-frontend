/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './public/index.html'
  ],
  theme: {
    fill: {
      current: 'currentColor',
    },
    colors: {
      pink: "#ff0078",
      grey: "#f3f4f4",
      white: "#ffffff",
      dark: "#323e48",
    },
    aspectRatio: {
      card: '85.6 / 54',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

