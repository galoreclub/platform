import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      border: '#8D9196',
      subdued: '#6E7175',
      'btn-hover': '#4A4A4A',
      focused: '#6E7175',
      success: '#377D61',
      'success-border': '#9FC8B6',
      'success-surface': '#F2F8F5',
      warning: '#B28B2D',
      'warning-border': '#6E7175',
      'warning-surface': '#FDF5EB',
      error: '#C63D22',
      'error-border': '#EA6252',
      'error-surface': '#F7D4D3',
    },
    fontFamily: {
      helvetica: 'Helvetica, sans-serif',
      'helvetica-bold': 'Helvetica-Bold, sans-serif',
      seasons: 'TheSeasons, serif',
      tenor: 'Tenor Sans, sans-serif',
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 4px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      keyframes: {
        scrollUp: {
          '0%, 14%': { transform: 'translateY(0)' },
          '15%, 29%': { transform: 'translateY(-70px)' },
          '30%, 44%': { transform: 'translateY(-140px)' },
          '45%, 59%': { transform: 'translateY(-210px)' },
          '60%, 74%': { transform: 'translateY(-280px)' },
          '75%, 89%': { transform: 'translateY(-350px)' },
          '90%, 100%': { transform: 'translateY(-420px)' },
        },
        wordScroll: {
          '0%, 25%': { transform: 'translateY(0)' },
          '26%, 50%': { transform: 'translateY(-25%)' },
          '51%, 75%': { transform: 'translateY(-50%)' },
          '76%, 100%': { transform: 'translateY(-75%)' },
        },
      },
      animation: {
        scrollUp: 'scrollUp 7s ease-in-out infinite',
        'spin-slow': 'spin 16s linear infinite',
        wordScroll: 'wordScroll 6s linear infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
