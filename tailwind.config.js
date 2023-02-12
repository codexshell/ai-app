/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "brand-1": ["Lexend Mega", "sans-serif"],
        "brand-2": ["Montserrat", "sans-serif"],
      },
      colors: {
        "brand-black": "#050505",
        "brand-white": "#FFFFFF",
        "brand-blue": "#4285F4",
        "brand-gray": "#7F8084",
        "brand-gray-2": "#2A2A2A",
        "brand-green": "#02250C",
        "brand-button-gray": "#FFFFFF33",
      },
      backgroundImage: {
        "brand-main": "url('@/assets/images/background.png')",
      },
    },
  },
  plugins: [],
};
