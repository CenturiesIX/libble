import { describe, it, expect } from 'vitest';
import { createProgram } from '../src/cli';

describe('convert CLI', () => {
  it('converts kg to lb', async () => {
    const program = createProgram();
    const output: string[] = [];
    const originalLog = console.log;
    console.log = (message?: unknown) => {
      if (typeof message === 'string') {
        output.push(message);
      }
    };
    try {
      await program.parseAsync(['node', 'convert', 'convert', '15', 'kg', 'lb']);
    } finally {
      console.log = originalLog;
    }
    expect(output[0]).toMatch(/lb$/);
  });

  it('lists categories', async () => {
    const program = createProgram();
    const output: string[] = [];
    const originalLog = console.log;
    console.log = (message?: unknown) => {
      if (typeof message === 'string') {
        output.push(message);
      }
    };
    try {
      await program.parseAsync(['node', 'convert', 'list', 'categories']);
    } finally {
      console.log = originalLog;
    }
    expect(output).toContain('length');
  });
});
