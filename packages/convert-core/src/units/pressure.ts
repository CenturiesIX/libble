import { UnitDef } from '../types';

export const pressureUnits: UnitDef[] = [
  {
    name: 'pascal',
    symbol: 'Pa',
    dimension: 'pressure',
    toBase: { factor: 1 },
    fromBase: { factor: 1 },
    prefixes: 'si'
  },
  {
    name: 'bar',
    symbol: 'bar',
    dimension: 'pressure',
    toBase: { factor: '1e5' },
    fromBase: { factor: '1e-5' }
  },
  {
    name: 'atmosphere',
    symbol: 'atm',
    dimension: 'pressure',
    toBase: { factor: '101325' },
    fromBase: { factor: '9.869232667160128e-6' }
  },
  {
    name: 'millimeter of mercury',
    symbol: 'mmHg',
    dimension: 'pressure',
    toBase: { factor: '133.322387415' },
    fromBase: { factor: '0.007500615613026431' }
  },
  {
    name: 'pound per square inch',
    symbol: 'psi',
    dimension: 'pressure',
    toBase: { factor: '6894.757293168361' },
    fromBase: { factor: '0.00014503773773020923' }
  }
];
