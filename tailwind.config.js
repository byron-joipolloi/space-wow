/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Playfair Display', 'serif'],
    },
    extend: {
      fontSize: {
        '2xl': ['1.375rem', {
          lineHeight: '2rem'
        }],
        '3xl': ['1.5rem', {
          lineHeight: '2.125rem'
        }],
        '6xl': ['3.5rem', {
          lineHeight: '1'
        }],
      },
      borderWidth: {
        '5': '5px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
