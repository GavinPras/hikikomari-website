/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'bgSm': "url('../assets/img/bg-character-sp.jpg')",
        'bgXl': "url('../assets/img/bg-character.jpg')",
      },
    },
  },
  plugins: [],
};
