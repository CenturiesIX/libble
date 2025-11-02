import { UnitDef } from '../types';

export const timeUnits: UnitDef[] = [
  {
    name: 'second',
    symbol: 's',
    dimension: 'time',
    toBase: { factor: 1 },
    fromBase: { factor: 1 },
    prefixes: 'si'
  },
  {
    name: 'millisecond',
    symbol: 'ms',
    dimension: 'time',
    toBase: { factor: '0.001' },
    fromBase: { factor: '1000' }
  },
  {
    name: 'minute',
    symbol: 'min',
    dimension: 'time',
    toBase: { factor: '60' },
    fromBase: { factor: '0.016666666666666666' }
  },
  {
    name: 'hour',
    symbol: 'h',
    dimension: 'time',
    toBase: { factor: '3600' },
    fromBase: { factor: '0.0002777777777777778' }
  },
  {
    name: 'day',
    symbol: 'd',
    dimension: 'time',
    toBase: { factor: '86400' },
    fromBase: { factor: '1.1574074074074073e-5' }
  },
  {
    name: 'week',
    symbol: 'wk',
    dimension: 'time',
    toBase: { factor: '604800' },
    fromBase: { factor: '1.6534391534391534e-6' }
  }
];
