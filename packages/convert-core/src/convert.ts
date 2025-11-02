import Decimal from 'decimal.js';
import { applyScaleFromBase, applyScaleToBase, decimal } from './math';
import { findUnit } from './registry';
import { ConvertOptions } from './types';
import { parseNumeric } from './parse';

const toDecimalValue = (value: number | string): Decimal => {
  if (typeof value === 'number') {
    return decimal(value);
  }
  return parseNumeric(value);
};

export const convertDecimal = (
  value: number | string,
  from: string,
  to: string
): Decimal => {
  const fromUnit = findUnit(from);
  const toUnit = findUnit(to);
  if (!fromUnit) {
    throw new Error(`Unknown unit: ${from}`);
  }
  if (!toUnit) {
    throw new Error(`Unknown unit: ${to}`);
  }
  if (fromUnit.dimension !== toUnit.dimension) {
    throw new Error(`Cannot convert between ${fromUnit.dimension} and ${toUnit.dimension}`);
  }
  const decimalValue = toDecimalValue(value);
  const baseValue = applyScaleToBase(decimalValue, fromUnit.toBase);
  const targetValue = applyScaleFromBase(baseValue, toUnit.fromBase);
  return targetValue;
};

export const convert = (
  value: number | string,
  from: string,
  to: string,
  _opts?: ConvertOptions
): number => {
  return convertDecimal(value, from, to).toNumber();
};
