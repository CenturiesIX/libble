import { UnitDef } from '../types';

export const areaUnits: UnitDef[] = [
  {
    name: 'square meter',
    symbol: 'm²',
    dimension: 'area',
    toBase: { factor: 1 },
    fromBase: { factor: 1 }
  },
  {
    name: 'square kilometer',
    symbol: 'km²',
    dimension: 'area',
    toBase: { factor: '1e6' },
    fromBase: { factor: '1e-6' }
  },
  {
    name: 'square centimeter',
    symbol: 'cm²',
    dimension: 'area',
    toBase: { factor: '1e-4' },
    fromBase: { factor: '1e4' }
  },
  {
    name: 'square millimeter',
    symbol: 'mm²',
    dimension: 'area',
    toBase: { factor: '1e-6' },
    fromBase: { factor: '1e6' }
  },
  {
    name: 'hectare',
    symbol: 'ha',
    dimension: 'area',
    toBase: { factor: '10000' },
    fromBase: { factor: '0.0001' }
  },
  {
    name: 'acre',
    symbol: 'ac',
    dimension: 'area',
    toBase: { factor: '4046.8564224' },
    fromBase: { factor: '0.00024710538146717' }
  }
];
