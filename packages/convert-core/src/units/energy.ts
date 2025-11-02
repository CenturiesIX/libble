import { UnitDef } from '../types';

export const energyUnits: UnitDef[] = [
  {
    name: 'joule',
    symbol: 'J',
    dimension: 'energy',
    toBase: { factor: 1 },
    fromBase: { factor: 1 },
    prefixes: 'si'
  },
  {
    name: 'kilowatt hour',
    symbol: 'kWh',
    dimension: 'energy',
    toBase: { factor: '3.6e6' },
    fromBase: { factor: '2.7777777777777776e-7' },
    aliases: ['kilowatt-hour']
  },
  {
    name: 'calorie',
    symbol: 'cal',
    dimension: 'energy',
    toBase: { factor: '4.184' },
    fromBase: { factor: '0.2390057361376673' },
    aliases: ['thermochemical calorie']
  },
  {
    name: 'kilocalorie',
    symbol: 'kcal',
    dimension: 'energy',
    toBase: { factor: '4184' },
    fromBase: { factor: '0.0002390057361376673' },
    aliases: ['Calorie', 'large calorie']
  },
  {
    name: 'electronvolt',
    symbol: 'eV',
    dimension: 'energy',
    toBase: { factor: '1.602176634e-19' },
    fromBase: { factor: '6.241509074460763e18' },
    prefixes: 'si'
  }
];
