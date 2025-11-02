import { UnitDef } from '../types';

export const speedUnits: UnitDef[] = [
  {
    name: 'meter per second',
    symbol: 'm/s',
    dimension: 'speed',
    toBase: { factor: 1 },
    fromBase: { factor: 1 }
  },
  {
    name: 'kilometer per hour',
    symbol: 'km/h',
    dimension: 'speed',
    toBase: { factor: '0.2777777777777778' },
    fromBase: { factor: '3.6' }
  },
  {
    name: 'mile per hour',
    symbol: 'mph',
    dimension: 'speed',
    toBase: { factor: '0.44704' },
    fromBase: { factor: '2.2369362920544025' }
  },
  {
    name: 'knot',
    symbol: 'kn',
    dimension: 'speed',
    toBase: { factor: '0.5144444444444445' },
    fromBase: { factor: '1.9438444924406046' }
  },
  {
    name: 'foot per second',
    symbol: 'ft/s',
    dimension: 'speed',
    toBase: { factor: '0.3048' },
    fromBase: { factor: '3.280839895013123' }
  }
];
