module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['bg-gray-300', 'bg-green-600', 'bg-yellow-300', 'bg-yellow-500', 'bg-red-600'],
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '370px',
      sm: '480px',
      md: '640px',
      lg: '768px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: [
        'Outfit',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    extend: {
      fontSize: {
        '2xs': '.6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
