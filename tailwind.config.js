/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F7F3EB',
          50: '#FDFCFB',
          100: '#FBF9F4',
          200: '#F7F3EB',
          300: '#ECE3D3',
        },
        cream: {
          DEFAULT: '#FFFDF8',
          soft: '#FAF6ED',
        },
        champagne: {
          DEFAULT: '#E9DFCE',
          light: '#F4EFE6',
          dark: '#D5C5AC',
        },
        gold: {
          DEFAULT: '#B69A65',
          light: '#D4BE8D',
          dark: '#8C713F',
          antique: '#9B7E4B',
          bright: '#E5C578',
        },
        brown: {
          DEFAULT: '#29251F',
          deep: '#1C1916',
          warm: '#38322A',
        },
        muted: {
          DEFAULT: '#81786B',
          light: '#9E9485',
          dark: '#5E574D',
        }
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'book': '0 25px 60px -15px rgba(41, 37, 31, 0.45), 0 10px 25px -10px rgba(0, 0, 0, 0.3)',
        'book-deep': '0 30px 80px -15px rgba(28, 25, 22, 0.6), 0 0 40px rgba(182, 154, 101, 0.15)',
        'gold-glow': '0 0 25px rgba(182, 154, 101, 0.35)',
        'paper': 'inset 0 0 30px rgba(129, 120, 107, 0.08), 0 4px 15px rgba(41, 37, 31, 0.05)',
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #B69A65 0%, #F5E8C7 45%, #C2A269 70%, #8C713F 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #8C713F 0%, #D4BE8D 25%, #FFF2D1 50%, #D4BE8D 75%, #8C713F 100%)',
        'luxury-vignette': 'radial-gradient(circle at center, transparent 40%, rgba(28, 25, 22, 0.65) 100%)',
      }
    },
  },
  plugins: [],
}

