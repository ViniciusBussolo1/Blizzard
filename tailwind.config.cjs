/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],

  theme: {
    extend: {
      backgroundImage: {
        footer: "url('./src/assets/footer-background.png')",
        "footer-app": "url('./src/assets/ilustrations/app.png')",
        "footer-app-mini": "url('./src/assets/ilustrations/app-mini.png')",
      },
      colors: {
        blue: "#00AEFF",
        gray: "#9D9D9D",
        "gray-700": "#8F9199",
        "white-600": "#E5E5E5",
        "black-300": "#15171B",
        "neutral-700": "#363842",
      },
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      screens: {
        xs: "0px",
        he: "955px",
      },
    },
  },
  plugins: [],
};
