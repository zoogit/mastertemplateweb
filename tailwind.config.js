/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#3C3C44",
        paper: "#F1F2F3",
        blaze: "#F0682C",
        copper: "#C3673E",
        peach: "#F1A686",
        coal: "#1C1C1C"
      },
      fontFamily: {
        stack: ["Stack Sans Headline", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(28, 28, 28, 0.18)"
      }
    }
  },
  plugins: []
};
