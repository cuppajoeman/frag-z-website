/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'windows' : ['Windows-Regular','sans-serif'],
        'arash' : ['Arashnaz','sans-serif'],
        'broshk': ['Broshk','sans-serif'],
      },
      backgroundImage: {
        'wall' : "url('/textures/wall.jpg')"
      }
    },
  },
  plugins: [],
}