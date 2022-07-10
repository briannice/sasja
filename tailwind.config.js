const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
    './src/icons/**/*.tsx',
  ],
  theme: {
    colors: {
      transparent: colors.transparent,

      white: colors.white,
      light: colors.neutral[100],
      medium: colors.neutral[300],
      dark: colors.neutral[700],
      black: colors.neutral[900],

      primary: {
        DEFAULT: '#EB2C2C',
        dark: '#CC1313',
      },

      secondary: {
        DEFAULT: '#11A149',
        dark: '#0C7334',
      },

      tertiary: {
        DEFAULT: '#B6A255',
        dark: '#978541',
      },

      info: {
        DEFAULT: '#467FD0',
        dark: '#3F73BB',
      },

      success: {
        DEFAULT: '#42BA96',
        dark: '#3BA787',
      },

      error: {
        DEFAULT: '#DF4759',
        dark: '#C94050',
      },

      warning: {
        DEFAULT: '#FFC107',
        dark: '#E6AE06',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        tablet: '2rem',
        laptop: '4rem',
        desktop: '5rem',
      },
      screens: {
        laptop: '1024px',
        desktop: '1280px',
      },
    },
    fontFamily: {
      exo: "'Exo 2', sans-serif",
      roboto: "'Roboto', sans-serif",
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {},
  },
  plugins: [],
}
