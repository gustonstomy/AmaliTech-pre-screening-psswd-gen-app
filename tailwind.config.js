/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        JetBrains: "JetBrains Mono Bold"
      },
      colors:{
        "GreenColor": "#A4FFAF",      
        "red-color":" rgb(246, 74, 74)",
        "orange-color":" rgb(251, 124, 88)",
        "yellow-color":" rgb(248, 205, 101)",
        "green-color":" rgb(164, 255, 175)",
        "white-color":" rgb(230, 229, 234)",
        "Darkgrey-color":" rgb(128, 124, 146)",
        "black-color":" rgb(24, 23, 31)",
        "Greycolor": "rgb(36, 35, 44)"

      }
    },
  },
  plugins: [],
}