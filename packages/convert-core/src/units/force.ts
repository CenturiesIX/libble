import { UnitDef } from '../types';

export const forceUnits: UnitDef[] = [
  {
    name: 'newton',
    symbol: 'N',
    dimension: 'force',
    toBase: { factor: 1 },
    fromBase: { factor: 1 },
    prefixes: 'si'
  },
  {
    name: 'kilonewton',
    symbol: 'kN',
    dimension: 'force',
    toBase: { factor: '1000' },
    fromBase: { factor: '0.001' }
  },
  {
    name: 'pound-force',
    symbol: 'lbf',
    dimension: 'force',
    toBase: { factor: '4.4482216152605' },
    fromBase: { factor: '0.2248089430997105' }
  },
  {
    name: 'kilogram-force',
    symbol: 'kgf',
    dimension: 'force',
    toBase: { factor: '9.80665' },
    fromBase: { factor: '0.10197162129779283' }
  }
];
