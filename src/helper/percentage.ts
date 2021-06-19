// Converts a unit less $number (usually a decimal between 0 and 1) to a percentage.

type percentageType = ($number: number) => string;

export const percentage: percentageType = ($number) => {
  return `${($number * 100).toFixed(4)}%`;
};
