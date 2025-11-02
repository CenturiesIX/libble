import { convertDecimal } from './convert';
import { findUnit, listUnitsByDimension } from './registry';
import { ConvertOptions } from './types';
import { SI_PREFIXES } from './si';

const DEFAULT_PRECISION = 12;

const trimTrailingZeros = (input: string): string => {
  if (input.includes('e') || input.includes('E')) {
    return input;
  }
  if (input.indexOf('.') === -1) {
    return input;
  }
  return input.replace(/\.0+$/, '').replace(/(\.\d*?[1-9])0+$/, '$1');
};

const choosePrecision = (value: number, opts?: ConvertOptions): number => {
  if (opts?.precision !== undefined) {
    return opts.precision;
  }
  return DEFAULT_PRECISION;
};

const determineBaseSymbol = (symbol: string): string => {
  const unit = findUnit(symbol);
  if (!unit) {
    return symbol;
  }
  if (unit.prefixes === 'si') {
    return symbol;
  }
  for (const prefix of SI_PREFIXES) {
    if (symbol.startsWith(prefix.symbol) && prefix.symbol.length > 0) {
      const remainder = symbol.slice(prefix.symbol.length);
      if (findUnit(remainder)) {
        return remainder;
      }
    }
  }
  return symbol;
};

const pickPrefixedUnit = (value: number | string, symbol: string): string => {
  const unit = findUnit(symbol);
  if (!unit) {
    throw new Error(`Unknown unit: ${symbol}`);
  }
  const baseSymbol = determineBaseSymbol(symbol);
  const dimensionUnits = listUnitsByDimension(unit.dimension);
  const candidates = [symbol];
  for (const prefix of SI_PREFIXES) {
    if (prefix.symbol.length === 0) {
      continue;
    }
    const candidateSymbol = `${prefix.symbol}${baseSymbol}`;
    if (!candidates.includes(candidateSymbol)) {
      const candidateUnit = dimensionUnits.find((u) => u.symbol === candidateSymbol);
      if (candidateUnit) {
        candidates.push(candidateSymbol);
      }
    }
  }
  let bestSymbol = symbol;
  let bestScore = Number.POSITIVE_INFINITY;
  let fallbackSymbol = symbol;
  let fallbackScore = Number.POSITIVE_INFINITY;
  for (const candidate of candidates) {
    const converted = convertDecimal(value, symbol, candidate).abs();
    if (converted.isZero()) {
      bestSymbol = candidate;
      break;
    }
    const numeric = converted.toNumber();
    if (!Number.isFinite(numeric) || numeric === 0) {
      continue;
    }
    const magnitude = Math.abs(Math.log10(Math.abs(numeric)));
    const score = Math.abs(magnitude - 0.5);
    const adjustedScore = score + (candidate === symbol ? 0 : 0.05);
    if (score < fallbackScore) {
      fallbackScore = score;
      fallbackSymbol = candidate;
    }
    if (adjustedScore < bestScore && converted.greaterThanOrEqualTo(0.1) && converted.lessThan(1000)) {
      bestScore = adjustedScore;
      bestSymbol = candidate;
    }
  }
  if (!Number.isFinite(bestScore)) {
    bestSymbol = fallbackSymbol;
  }
  return bestSymbol;
};

export const format = (value: number, unitSymbol: string, opts?: ConvertOptions): string => {
  const unit = findUnit(unitSymbol);
  if (!unit) {
    throw new Error(`Unknown unit: ${unitSymbol}`);
  }
  const targetSymbol = pickPrefixedUnit(value, unitSymbol);
  const targetValue = convertDecimal(value, unitSymbol, targetSymbol);
  const precision = choosePrecision(targetValue.toNumber(), opts);
  const mode = opts?.mode ?? 'significant';
  let formatted: string;
  if (mode === 'fixed') {
    formatted = targetValue.toFixed(precision);
  } else {
    formatted = targetValue.toSignificantDigits(precision).toString();
  }
  formatted = trimTrailingZeros(formatted);
  return `${formatted} ${targetSymbol}`;
};
