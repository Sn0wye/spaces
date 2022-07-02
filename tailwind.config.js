module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          600: '#5C4BC5',
          500: '#8257e6',
          400: '#5E60CE',
          300: '#996DFF',
        },
        black: '#0D0D0D',
        danger: '#e25858',
        surface: {
          dark: '#1A1A1A',
          light: '#FFF',
        },
        text: {
          dark: '#f4f4f5',
          light: '#27272a',
        },
        gray: {
          700: '#0D0D0D',
          600: '#1A1A1A',
          500: '#262626',
          400: '#333333',
          300: '#808080',
          200: '#d9d9d9',
          100: '#f2f2f2',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
