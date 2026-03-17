/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A96E',
          deep: '#8B6914',
          light: '#E8D5A3',
          pale: '#F5EDD8',
        },
        luxury: {
          bg: '#0C0C0E',
          surface: '#141416',
          card: '#1A1A1C',
          fg: '#F5F0E8',
          muted: 'rgba(245, 240, 232, 0.5)',
          dim: 'rgba(245, 240, 232, 0.2)',
          border: 'rgba(201, 169, 110, 0.15)',
          borderBright: 'rgba(201, 169, 110, 0.35)',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.4em',
        widest3: '0.6em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #E8D5A3 40%, #C9A96E 60%, #8B6914 100%)',
        'gold-radial': 'radial-gradient(ellipse at center, rgba(201,169,110,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};
