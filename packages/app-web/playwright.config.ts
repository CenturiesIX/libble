import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',
  timeout: 60000,
  webServer: {
    command: 'pnpm exec vite --host 0.0.0.0 --port 4173',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe'
  },
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'on-first-retry'
  }
});
