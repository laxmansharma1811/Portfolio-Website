/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FBF9F5',
          100: '#F6F4EF',
          200: '#EBE7DF',
          300: '#E2DDD5',
          400: '#C8C2B7',
        },
        obsidian: {
          950: '#0B0D10',
          900: '#121619',
          800: '#1A2026',
          700: '#2A323D',
          600: '#424D5C',
          500: '#5A626A',
        },
        rust: {
          500: '#C85A32',
          600: '#B04B26',
          700: '#943B1A',
        },
        blueprint: {
          500: '#1E40AF',
          600: '#1E3A8A',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
