/* eslint-disable @typescript-eslint/no-var-requires */
const base = require('./tailwind/base');
const { createSafeList } = require('./tailwind');
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  ...base,
  ...{
    purge: {
      content: ['./src/**/*.tsx', './src/**/*.ts'],
      options: {
        safelist: createSafeList('block', 'hidden'),
        keyframes: true,
      },
    },
    // mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    variants: {
      extend: {
        fill: [
          'responsive',
          'group-hover',
          'group-focus',
          'focus-within',
          'hover',
          'focus',
        ],
        stroke: [
          'responsive',
          'group-hover',
          'group-focus',
          'focus-within',
          'hover',
          'focus',
        ],
      },
    },
  },
};
