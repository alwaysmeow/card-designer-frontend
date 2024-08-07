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
    'bg-default',
    'text-pink',
    'text-white',
    'text-dark',
    'rounded-br-xl',
    'rounded-bl-xl',
    '-translate-y-6',
    '-translate-y-12',
    '-translate-y-18',
    '-translate-y-24',
    '-translate-y-30',
    'h-18',
    'translate-x-6',
    'z-10',
    'z-20',
    'z-30'
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
      default: "#10754e"
    },
    aspectRatio: {
      card: '85.6 / 54',
    },
    extend: {
      translate: {
        '18': '4.5rem',
      },
      height: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}