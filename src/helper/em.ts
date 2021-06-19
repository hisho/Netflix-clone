// Converts a unit less $number to a em.

type emType = ($number: number) => string;

export const em: emType = ($number) => {
  return `${$number / 16}em`;
};
