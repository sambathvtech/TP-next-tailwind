const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { ...colors },
      height: {
        'px-800': '800px',
        'px-500': '500px',
        'px-5': '5px',
      },
      width: {
        'px-800': '800px',
        'px-500': '500px',
        'px-5': '5px',
      },
      inset: {
        'px-1': '1px',
      },
      borderWidth: {
        'px-1': '1px',
      },
    },
  },
  plugins: [],
};
