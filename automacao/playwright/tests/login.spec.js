const { test, expect } = require('@playwright/test');

test.describe('Testes de Login - BugBank', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://bugbank.netlify.app/');
  });

  test('Deve exibir mensagem de obrigatoriedade ao tentar acessar com campos vazios', async ({ page }) => {
    await page.getByRole('button', { name: 'Acessar' }).click();

    await expect(page.getByText('É campo obrigatório').first()).toBeVisible();
  });

  test('Deve exibir mensagem de erro ao tentar acessar com senha inválida', async ({ page }) => {
    await page.locator('input[name="email"]').fill('giovanni.qa.teste@email.com');
    await page.locator('input[name="password"]').fill('SenhaErrada@123');

    await page.getByRole('button', { name: 'Acessar' }).click();

    await expect(page.getByText('Usuário ou senha inválido.')).toBeVisible();
  });

  test('Deve realizar login com sucesso com usuário válido', async ({ page }) => {
    await page.locator('input[name="email"]').fill('giovanni.qa.teste@email.com');
    await page.locator('input[name="password"]').fill('Teste@123');

    await page.getByRole('button', { name: 'Acessar' }).click();

    await expect(page.getByText('Bem vindo')).toBeVisible();
  });
});
