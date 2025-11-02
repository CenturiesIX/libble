# Unit Convert

Unit Convert is a monorepo that bundles a deterministic conversion core, a React web UI, and a Node CLI. The project focuses on accuracy for challenging units such as temperature offsets, SI prefixes, and data magnitudes while remaining fully offline.

## Packages

- **@unit-convert/convert-core** – Pure TypeScript conversion engine with a unit registry, SI prefix generation, parsing, and formatting helpers powered by Decimal.js.
- **@unit-convert/app-web** – Vite + React single page app that consumes the core package, supports keyboard navigation, and stores user preferences locally.
- **@unit-convert/cli** – Command line interface built with Commander, sharing the same conversion logic.

## Quick start

```bash
pnpm install

# run unit tests
pnpm --filter @unit-convert/convert-core test
pnpm --filter @unit-convert/app-web test
pnpm --filter @unit-convert/cli test

# run Playwright E2E tests
pnpm --filter @unit-convert/app-web exec playwright test

# start the web app locally
pnpm --filter @unit-convert/app-web dev

# build all packages
pnpm build
```

## Core usage

```ts
import { convert, format } from '@unit-convert/convert-core';

const watts = convert('1.5e3', 'kW', 'W'); // 1500
const label = format(watts, 'W'); // "1.5 kW"
```

## Adding a new unit

1. Create a definition inside `packages/convert-core/src/units/<dimension>.ts` with a base factor and optional offset.
2. Export the array via `packages/convert-core/src/units/index.ts` so it is included in the registry.
3. Add a regression test under `packages/convert-core/test` that verifies round-trip accuracy and reference conversions.
4. If the unit supports SI prefixes, set `prefixes: 'si'` and the runtime generator will create prefixed variants.

## Keyboard and accessibility

The web app provides labelled form controls, logical tab order, and focus styles. Users can operate entirely via keyboard including the quick unit search fields and swap button.

## CLI examples

```bash
convert 42 km to mi
convert 70 F to C
convert 1 kWh to J --precision 6 --mode fixed
convert list categories
convert list units mass
```

## License

MIT
