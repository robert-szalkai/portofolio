/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#0F1E1B'
        }
      },
      fontSize: {
        sm: ['14px', '17px']
      }
    },
  },
  plugins: [],
};
