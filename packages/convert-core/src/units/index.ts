import { UnitDef } from '../types';
import { massUnits } from './mass';
import { energyUnits } from './energy';
import { temperatureUnits } from './temperature';
import { lengthUnits } from './length';
import { areaUnits } from './area';
import { volumeUnits } from './volume';
import { timeUnits } from './time';
import { speedUnits } from './speed';
import { pressureUnits } from './pressure';
import { forceUnits } from './force';
import { powerUnits } from './power';
import { dataUnits } from './data';
import { dataRateUnits } from './datarate';
import { angleUnits } from './angle';
import { frequencyUnits } from './frequency';
import { accelerationUnits } from './acceleration';

export const UNIT_GROUPS: Record<string, UnitDef[]> = {
  mass: massUnits,
  energy: energyUnits,
  temperature: temperatureUnits,
  length: lengthUnits,
  area: areaUnits,
  volume: volumeUnits,
  time: timeUnits,
  speed: speedUnits,
  pressure: pressureUnits,
  force: forceUnits,
  power: powerUnits,
  data: dataUnits,
  datarate: dataRateUnits,
  angle: angleUnits,
  frequency: frequencyUnits,
  acceleration: accelerationUnits
};

export const ALL_UNITS: UnitDef[] = Object.values(UNIT_GROUPS).flat();
