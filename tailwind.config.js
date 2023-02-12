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
        "brand-white": "#ffffff",
        "brand-blue": "#4285F4",
        "brand-gray": "#7F8084",
        "brand-button-gray": "#FFFFFF33",
      },
      backgroundImage: {
        "brand-main": "url('src/assets/Rectangle 17.png')",
      },
    },
  },
  plugins: [],
};
