import Decimal from 'decimal.js';

export const decimal = (value: number | string | Decimal): Decimal => {
  if (value instanceof Decimal) {
    return value;
  }
  return new Decimal(value);
};

export const applyScaleToBase = (
  value: Decimal,
  scale: { factor: number | string; offset?: number | string }
): Decimal => {
  const factor = decimal(scale.factor);
  if (scale.offset !== undefined) {
    return value.plus(decimal(scale.offset)).times(factor);
  }
  return value.times(factor);
};

export const applyScaleFromBase = (
  value: Decimal,
  scale: { factor: number | string; offset?: number | string }
): Decimal => {
  const factor = decimal(scale.factor);
  const result = value.times(factor);
  if (scale.offset !== undefined) {
    return result.plus(decimal(scale.offset));
  }
  return result;
};

export const divide = (a: number | string | Decimal, b: number | string | Decimal): Decimal =>
  decimal(a).div(decimal(b));

export const multiply = (
  a: number | string | Decimal,
  b: number | string | Decimal
): Decimal => decimal(a).times(decimal(b));

export const invert = (value: number | string | Decimal): Decimal => decimal(1).div(decimal(value));
