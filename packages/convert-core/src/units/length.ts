import { UnitDef } from '../types';

export const lengthUnits: UnitDef[] = [
  {
    name: 'meter',
    symbol: 'm',
    dimension: 'length',
    toBase: { factor: 1 },
    fromBase: { factor: 1 },
    prefixes: 'si'
  },
  {
    name: 'kilometer',
    symbol: 'km',
    dimension: 'length',
    toBase: { factor: '1000' },
    fromBase: { factor: '0.001' }
  },
  {
    name: 'centimeter',
    symbol: 'cm',
    dimension: 'length',
    toBase: { factor: '0.01' },
    fromBase: { factor: '100' }
  },
  {
    name: 'millimeter',
    symbol: 'mm',
    dimension: 'length',
    toBase: { factor: '0.001' },
    fromBase: { factor: '1000' }
  },
  {
    name: 'micrometer',
    symbol: 'µm',
    dimension: 'length',
    toBase: { factor: '1e-6' },
    fromBase: { factor: '1e6' }
  },
  {
    name: 'nanometer',
    symbol: 'nm',
    dimension: 'length',
    toBase: { factor: '1e-9' },
    fromBase: { factor: '1e9' }
  },
  {
    name: 'inch',
    symbol: 'in',
    dimension: 'length',
    toBase: { factor: '0.0254' },
    fromBase: { factor: '39.37007874015748' }
  },
  {
    name: 'foot',
    symbol: 'ft',
    dimension: 'length',
    toBase: { factor: '0.3048' },
    fromBase: { factor: '3.280839895013123' }
  },
  {
    name: 'yard',
    symbol: 'yd',
    dimension: 'length',
    toBase: { factor: '0.9144' },
    fromBase: { factor: '1.0936132983377078' }
  },
  {
    name: 'mile',
    symbol: 'mi',
    dimension: 'length',
    toBase: { factor: '1609.344' },
    fromBase: { factor: '0.000621371192237334' }
  },
  {
    name: 'nautical mile',
    symbol: 'nmi',
    dimension: 'length',
    toBase: { factor: '1852' },
    fromBase: { factor: '0.0005399568034557235' }
  }
];
