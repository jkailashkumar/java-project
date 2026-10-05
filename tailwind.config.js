/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        eco: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        dark: {
          bg: '#0a100d',
          card: '#121b16',
          border: '#1e2e26',
          hover: '#192720',
          muted: '#8a9e95',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(16, 185, 129, 0.15)',
        'glow': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
        'glow-lg': '0 0 35px -5px rgba(16, 185, 129, 0.35)',
      },
    },
  },
  plugins: [],
}
