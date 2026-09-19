/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F1F2F3",
        coal: "#1C1C1C",
        blaze: "#F0682C"
      },
      fontFamily: {
        stack: ["Stack Sans Headline", "Inter", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
