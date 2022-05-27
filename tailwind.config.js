
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        sans: ['Poppins', 'sans-serif'],
      },
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
          dark: '#171717',
        },
        secondary: {
          DEFAULT: '#153044',
          dark: '#123044',
          darkest: '#001726',
        },
        success: {
          DEFAULT: '#C8E3D3',
          dark: '#0E622F',
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
