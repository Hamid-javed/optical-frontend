/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this line based on your file extensions
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
