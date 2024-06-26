/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    colors: {
      pink: "#ff0078",
      grey: "#f3f4f4",
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

