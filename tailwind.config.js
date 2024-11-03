/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#36454F',
        teal: '#008080',
        peach: '#FFDAB9',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

