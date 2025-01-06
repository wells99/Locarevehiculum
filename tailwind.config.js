/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pretoProjeto: '#24292f',
        amareloProjeto: '#ebc556',
        brancoProjeto: '#f7f9f8',
  
      },
    },
   
  },
  plugins: [],
}