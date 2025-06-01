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
        navy: '#081a53',         // Navy text color
        softblue: '#AED2E0',      // 1️⃣
        lavenderblue: '#BAC9DD',  // 2️⃣
        dustylilac: '#C1CAD5',    // 3️⃣
        mutedpink: '#D8B4DD',     // 4️⃣
        palepurple: '#CCC0D6',    // 5️⃣
        softcream: '#F9F2DC',     // 6️⃣
        graylavender: '#B9C0C5',  // 7️⃣
        bluelavender: '#8697C2',  // 8️⃣
        aquablue: '#9CC0D8',      // 9️⃣
        freshaqua: '#89D2C7',     // 🔟
        tealblue: '#56A5BA',      // 1️⃣1️⃣
        deepteal: '#3B92A3',      // 1️⃣2️⃣
        coral: '#FF8A65',         // Coral accent color
        sand: '#F5E6D3',          // Sand accent color
        ocean: '#007BFF',         // Ocean accent color
      },
    },
  },
  plugins: [],
} 