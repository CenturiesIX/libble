import Decimal from 'decimal.js';
import { findUnit } from './registry';
import { decimal } from './math';

const NUMBER_RE = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;

const normalizeNumeric = (input: string): string => {
  return input.replace(/_/g, '').replace(/,/g, '');
};

const evaluateProduct = (expression: string): Decimal => {
  const factors = expression.split('*');
  return factors.map(evaluateQuotient).reduce((acc, factor) => acc.times(factor));
};

const evaluateQuotient = (expression: string): Decimal => {
  const terms = expression.split('/');
  return terms
    .map((term) => evaluateAtomic(term))
    .reduce((acc, term, index) => (index === 0 ? term : acc.div(term)));
};

const evaluateAtomic = (expression: string): Decimal => {
  const cleaned = expression.replace(/\s+/g, '');
  if (!cleaned) {
    throw new Error('Empty numeric atom');
  }
  const normalized = normalizeNumeric(cleaned);
  if (!NUMBER_RE.test(normalized)) {
    throw new Error(`Invalid numeric value: ${expression}`);
  }
  return decimal(normalized);
};

export const parseNumeric = (input: string): Decimal => {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new Error('Empty numeric input');
  }
  return evaluateProduct(trimmed);
};

export const parseQuantity = (
  input: string
): { value: number; unit: string } => {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new Error('Empty quantity input');
  }
  const unitIndex = trimmed.search(/[^0-9eE+\-*/_,\.\s]/);
  if (unitIndex === -1) {
    throw new Error(`Unable to determine unit in input: ${input}`);
  }
  const valuePart = trimmed.slice(0, unitIndex).trim();
  const unitPart = trimmed.slice(unitIndex).trim();
  const value = parseNumeric(valuePart).toNumber();
  const unit = unitPart.trim();
  if (!findUnit(unit)) {
    throw new Error(`Unknown unit: ${unit}`);
  }
  return { value, unit };
};
