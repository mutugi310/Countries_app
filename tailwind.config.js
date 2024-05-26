/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)', 
        deepDarkBlueBG: 'hsl(207, 26%, 17%)',
        deepDarkBlueTX: '#hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        lightGray: 'hsl(0, 0%, 98%)',
        white:'hsl(0, 0%, 100%)',
        green:'rgb(34 197 94)'
      },
    },
  },
  plugins: [],
}

