import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

vi.mock('@unit-convert/convert-core', () => ({
  listCategories: () => ['length'],
  listUnits: () => [
    {
      name: 'meter',
      symbol: 'm',
      dimension: 'length',
      toBase: { factor: 1 },
      fromBase: { factor: 1 }
    },
    {
      name: 'foot',
      symbol: 'ft',
      dimension: 'length',
      toBase: { factor: 0.3048 },
      fromBase: { factor: 3.28084 }
    }
  ],
  convert: () => 1,
  format: () => '1 m',
  parseNumeric: (value: string) => ({ toNumber: () => Number(value) })
}), { virtual: true });

describe('App', () => {
  it('renders headline and controls', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /unit convert/i })).toBeTruthy();
    expect(screen.getByLabelText(/category/i)).toBeTruthy();
    expect(screen.getByLabelText(/value/i)).toBeTruthy();
  });
});
