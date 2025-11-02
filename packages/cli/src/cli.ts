import { Command } from 'commander';
import {
  convert,
  format,
  listCategories,
  listUnits,
  parseQuantity,
  type ConvertOptions
} from '@unit-convert/convert-core';

const parseOptions = (options: { precision?: string; mode?: string }): ConvertOptions => {
  const parsed: ConvertOptions = {};
  if (options.precision !== undefined) {
    parsed.precision = Number(options.precision);
  }
  if (options.mode === 'fixed' || options.mode === 'significant') {
    parsed.mode = options.mode;
  }
  return parsed;
};

export const createProgram = () => {
  const program = new Command();
  program
    .name('convert')
    .description('Command line unit converter powered by @unit-convert/convert-core')
    .version('0.1.0');

  program
    .command('convert')
    .argument('<value>', 'Value with optional unit (e.g. "15 kg")')
    .argument('[from]', 'From unit when not specified in value')
    .argument('[to]', 'Target unit')
    .option('-p, --precision <digits>', 'Precision for formatting')
    .option('-m, --mode <mode>', 'Precision mode (significant|fixed)')
    .description('Convert between units')
    .action((value: string, from?: string, to?: string, options?: { precision?: string; mode?: string }) => {
      let numeric = value;
      let fromUnit = from;
      let targetUnit = to;
      if (!targetUnit && !fromUnit) {
        const parsed = parseQuantity(value);
        numeric = String(parsed.value);
        fromUnit = parsed.unit;
        targetUnit = from;
      }
      if (!fromUnit || !targetUnit) {
        throw new Error('Both source and target units must be provided');
      }
      const convertOptions = parseOptions(options ?? {});
      const numericValue = Number(numeric);
      const result = convert(numericValue, fromUnit, targetUnit, convertOptions);
      const formatted = format(result, targetUnit, convertOptions);
      console.log(formatted);
    });

  program
    .command('list')
    .argument('<resource>', 'categories | units')
    .argument('[dimension]', 'Dimension to list units for')
    .description('List supported categories or units')
    .action((resource: string, dimension?: string) => {
      if (resource === 'categories') {
        listCategories().forEach((category) => console.log(category));
        return;
      }
      if (resource === 'units') {
        if (!dimension) {
          throw new Error('Provide a dimension for listing units');
        }
        listUnits(dimension as any).forEach((unit) => {
          console.log(`${unit.symbol}\t${unit.name}`);
        });
        return;
      }
      throw new Error('Unknown resource. Use categories or units.');
    });

  return program;
};

export const runCli = async () => {
  const program = createProgram();
  await program.parseAsync(process.argv);
};
