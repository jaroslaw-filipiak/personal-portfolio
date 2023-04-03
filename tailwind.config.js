module.exports = {
  // mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      colors: {
        'dark-1': '#202020',
        'dark-2': '#242424',
        yellow: '#ffd40b',
      },
      screens: {
        '3xl': '1900px',
      },
      fontFamily: {
        Atkinson: ['"Atkinson Hyperlegible"', 'sans-serif'],
        OpenSans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
