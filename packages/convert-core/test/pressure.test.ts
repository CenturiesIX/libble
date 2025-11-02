import { describe, it, expect } from 'vitest';
import { convert } from '../src';

describe('pressure units', () => {
  it('converts atm to Pa', () => {
    expect(convert(1, 'atm', 'Pa')).toBeCloseTo(101325, 6);
  });

  it('converts psi to bar', () => {
    expect(convert(1, 'psi', 'bar')).toBeCloseTo(0.0689476, 6);
  });
});
