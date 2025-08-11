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
        // Core brand colors
        navy: '#1a2332',           // Deeper, more readable navy
        navy_light: '#0f172a',     // Almost black for headers
        primary: '#4a90e2',        // Better contrast blue
        primary_light: '#1d4ed8',  // Bright blue
        
        // Soft pastels (improved harmony)
        softblue: '#a8d0f0',       // Rich royal blue
        softblue_light: '#2563eb',
        lavenderblue: '#b8c5e8',   // Deep indigo
        lavenderblue_light: '#4338ca',
        dustylilac: '#d4c2e0',     // Rich purple
        dustylilac_light: '#7c3aed',
        mutedpink: '#e8c8d4',      // Deep rose
        mutedpink_light: '#be185d',
        palepurple: '#d6c8e0',     // Rich plum
        palepurple_light: '#7c2d92',
        softcream: '#f5f2e8',      // Warm brown
        softcream_light: '#92400e',
        
        // Cool tones (better progression)
        graylavender: '#b8b5c8',   // Slate gray
        graylavender_light: '#475569',
        bluelavender: '#9bb0d4',   // Dark slate
        bluelavender_light: '#334155',
        aquablue: '#8db4c8',       // Deep teal
        aquablue_light: '#0f766e',
        freshaqua: '#7db4c7',      // Rich teal
        freshaqua_light: '#0d9488',
        
        // Vibrant accents (more purposeful)
        tealblue: '#2d7a8a',       // Deep ocean
        tealblue_light: '#0f4c5c',
        deepteal: '#1e5a6b',       // Darker teal
        deepteal_light: '#164e63',
        
        // Functional colors
        success: '#059669',        // Forest green
        success_light: '#047857',
        warning: '#d97706',        // Amber
        warning_light: '#b45309',
        error: '#dc2626',          // Deep red
        error_light: '#991b1b',
        
        // Interactive states
        focus: '#3b82f6',          // Bright blue
        focus_light: '#1d4ed8',
        
        // Gradients
        gradientStart: '#d8b5ff',  // Deep indigo
        gradientStart_light: '#4338ca',
        gradientEnd: '#1eae98',    // Deep cyan
        gradientEnd_light: '#0891b2',
        
        // Specialty colors (more cohesive)
        cotton_candy: '#f3e8ff',   // Rich purple
        cotton_candy_light: '#7c3aed',
        candy_floss: '#fdf2f8',    // Deep pink
        candy_floss_light: '#be185d',
        mint: '#d1fae5',           // Forest green
        mint_light: '#059669',
        sandy: '#fef3c7',          // Warm brown
        sandy_light: '#92400e',
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23007BFF'%3E%3C/path%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
