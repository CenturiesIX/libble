import { ALL_UNITS, UNIT_GROUPS } from './units';
import { Dimension, UnitDef } from './types';
import { SI_PREFIXES, combineFactors, divideFactors } from './si';

let cachedUnits: UnitDef[] | null = null;
const symbolMap = new Map<string, UnitDef>();
const nameMap = new Map<string, UnitDef>();

const cloneUnit = (unit: UnitDef): UnitDef => ({
  ...unit,
  toBase: { ...unit.toBase },
  fromBase: { ...unit.fromBase },
  aliases: unit.aliases ? [...unit.aliases] : undefined,
  tags: unit.tags ? [...unit.tags] : undefined
});

const appendUnit = (unit: UnitDef) => {
  const existing = symbolMap.get(unit.symbol);
  if (existing) {
    return;
  }
  const stored = cloneUnit(unit);
  symbolMap.set(stored.symbol, stored);
  nameMap.set(stored.name.toLowerCase(), stored);
  stored.aliases?.forEach((alias) => nameMap.set(alias.toLowerCase(), stored));
  cachedUnits?.push(stored);
};

const generatePrefixedUnits = (base: UnitDef): UnitDef[] => {
  if (base.prefixes !== 'si') {
    return [];
  }
  if (base.toBase.offset !== undefined || base.fromBase.offset !== undefined) {
    return [];
  }
  return SI_PREFIXES.map((prefix) => {
    const symbol = `${prefix.symbol}${base.symbol}`;
    if (symbol === base.symbol) {
      return null;
    }
    const name = `${prefix.name}${base.name}`;
    const aliases = base.aliases?.map((alias) => `${prefix.name}${alias}`);
    return {
      ...base,
      name,
      symbol,
      toBase: { factor: combineFactors(prefix.factor, base.toBase.factor) },
      fromBase: { factor: divideFactors(base.fromBase.factor, prefix.factor) },
      aliases,
      prefixes: null
    } as UnitDef;
  }).filter((unit): unit is UnitDef => Boolean(unit));
};

const ensureUnits = () => {
  if (cachedUnits) {
    return;
  }
  cachedUnits = [];
  symbolMap.clear();
  nameMap.clear();
  const seenSymbols = new Set<string>();
  const add = (unit: UnitDef) => {
    if (seenSymbols.has(unit.symbol)) {
      return;
    }
    seenSymbols.add(unit.symbol);
    appendUnit(unit);
  };
  for (const unit of ALL_UNITS) {
    add(unit);
    const prefixed = generatePrefixedUnits(unit);
    prefixed.forEach(add);
  }
};

export const getAllUnits = (): UnitDef[] => {
  ensureUnits();
  return cachedUnits!.map(cloneUnit);
};

export const findUnit = (id: string): UnitDef | undefined => {
  ensureUnits();
  return symbolMap.get(id) ?? nameMap.get(id.toLowerCase());
};

export const listUnitsByDimension = (dimension: Dimension): UnitDef[] => {
  return getAllUnits().filter((unit) => unit.dimension === dimension);
};

export const listDimensions = (): Dimension[] => {
  return Object.keys(UNIT_GROUPS) as Dimension[];
};
