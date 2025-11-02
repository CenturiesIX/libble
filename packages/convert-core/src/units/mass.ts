import { UnitDef } from '../types';

export const massUnits: UnitDef[] = [
  {
    name: 'kilogram',
    symbol: 'kg',
    dimension: 'mass',
    toBase: { factor: 1 },
    fromBase: { factor: 1 },
    prefixes: 'si'
  },
  {
    name: 'gram',
    symbol: 'g',
    dimension: 'mass',
    toBase: { factor: '1e-3' },
    fromBase: { factor: '1e3' },
    prefixes: 'si'
  },
  {
    name: 'pound',
    symbol: 'lb',
    dimension: 'mass',
    toBase: { factor: '0.45359237' },
    fromBase: { factor: '2.2046226218487757' },
    aliases: ['lbs', 'pound mass']
  },
  {
    name: 'ounce',
    symbol: 'oz',
    dimension: 'mass',
    toBase: { factor: '0.028349523125' },
    fromBase: { factor: '35.27396194958041' }
  },
  {
    name: 'tonne',
    symbol: 't',
    dimension: 'mass',
    toBase: { factor: '1000' },
    fromBase: { factor: '0.001' }
  },
  {
    name: 'short ton',
    symbol: 'ton',
    dimension: 'mass',
    toBase: { factor: '907.18474' },
    fromBase: { factor: '0.0011023113109244' },
    aliases: ['us ton']
  }
];
