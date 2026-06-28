/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D1117',
        card: '#161B22',
        accent: '#00FF88',
        secondaryAccent: '#58A6FF',
        textMain: '#F0F6FC',
        textMuted: '#8B949E',
        borderCmp: '#30363D',
      },
      borderRadius: {
        'xl': '16px',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
