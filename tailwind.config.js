/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'transparent-carbon-black': {
          35: 'rgb(0 0 0 / 35%)',
          55: 'rgb(0 0 0 / 55%)',
          65: 'rgb(0 0 0 / 65%)',
          70: 'rgb(0 0 0 / 70%)',
        },
        'carbon-gray': {
          60: 'rgb(86 91 89 / 60%)',
        },
        'transparent-blue': {
          30: 'rgb(0 47 77 / 30%)',
        },
        'transparent-pinkish-white': {
          70: 'rgb(255 241 250 / 70%)',
        },
      },
      animation: {
        'text-animation': 'text-animation 2.4s ease-in-out alternate infinite',
      },
      backgroundImage: {
        about: "url('../public/assets/images/about.jpg')",
        me: "url('../public/assets/images/me.jpg')",
        portfolio: "url('../public/assets/images/portfolio.jpg')",
        services: "url('../public/assets/images/services.jpg')",
        contact: "url('../public/assets/images/contact.jpg')",
      },
      fontFamily: {
        'amsterdam-four': ['Amsterdam Four'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
        'helvetica-now': ['Helvetica Now', 'sans-serif'],
        'proxima-nova': ['Proxima Nova', 'sans-serif'],
      },
      keyframes: {
        'text-animation': {
          '0%': {
            color: 'rgb(255 241 250 / 70%)',
            textShadow: 'none',
          },
          '100%': {
            color: 'white',
            textShadow: '0 0 10px palevioletred, 0 0 20px palevioletred;',
          },
        },
      },
    },
  },
  plugins: [],
};
