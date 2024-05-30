/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver' : '#f5f7fa',
        'neutralDGrey' : '#4d4d4d',
        'brandPrimary' : '#4caf4f',
        'neutralGrey' : '#717171',
      }
    },
  },
  plugins: [],
}

