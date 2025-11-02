import { UnitDef } from '../types';

export const dataUnits: UnitDef[] = [
  {
    name: 'byte',
    symbol: 'B',
    dimension: 'data',
    toBase: { factor: 1 },
    fromBase: { factor: 1 }
  },
  {
    name: 'bit',
    symbol: 'b',
    dimension: 'data',
    toBase: { factor: '0.125' },
    fromBase: { factor: '8' }
  },
  {
    name: 'kilobyte',
    symbol: 'kB',
    dimension: 'data',
    toBase: { factor: '1000' },
    fromBase: { factor: '0.001' }
  },
  {
    name: 'megabyte',
    symbol: 'MB',
    dimension: 'data',
    toBase: { factor: '1e6' },
    fromBase: { factor: '1e-6' }
  },
  {
    name: 'gigabyte',
    symbol: 'GB',
    dimension: 'data',
    toBase: { factor: '1e9' },
    fromBase: { factor: '1e-9' }
  },
  {
    name: 'terabyte',
    symbol: 'TB',
    dimension: 'data',
    toBase: { factor: '1e12' },
    fromBase: { factor: '1e-12' }
  },
  {
    name: 'kibibyte',
    symbol: 'KiB',
    dimension: 'data',
    toBase: { factor: '1024' },
    fromBase: { factor: '0.0009765625' }
  },
  {
    name: 'mebibyte',
    symbol: 'MiB',
    dimension: 'data',
    toBase: { factor: '1048576' },
    fromBase: { factor: '9.5367431640625e-7' }
  },
  {
    name: 'gibibyte',
    symbol: 'GiB',
    dimension: 'data',
    toBase: { factor: '1073741824' },
    fromBase: { factor: '9.313225746154785e-10' }
  }
];
