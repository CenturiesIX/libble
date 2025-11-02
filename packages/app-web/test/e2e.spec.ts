import { test, expect } from '@playwright/test';

test.describe('unit conversion app', () => {
  test('keyboard-only flow converts units', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Category').selectOption('mass');
    await page.keyboard.press('Tab');
    await page.keyboard.type('15');
    await page.keyboard.press('Tab');
    await page.keyboard.type('kg');
    await page.keyboard.press('Tab');
    await page.keyboard.type('lb');
    await expect(page.getByText(/33\.069/)).toBeVisible();
  });

  test('persists units in local storage', async ({ page, context }) => {
    await page.goto('/');
    await page.getByLabel('Category').selectOption('temperature');
    await page.getByLabel('From').fill('°C');
    await page.getByLabel('To').fill('°F');
    await page.reload();
    await expect(page.getByLabel('From')).toHaveValue('°C');
    await expect(page.getByLabel('To')).toHaveValue('°F');
    await context.clearCookies();
    await context.clearPermissions();
  });
});
