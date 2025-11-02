import { UnitDef } from '../types';

export const dataRateUnits: UnitDef[] = [
  {
    name: 'byte per second',
    symbol: 'B/s',
    dimension: 'datarate',
    toBase: { factor: 1 },
    fromBase: { factor: 1 }
  },
  {
    name: 'bit per second',
    symbol: 'b/s',
    dimension: 'datarate',
    toBase: { factor: '0.125' },
    fromBase: { factor: '8' }
  },
  {
    name: 'kilobit per second',
    symbol: 'kb/s',
    dimension: 'datarate',
    toBase: { factor: '125' },
    fromBase: { factor: '0.008' }
  },
  {
    name: 'kilobyte per second',
    symbol: 'kB/s',
    dimension: 'datarate',
    toBase: { factor: '1000' },
    fromBase: { factor: '0.001' }
  },
  {
    name: 'megabit per second',
    symbol: 'Mb/s',
    dimension: 'datarate',
    toBase: { factor: '125000' },
    fromBase: { factor: '8e-6' }
  },
  {
    name: 'megabyte per second',
    symbol: 'MB/s',
    dimension: 'datarate',
    toBase: { factor: '1e6' },
    fromBase: { factor: '1e-6' }
  }
];
