/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C10206",
        secondary: "#263238",
        red: "#8B0000",
        lightHover: "#EA002E",
        darkHover: "#34495e",
        darkOrange: "#FF9500",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
