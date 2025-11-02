export type Dimension =
  | 'length'
  | 'area'
  | 'volume'
  | 'mass'
  | 'time'
  | 'speed'
  | 'energy'
  | 'power'
  | 'force'
  | 'pressure'
  | 'temperature'
  | 'angle'
  | 'data'
  | 'datarate'
  | 'frequency'
  | 'acceleration'
  | 'luminance'
  | 'illuminance'
  | 'fuel-economy'
  | 'viscosity-dynamic'
  | 'viscosity-kinematic';

type Numeric = number | string;

export type UnitScale = {
  factor: Numeric;
  offset?: Numeric;
};

export type UnitDef = {
  name: string;
  symbol: string;
  dimension: Dimension;
  toBase: UnitScale;
  fromBase: UnitScale;
  aliases?: string[];
  prefixes?: 'si' | null;
  tags?: string[];
};

export type UnitRegistry = Record<string, UnitDef>;

export type ConvertOptions = {
  precision?: number;
  mode?: 'significant' | 'fixed';
};
