/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/*.tsx",
    "./src/screens/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          200: '#c4c4cc',
          900: '#121214'
        },
        'green': {
          500: '#015f43'
        }
      }
    },
  },
  plugins: [],
}
