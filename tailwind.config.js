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
        ocean: '#183A4A',      // Deep Ocean Blue
        aqua: '#4FC3F7',       // Aqua/Teal
        lavender: '#E1BEE7',   // Lavender Sparkle
        sand: '#FDF6F0',       // Light Sand
        coral: '#FF8A65',      // Coral Accent
      },
    },
  },
  plugins: [],
} 