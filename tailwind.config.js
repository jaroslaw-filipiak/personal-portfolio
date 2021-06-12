module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      colors: {
        'dark-1': '#202020',
        'dark-2': '#242424',
      },
      screens: {
        '3xl': '1900px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
