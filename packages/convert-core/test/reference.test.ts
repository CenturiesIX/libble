import { describe, it, expect } from 'vitest';
import { convert, parseQuantity } from '../src';

describe('reference conversions', () => {
  it('1 inch equals 25.4 millimeters', () => {
    expect(convert(1, 'in', 'mm')).toBeCloseTo(25.4, 10);
  });

  it('1 liter equals 0.001 cubic meters', () => {
    expect(convert(1, 'L', 'm³')).toBeCloseTo(0.001, 12);
  });

  it('handles parseQuantity', () => {
    const { value, unit } = parseQuantity('1.2e3 kJ');
    expect(value).toBeCloseTo(1.2e3, 6);
    expect(unit).toBe('kJ');
  });

  it('handles scientific expressions', () => {
    expect(() => parseQuantity('')).toThrowError();
  });
});
