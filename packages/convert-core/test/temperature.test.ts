import { describe, it, expect } from 'vitest';
import { convert, format } from '../src';

describe('temperature conversions', () => {
  it('handles celsius to fahrenheit', () => {
    expect(convert(0, '°C', '°F')).toBeCloseTo(32, 12);
    expect(convert(100, '°C', '°F')).toBeCloseTo(212, 12);
  });

  it('handles fahrenheit to kelvin', () => {
    expect(convert(32, '°F', 'K')).toBeCloseTo(273.15, 10);
  });

  it('formats boiling point without rounding error', () => {
    expect(format(100, '°C')).toBe('100 °C');
    expect(format(212, '°F')).toBe('212 °F');
  });
});
