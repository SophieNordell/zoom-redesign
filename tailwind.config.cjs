/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        "zoom-blue": "#0b5cff",
      },
      screens: {
        /* sm: "640px",
        md: "768px",
        lg: "1024px", */
      },
    },
  },
  plugins: [],
};
