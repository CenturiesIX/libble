import { UnitDef } from '../types';

export const powerUnits: UnitDef[] = [
  {
    name: 'watt',
    symbol: 'W',
    dimension: 'power',
    toBase: { factor: 1 },
    fromBase: { factor: 1 },
    prefixes: 'si'
  },
  {
    name: 'kilowatt',
    symbol: 'kW',
    dimension: 'power',
    toBase: { factor: '1000' },
    fromBase: { factor: '0.001' }
  },
  {
    name: 'horsepower',
    symbol: 'hp',
    dimension: 'power',
    toBase: { factor: '745.6998715822702' },
    fromBase: { factor: '0.0013410220895950276' }
  }
];
