/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'malta-green': '#0e5c36',
        'malta-gold': '#d4af37',
      }
    },
  },
  plugins: [],
}
