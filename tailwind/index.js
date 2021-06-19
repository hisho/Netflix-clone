/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});
const { variables } = require('../src/configs/variables');
const _ = require('lodash');
/* eslint-disable @typescript-eslint/no-var-requires */

const customizeObject = (object, callback) => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => callback(key, value))
  );
};

const rangeObject = (start, end, step) => {
  return _.range(start, end, step).reduce((obj, item) => {
    obj[item] = item;
    return obj;
  }, {});
};

const createSafeList = (...names) => {
  return names.flatMap((name) => {
    return [
      name,
      ...Object.keys(variables.breakpoints).map((n) => `${n}:${name}`),
    ];
  });
};

module.exports = {
  customizeObject,
  rangeObject,
  createSafeList,
  variables,
};
