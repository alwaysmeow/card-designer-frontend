/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './public/index.html'
  ],
  safelist: [
    'bg-pink',
    'bg-white',
    'bg-dark',
    'text-pink',
    'text-white',
    'text-dark',
    'rounded-br-xl',
    'rounded-bl-xl',
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