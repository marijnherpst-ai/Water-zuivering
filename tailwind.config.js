/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        bg: '#F7F8FA',
        surface: '#FFFFFF',
        edge: '#E4E7EC',
        ink: '#0B0D10',
        dim: '#5B6472',
        amber: '#EDA71B',
        'amber-dark': '#C6890F',
      },
    },
  },
  plugins: [],
};
