/* eslint-disable @typescript-eslint/no-var-requires */
const { customizeObject, rangeObject, variables } = require('./index');
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  zIndex: {
    '-50': -5000,
    '-40': -4000,
    '-30': -3000,
    '-20': -2000,
    '-10': -1000,
    0: 0,
    10: 1000,
    20: 2000,
    30: 3000,
    40: 4000,
    50: 5000,
    auto: 'auto',
  },
  screens: customizeObject(variables.breakpoints, (key, value) => [
    key,
    `${value / 16}em`,
  ]),
  fontSize: customizeObject(rangeObject(10, 121, 1), (key, value) => [
    key,
    `${+value / 16}rem`,
  ]),
  lineHeight: customizeObject(rangeObject(100, 201, 5), (key, value) => [
    key / 100,
    value / 100,
  ]),
};
