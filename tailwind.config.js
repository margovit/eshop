/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary:"#fdc62e",
        secondary:"#0c090a",
        brandBlue:"#1376f4",
        brandWhite:"eeeeee",
        brandYellow:"fdc62e"
      },
      container:{
        center: true,
        padding: {
          default:"1rem",
          sm:"3rem",
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

