
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        xxl: '450px',
      },
      colors: {
        primary: {
          light: '#00A1CB',
          DEFAULT: 'bg-gradient-to-r from-#005166 to-#00A1CB;',
          dark: '#005166',
        },
        neutral: {
          light: '#F6F7F8',
          DEFAULT: '#5c6ac4',
          dark: '#202e78',
        },
        secondary: {
          light: '#EEF2FF',
          DEFAULT: '#153044',
          dark: '#001D2F',
          darkest: '#001725',
        },
        success: {
          DEFAULT: '#E0F1E7',
          dark: '#0E6630',
        },
        warning: {
          DEFAULT: '#FFF89C',
          dark: '#B8850F',
        },
        danger: {
          DEFAULT: '#FFBDAC',
          dark: '#BC0000',
        },
        loading: {
          light: '#FFF',
          DEFAULT: '#F6F7F8',
          dark: '#153044',
        },
      },
      animation: {
        'spin-reverse': 'spin-reverse 2s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': {
            transform: 'rotate(-90deg), rotate(-89deg)',
          },
          '100%': { transform: 'rotate(-357deg)' },
        },
        screens: {
          xs: '475px',
        },
        zIndex: {
          '-10': '-10',
        },
    },
  },
},
variants: {
  extend: { backgroundColor: ['active'], textColor: ['active'] },
},
  plugins: [],
}
