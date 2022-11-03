const lineClamp = require('@tailwindcss/line-clamp');
const daisyui = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [lineClamp, daisyui],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'light',
  },
};
