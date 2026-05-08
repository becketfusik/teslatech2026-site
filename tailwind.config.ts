import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Conference brand: deep navy + copper/gold accent
        ink: {
          950: '#04060d',
          900: '#0a0e1a',
          800: '#101529',
          700: '#1a2240',
        },
        gold: {
          400: '#d4a943',
          500: '#bf8f2e',
          600: '#9a7223',
        },
        ember: {
          500: '#e85d2b',
          600: '#c04619',
        },
        arc: {
          400: '#7ab8ff',
          500: '#3a8fff',
        },
      },
      fontFamily: {
        // Period-correct serif headlines paired with modern grotesque body
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'arc-gradient': 'radial-gradient(ellipse at top, rgba(58,143,255,0.15), transparent 60%), radial-gradient(ellipse at bottom right, rgba(232,93,43,0.10), transparent 50%)',
        'gold-line': 'linear-gradient(90deg, transparent, #bf8f2e, transparent)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 2.5s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.85' },
          '50%': { opacity: '0.6' },
          '55%': { opacity: '0.95' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
