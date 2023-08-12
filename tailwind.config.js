/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#4f7dff",
        "color-primary-hovered": "#3c5dba",
        "color-secondary": "#e1d465"
      }
    },
    container: {
      center: true,
      padding: "16px"
    },
  },
  plugins: [],
}

