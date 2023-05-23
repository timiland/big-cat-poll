/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      padding: {
        DEFAULT: '20px',
        sm: '20px',
        md: '60px',
        lg: '100px',
        xl: '0px',
        '2xl': '0px',
      },
    },
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)', ...fontFamily.sans],
      },
      colors: {
        black: {
          DEFAULT: '#06191D',
        },
        red: {
          fire: '#FFF',
        },
        gnoppu: {
          DEFAULT: '#FFF',
        },
      },
    },
    plugins: [],
  },
};
