/* eslint-disable @typescript-eslint/no-var-requires */
const { customizeObject, rangeObject, variables } = require('./index');
const { colors } = require('tailwindcss/defaultTheme');
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  gridTemplateColumns: {
    auto: 'auto 1fr',
  },
  fontFamily: variables.fontFamily,
  spacing: customizeObject(rangeObject(0, 211), (key, value) => [
    key / 2,
    `${(value * 2) / 16}rem`,
  ]),
  maxWidth: {
    ...customizeObject(rangeObject(0, 1201, 4), (key, value) => [
      key,
      `${+value / 16}rem`,
    ]),
    ...customizeObject(variables.breakpoints, (key, value) => [
      `screen-${key}`,
      `${value}px`,
    ]),
  },
  transitionDuration: {
    DEFAULT: '300ms',
  },
  transitionTimingFunction: {
    DEFAULT: 'cubic-bezier(0, 0, 0.2, 1)',
  },
  colors: {
    ...colors,
    ...variables.colors,
  },
  borderColor: {
    ...colors,
    ...variables.colors,
  },
  fill: {
    ...colors,
    ...variables.colors,
  },
};
