// prettier.config.js
const prettierTailwindcss = require('prettier-plugin-tailwindcss');

module.exports = {
  plugins: [prettierTailwindcss],
  tailwindConfig: './tailwind.config.js',
};
