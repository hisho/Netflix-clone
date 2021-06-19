/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin'); //Tailwindの自作classを生成するプラグイン
const myTheme = require('./myTheme');
const myThemeExtend = require('./myThemeExtend');
const myComponents = require('./myComponents');
const myUtilities = require('./myUtilities');
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  important: true,
  corePlugins: {
    container: false,
  },
  theme: {
    ...myTheme,
    extend: {
      ...myThemeExtend,
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(myUtilities, ['responsive']);
    }),
    plugin(({ addComponents }) => {
      addComponents(myComponents);
    }),
  ],
};
