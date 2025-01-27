const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.emerald[500],
          DEFAULT: colors.emerald[600],
          dark: colors.emerald[700],
        },
        secondary: {
          light: colors.violet[500],
          DEFAULT: colors.violet[600],
          dark: colors.violet[700],
        },
        background: {
          light: colors.gray[50],
          DEFAULT: colors.gray[100],
          dark: colors.gray[900],
        },
        surface: {
          light: colors.white,
          DEFAULT: colors.gray[50],
          dark: colors.gray[800],
        },
        content: {
          primary: {
            light: colors.gray[800],
            DEFAULT: colors.gray[900],
            dark: colors.gray[100]
          },
          secondary: {
            light: colors.gray[600],
            DEFAULT: colors.gray[700],
            dark: colors.gray[300]
          },
          tertiary: {
            light: colors.gray[500],
            DEFAULT: colors.gray[600],
            dark: colors.gray[400]
          }
        }
      }
    }
  }
} 