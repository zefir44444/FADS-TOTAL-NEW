/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tektur: ["var(--font-tektur)"],
      },
      inset: {
        '1/6': '16.666667%',
        '5/6': '83.333333%',
      },
      animation: {
        'slide-right': 'slideRight 15s linear infinite',
        'slide-left': 'slideLeft 15s linear infinite',
        'slide-up': 'slideUp 15s linear infinite',
        'slide-down': 'slideDown 15s linear infinite',
        'slide-right-fast': 'slideRight 10s linear infinite',
        'slide-left-fast': 'slideLeft 10s linear infinite',
        'slide-up-fast': 'slideUp 10s linear infinite',
        'slide-down-fast': 'slideDown 10s linear infinite',
        'slide-right-slow': 'slideRight 20s linear infinite',
        'slide-left-slow': 'slideLeft 20s linear infinite',
        'slide-up-slow': 'slideUp 20s linear infinite',
        'slide-down-slow': 'slideDown 20s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}; 