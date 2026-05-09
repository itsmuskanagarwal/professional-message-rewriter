import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0f0e0d', 2: '#3a3832', 3: '#7a7670' },
        paper: { DEFAULT: '#faf9f7', 2: '#f0ede8', 3: '#e4e0d8' },
        accent: { DEFAULT: '#c84b1e', blue: '#1e6bc8', green: '#1e8c5a', warm: '#d4870a' },
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
