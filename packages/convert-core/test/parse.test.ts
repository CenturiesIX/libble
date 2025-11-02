import { describe, it, expect } from 'vitest';
import { parseNumeric } from '../src';

describe('parseNumeric', () => {
  it('parses scientific notation', () => {
    expect(parseNumeric('1.2e3').toNumber()).toBeCloseTo(1200, 6);
  });

  it('parses comma separated', () => {
    expect(parseNumeric('1,200').toNumber()).toBeCloseTo(1200, 6);
  });

  it('parses simple multiplication', () => {
    expect(parseNumeric('2 * 3').toNumber()).toBe(6);
  });
});
