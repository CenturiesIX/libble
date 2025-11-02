import { UnitDef } from '../types';

export const frequencyUnits: UnitDef[] = [
  {
    name: 'hertz',
    symbol: 'Hz',
    dimension: 'frequency',
    toBase: { factor: 1 },
    fromBase: { factor: 1 },
    prefixes: 'si'
  },
  {
    name: 'kilohertz',
    symbol: 'kHz',
    dimension: 'frequency',
    toBase: { factor: '1000' },
    fromBase: { factor: '0.001' }
  },
  {
    name: 'megahertz',
    symbol: 'MHz',
    dimension: 'frequency',
    toBase: { factor: '1e6' },
    fromBase: { factor: '1e-6' }
  },
  {
    name: 'gigahertz',
    symbol: 'GHz',
    dimension: 'frequency',
    toBase: { factor: '1e9' },
    fromBase: { factor: '1e-9' }
  }
];
