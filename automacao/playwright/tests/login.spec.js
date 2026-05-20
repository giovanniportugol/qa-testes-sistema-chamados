const { test, expect } = require('@playwright/test');

test.describe('Testes de Login - BugBank', () => {
  test('Login com campos vazios', async ({ page }) => {
    await page.goto('https://bugbank.netlify.app/');

    await page.getByRole('button', { name: 'Acessar' }).click();

    await expect(page.getByText('É campo obrigatório').first()).toBeVisible();
  });
});
