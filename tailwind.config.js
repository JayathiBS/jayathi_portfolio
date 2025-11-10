/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom color palette to match the dark theme
      colors: {
        'dark-bg': '#121212', // Deep Charcoal
        'light-text': '#E0E0E0', // Off-White Text
        'primary-accent': '#00C4A7', // Teal/Bright Accent
        'secondary-text': '#A0A0A0',
      },
    },
  },
  plugins: [],
}