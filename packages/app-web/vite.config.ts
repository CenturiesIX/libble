import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@unit-convert/convert-core': resolve(rootDir, '../convert-core/src/index.ts')
    }
  },
  server: {
    host: '0.0.0.0'
  }
});
