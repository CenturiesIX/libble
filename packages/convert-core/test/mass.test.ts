import { describe, it, expect } from 'vitest';
import { convert, listUnits } from '../src';

const round = (value: number, decimals = 12) =>
  Math.round(value * 10 ** decimals) / 10 ** decimals;

describe('mass conversions', () => {
  it('converts kilograms to pounds', () => {
    expect(round(convert(1, 'kg', 'lb'), 8)).toBeCloseTo(2.20462262);
  });

  it('converts pounds to kilograms', () => {
    expect(round(convert(1, 'lb', 'kg'), 8)).toBeCloseTo(0.45359237);
  });

  it('lists mass units', () => {
    const units = listUnits('mass');
    expect(units.some((unit) => unit.symbol === 'kg')).toBe(true);
  });
});
