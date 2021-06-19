// Converts a unit less $number to a rem.

type remType = ($number: number) => string;

export const rem: remType = ($number) => {
  return `${$number / 16}rem`;
};
