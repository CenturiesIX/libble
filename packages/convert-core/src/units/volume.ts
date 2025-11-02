import { UnitDef } from '../types';

export const volumeUnits: UnitDef[] = [
  {
    name: 'cubic meter',
    symbol: 'm³',
    dimension: 'volume',
    toBase: { factor: 1 },
    fromBase: { factor: 1 }
  },
  {
    name: 'liter',
    symbol: 'L',
    dimension: 'volume',
    toBase: { factor: '0.001' },
    fromBase: { factor: '1000' },
    aliases: ['litre']
  },
  {
    name: 'milliliter',
    symbol: 'mL',
    dimension: 'volume',
    toBase: { factor: '1e-6' },
    fromBase: { factor: '1e6' }
  },
  {
    name: 'cubic centimeter',
    symbol: 'cm³',
    dimension: 'volume',
    toBase: { factor: '1e-6' },
    fromBase: { factor: '1e6' }
  },
  {
    name: 'gallon (US)',
    symbol: 'gal',
    dimension: 'volume',
    toBase: { factor: '0.003785411784' },
    fromBase: { factor: '264.1720523581484' }
  },
  {
    name: 'quart (US)',
    symbol: 'qt',
    dimension: 'volume',
    toBase: { factor: '0.000946352946' },
    fromBase: { factor: '1056.6882094325938' }
  },
  {
    name: 'pint (US)',
    symbol: 'pt',
    dimension: 'volume',
    toBase: { factor: '0.000473176473' },
    fromBase: { factor: '2113.3764188651876' }
  },
  {
    name: 'fluid ounce (US)',
    symbol: 'fl oz',
    dimension: 'volume',
    toBase: { factor: '2.95735295625e-5' },
    fromBase: { factor: '33814.022701842998' }
  }
];
