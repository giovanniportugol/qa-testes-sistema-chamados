const { test, expect } = require('@playwright/test');

test.describe('Testes de Login - BugBank', () => {
  test('Login com campos vazios', async ({ page }) => {
    await page.goto('https://bugbank.netlify.app/');

    await page.getByRole('button', { name: 'Acessar' }).click();

    await expect(page.getByText('É campo obrigatório').first()).toBeVisible();
  });

  test('Login com senha inválida', async ({ page }) => {
    await page.goto('https://bugbank.netlify.app/');

    await page.locator('input[name="email"]').fill('giovanni.qa.teste@email.com');
    await page.locator('input[name="password"]').fill('SenhaErrada@123');

    await page.getByRole('button', { name: 'Acessar' }).click();

    await expect(page.getByText('Usuário ou senha inválido.')).toBeVisible();
  });
});
