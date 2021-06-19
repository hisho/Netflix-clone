export const variables = {
  breakpoints: {
    xs: 600,
    sm: 769,
    md: 1000,
    lg: 1200,
    xl: 1366,
  },
  colors: {
    primary: {
      black: '#3B4043',
      red: '#f00',
      brown: '#5F5538',
      gray: '#E3E1DA',
      white: '#F0F3F5',
    },
    secondary: {
      black: '#333',
      gray: '#EFEDE9',
    },
  },
  fontFamily: {
    notosans: ['Noto Sans JP', 'sans-serif'],
    notoserif: ['Noto Serif JP', 'serif'],
  },
} as const;

export type variablesType = typeof variables;

export type breakpointsNamesType = keyof variablesType['breakpoints'];
