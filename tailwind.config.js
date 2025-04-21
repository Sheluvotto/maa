/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.2)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.2)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};