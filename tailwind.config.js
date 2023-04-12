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
        sm: '376px',
        md: '768px',
        lg: '500px',
        xl: '700px',
        '2xl': '700px',
      },
      // padding: {
      //   DEFAULT: '20px',
      //   sm: '20px',
      //   md: '60px',
      //   lg: '100px',
      //   xl: '100px',
      //   '2xl': '140px',
      // },
    },
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)', ...fontFamily.sans],
      },
      colors: {
        black: {
          DEFAULT: '#06191D',
        },
      },
    },
    plugins: [],
  },
};
