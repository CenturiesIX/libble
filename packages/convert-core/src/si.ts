import { multiply, divide } from './math';

export type Prefix = {
  name: string;
  symbol: string;
  factor: string;
};

export const SI_PREFIXES: Prefix[] = [
  { name: 'yocto', symbol: 'y', factor: '1e-24' },
  { name: 'zepto', symbol: 'z', factor: '1e-21' },
  { name: 'atto', symbol: 'a', factor: '1e-18' },
  { name: 'femto', symbol: 'f', factor: '1e-15' },
  { name: 'pico', symbol: 'p', factor: '1e-12' },
  { name: 'nano', symbol: 'n', factor: '1e-9' },
  { name: 'micro', symbol: 'µ', factor: '1e-6' },
  { name: 'milli', symbol: 'm', factor: '1e-3' },
  { name: 'centi', symbol: 'c', factor: '1e-2' },
  { name: 'deci', symbol: 'd', factor: '1e-1' },
  { name: 'deca', symbol: 'da', factor: '1e1' },
  { name: 'hecto', symbol: 'h', factor: '1e2' },
  { name: 'kilo', symbol: 'k', factor: '1e3' },
  { name: 'mega', symbol: 'M', factor: '1e6' },
  { name: 'giga', symbol: 'G', factor: '1e9' },
  { name: 'tera', symbol: 'T', factor: '1e12' },
  { name: 'peta', symbol: 'P', factor: '1e15' },
  { name: 'exa', symbol: 'E', factor: '1e18' },
  { name: 'zetta', symbol: 'Z', factor: '1e21' },
  { name: 'yotta', symbol: 'Y', factor: '1e24' }
];

export const combineFactors = (a: string | number, b: string | number): string => {
  return multiply(a, b).toString();
};

export const divideFactors = (a: string | number, b: string | number): string => {
  return divide(a, b).toString();
};
