import { UnitDef } from '../types';

export const angleUnits: UnitDef[] = [
  {
    name: 'radian',
    symbol: 'rad',
    dimension: 'angle',
    toBase: { factor: 1 },
    fromBase: { factor: 1 }
  },
  {
    name: 'degree',
    symbol: '°',
    dimension: 'angle',
    toBase: { factor: '0.017453292519943295' },
    fromBase: { factor: '57.29577951308232' }
  },
  {
    name: 'minute of arc',
    symbol: "'",
    dimension: 'angle',
    toBase: { factor: '0.0002908882086657216' },
    fromBase: { factor: '3437.7467707849396' }
  },
  {
    name: 'second of arc',
    symbol: '"',
    dimension: 'angle',
    toBase: { factor: '4.84813681109536e-6' },
    fromBase: { factor: '206264.80624709636' }
  },
  {
    name: 'gradian',
    symbol: 'gon',
    dimension: 'angle',
    toBase: { factor: '0.015707963267948967' },
    fromBase: { factor: '63.66197723675813' }
  }
];
