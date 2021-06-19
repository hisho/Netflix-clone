/* eslint-disable @typescript-eslint/no-var-requires */
const { customizeObject, variables } = require('./index');
/* eslint-disable @typescript-eslint/no-var-requires */

const colorList = Object.fromEntries(
  Object.entries(variables.colors).flatMap(([key, value]) => {
    return Object.entries(value).map(([deepKey, deepValue]) => {
      return [`--color-${key}-${deepKey}`, deepValue];
    });
  })
);

const wrapperWidth = variables.breakpoints.md / 16;
// const containerWidth = 960 / 16;
const desktopWrapperPadding = 40 / 16;
const mobileWrapperPadding = 28 / 16;

module.exports = {
  '.wrapper': {
    maxWidth: `${wrapperWidth + desktopWrapperPadding * 2}rem`,
    paddingLeft: `${mobileWrapperPadding}rem`,
    paddingRight: `${mobileWrapperPadding}rem`,
    width: `100%`,
    marginLeft: `auto`,
    marginRight: `auto`,
    '@screen sm': {
      paddingLeft: `${desktopWrapperPadding}rem`,
      paddingRight: `${desktopWrapperPadding}rem`,
    },
  },
  '.wrapper-pr': {
    paddingRight: `${mobileWrapperPadding}rem`,
    '@screen sm': {
      paddingRight: `${desktopWrapperPadding}rem`,
    },
  },
  '.wrapper-pl': {
    paddingLeft: `${mobileWrapperPadding}rem`,
    '@screen sm': {
      paddingLeft: `${desktopWrapperPadding}rem`,
    },
  },
  '.wrapper-px': {
    paddingLeft: `${mobileWrapperPadding}rem`,
    paddingRight: `${mobileWrapperPadding}rem`,
    '@screen sm': {
      paddingLeft: `${desktopWrapperPadding}rem`,
      paddingRight: `${desktopWrapperPadding}rem`,
    },
  },
  // '.container': {
  //   maxWidth: `${containerWidth}rem`,
  //   width: `100%`,
  //   marginLeft: `auto`,
  //   marginRight: `auto`,
  // },
  ':root': {
    '--header-height': `${60 / 16}rem`,
    ...customizeObject(variables.breakpoints, (key, value) => [
      `--breakpoint-${key}`,
      String(value),
    ]),
    ...colorList,
  },
};
