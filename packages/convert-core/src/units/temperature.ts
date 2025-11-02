import { UnitDef } from '../types';

export const temperatureUnits: UnitDef[] = [
  {
    name: 'kelvin',
    symbol: 'K',
    dimension: 'temperature',
    toBase: { factor: 1 },
    fromBase: { factor: 1 }
  },
  {
    name: 'celsius',
    symbol: '°C',
    dimension: 'temperature',
    toBase: { factor: 1, offset: '273.15' },
    fromBase: { factor: 1, offset: '-273.15' },
    aliases: ['degC', 'C']
  },
  {
    name: 'fahrenheit',
    symbol: '°F',
    dimension: 'temperature',
    toBase: { factor: '0.5555555555555556', offset: '459.67' },
    fromBase: { factor: '1.8', offset: '-459.67' },
    aliases: ['degF', 'F']
  },
  {
    name: 'rankine',
    symbol: '°R',
    dimension: 'temperature',
    toBase: { factor: '0.5555555555555556' },
    fromBase: { factor: '1.8' }
  }
];
