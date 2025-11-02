import { useEffect, useMemo, useState } from 'react';
import {
  convert,
  format as formatValue,
  listCategories,
  listUnits,
  parseNumeric,
  type Dimension,
  type UnitDef
} from '@unit-convert/convert-core';

const STORAGE_KEY = 'unit-convert-preferences';

type Preferences = {
  category: Dimension;
  from: string;
  to: string;
};

const defaultPreferences: Preferences = {
  category: 'length',
  from: 'm',
  to: 'ft'
};

const loadPreferences = (): Preferences => {
  if (typeof window === 'undefined') {
    return defaultPreferences;
  }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultPreferences;
    const parsed = JSON.parse(stored) as Preferences;
    return { ...defaultPreferences, ...parsed };
  } catch (error) {
    console.warn('Failed to load preferences', error);
    return defaultPreferences;
  }
};

const savePreferences = (prefs: Preferences) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
};

type ConversionResult = {
  unit: UnitDef;
  formatted: string;
  value: number;
};

export const useConversion = () => {
  const categories = useMemo(() => listCategories(), []);
  const [preferences, setPreferences] = useState<Preferences>(() => loadPreferences());
  const [rawInput, setRawInput] = useState('1');

  const units = useMemo(() => listUnits(preferences.category), [preferences.category]);
  const fromUnit = useMemo(
    () => units.find((unit) => unit.symbol === preferences.from) ?? units[0],
    [units, preferences.from]
  );
  const toUnit = useMemo(
    () => units.find((unit) => unit.symbol === preferences.to) ?? units[1] ?? units[0],
    [units, preferences.to]
  );

  useEffect(() => {
    if (!fromUnit || !toUnit) return;
    savePreferences({ category: preferences.category, from: fromUnit.symbol, to: toUnit.symbol });
  }, [preferences.category, fromUnit, toUnit]);

  const numericValue = useMemo(() => {
    const normalized = rawInput.trim();
    if (!normalized) return 0;
    try {
      return parseNumeric(normalized).toNumber();
    } catch (error) {
      console.warn('Failed to parse value', error);
      return 0;
    }
  }, [rawInput]);

  const mainResult = useMemo(() => {
    if (!fromUnit || !toUnit) return null;
    const converted = convert(numericValue, fromUnit.symbol, toUnit.symbol);
    return {
      unit: toUnit,
      value: converted,
      formatted: formatValue(converted, toUnit.symbol)
    } satisfies ConversionResult;
  }, [fromUnit, toUnit, numericValue]);

  const alternateResults = useMemo(() => {
    if (!fromUnit) return [] as ConversionResult[];
    const options = units
      .filter((unit) => unit.symbol !== fromUnit.symbol && unit.symbol !== toUnit.symbol)
      .slice(0, 4)
      .map((unit) => {
        const converted = convert(numericValue, fromUnit.symbol, unit.symbol);
        return {
          unit,
          value: converted,
          formatted: formatValue(converted, unit.symbol)
        } satisfies ConversionResult;
      });
    return options;
  }, [units, fromUnit, toUnit, numericValue]);

  return {
    categories,
    units,
    preferences,
    setCategory: (category: Dimension) =>
      setPreferences((prev) => {
        const nextUnits = listUnits(category);
        const defaultFrom = nextUnits[0]?.symbol ?? 'm';
        const defaultTo = nextUnits[1]?.symbol ?? defaultFrom;
        const nextFrom = nextUnits.find((unit) => unit.symbol === prev.from)?.symbol ?? defaultFrom;
        const nextTo = nextUnits.find((unit) => unit.symbol === prev.to)?.symbol ?? defaultTo;
        return {
          category,
          from: nextFrom,
          to: nextTo
        };
      }),
    setFrom: (symbol: string) => setPreferences((prev) => ({ ...prev, from: symbol })),
    setTo: (symbol: string) => setPreferences((prev) => ({ ...prev, to: symbol })),
    swapUnits: () =>
      setPreferences((prev) => ({ ...prev, from: prev.to, to: prev.from })),
    rawInput,
    setRawInput,
    fromUnit,
    toUnit,
    numericValue,
    mainResult,
    alternateResults
  };
};
