/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        green: {
          400: '#0F1E1B'
        },
        gray: {
          300: '#EFE4E4'
        },
        orange: {
          400: '#FF915D'
        },
        black: {
          400: '#0F1E1B'
        }
      },
      fontSize: {
        sm: ['14px', '17px'],
        base: ['20px', '24px'],
        lg: ['35px', '40px'],
        xl: ['64px', '100px'],
        xxl: ['82px', '115px']
      },
      fontFamily: {
        basic: ['basic-sans', 'sans-serif'],
        lust: ['lust-sans', 'sans-serif']
      },
      keyframes: {
        'btn-primary-hover': {
          '0%': {
            'clip-path': 'circle(0% at 50% 50%)',
            opacity: 0
          },
          '100%': {
            'clip-path': 'circle(80% at 50% 50%)',
            opacity: 1
          }
        }
      },
      animation: {
        'btn-primary-hover': 'btn-primary-hover 0.2s cubic-bezier(0, 0.61, 0.48, 0.99)'
      },
    },
  },
  plugins: [],
};
