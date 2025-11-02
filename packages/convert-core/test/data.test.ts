import { describe, it, expect } from 'vitest';
import { convert } from '../src';

describe('data units', () => {
  it('distinguishes between KB and KiB', () => {
    expect(convert(1, 'kB', 'B')).toBe(1000);
    expect(convert(1, 'KiB', 'B')).toBe(1024);
  });

  it('handles data rates', () => {
    expect(convert(1, 'Mb/s', 'MB/s')).toBeCloseTo(0.125, 12);
  });
});
