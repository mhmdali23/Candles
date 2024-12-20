/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Include all your Angular templates and components
  ],
  theme: {
    extend: {
      fontFamily: {
        irish: ['Irish Grover', 'cursive'],
      },
  },
  plugins: [],
}
}
