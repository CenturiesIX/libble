import { UnitDef } from '../types';

export const accelerationUnits: UnitDef[] = [
  {
    name: 'meter per second squared',
    symbol: 'm/s²',
    dimension: 'acceleration',
    toBase: { factor: 1 },
    fromBase: { factor: 1 }
  },
  {
    name: 'foot per second squared',
    symbol: 'ft/s²',
    dimension: 'acceleration',
    toBase: { factor: '0.3048' },
    fromBase: { factor: '3.280839895013123' }
  },
  {
    name: 'gal',
    symbol: 'Gal',
    dimension: 'acceleration',
    toBase: { factor: '0.01' },
    fromBase: { factor: '100' }
  }
];
