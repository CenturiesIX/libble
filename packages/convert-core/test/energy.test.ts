import { describe, it, expect } from 'vitest';
import { convert } from '../src';

describe('energy conversions', () => {
  it('converts kWh to joule', () => {
    expect(convert(1, 'kWh', 'J')).toBeCloseTo(3.6e6, 6);
  });

  it('converts joule to electronvolt accurately', () => {
    const eV = convert(1, 'J', 'eV');
    expect(eV).toBeCloseTo(6.241509074460763e18, 6);
  });
});
