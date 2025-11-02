# Contributing

Thanks for your interest in improving Unit Convert! The project is structured as a pnpm workspace with three packages. Follow these steps to get started.

## Environment setup

1. Install [pnpm](https://pnpm.io/installation).
2. Clone the repository and run `pnpm install` from the root.
3. Use `pnpm -r test` or the per-package commands listed in the README to ensure everything passes before pushing changes.

## Coding standards

- TypeScript everywhere with `strict` enabled.
- Keep the conversion core free from side effects. All exported functions should remain pure and deterministic.
- Prefer exact rational factors expressed as strings when possible (e.g. `"0.45359237"`).
- When adding UI components, ensure they are keyboard accessible and include appropriate labels or ARIA attributes.
- Run `pnpm format` to apply Prettier and `pnpm lint` to verify ESLint rules.

## Adding units

1. Update or create the dimension file under `packages/convert-core/src/units`.
2. Provide regression tests inside `packages/convert-core/test` for any new or tricky units.
3. Document new units in the README or dedicated docs if they introduce novel behaviour.

## Testing

- `pnpm --filter @unit-convert/convert-core test` – runs core unit tests.
- `pnpm --filter @unit-convert/app-web test` – runs UI component tests with Vitest.
- `pnpm --filter @unit-convert/app-web exec playwright test` – executes Playwright E2E tests.
- `pnpm --filter @unit-convert/cli test` – runs CLI integration tests.

Please include relevant test updates with your pull requests. Thanks for contributing!
