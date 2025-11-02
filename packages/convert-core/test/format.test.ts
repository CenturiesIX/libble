import { describe, it, expect } from 'vitest';
import { format } from '../src';

describe('format helper', () => {
  it('applies SI prefix for large numbers', () => {
    expect(format(12345, 'm')).toBe('12.345 km');
  });

  it('applies fixed precision when requested', () => {
    expect(format(1.2345, 'm', { mode: 'fixed', precision: 2 })).toBe('1.23 m');
  });
});
