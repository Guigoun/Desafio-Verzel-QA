import { test, expect } from '@playwright/test';

test.describe('Suíte de Testes Automatizados de UI - Verzel Store', () => {

  test.beforeEach(async ({ page }) => {
    // Acede à página principal configurada no baseURL
    await page.goto('/');
  });

  // Cenário 1: Fluxo de compra E2E completo
  test('CT-UI-01: Realizar fluxo completo de compra com sucesso (E2E)', async ({ page }) => {
    // 1. Adicionar o primeiro produto disponível
    const btnAdicionar = page.getByRole('button', { name: /adicionar ao carrinho/i }).first();
    await btnAdicionar.click();

    // 2. Ir para o carrinho
    const linkCarrinho = page.getByRole('link', { name: /carrinho/i }).or(page.locator('a[href*="carrinho"]'));
    await linkCarrinho.click();

    // 3. Validar se o produto está listado no carrinho
    await expect(page).toHaveURL(/carrinho/i);
    await expect(page.locator('body')).not.toContainText('Seu carrinho está vazio');

    // 4. Prosseguir para a finalização
    const btnFinalizar = page.getByRole('button', { name: /finalizar compra/i }).or(page.getByRole('link', { name: /finalizar compra/i }));
    await btnFinalizar.click();

    // 5. Preencher dados do comprador
    await page.getByLabel(/nome completo/i).or(page.getByPlaceholder(/nome/i)).fill('Guilherme Licati');
    await page.getByLabel(/e-mail/i).or(page.getByPlaceholder(/e-mail/i)).fill('guilherme.qa@exemplo.com');
    await page.getByLabel(/cep/i).or(page.getByPlaceholder(/cep/i)).fill('72870-000');

    // 6. Submeter pedido
    await page.getByRole('button', { name: /confirmar pedido/i }).click();

    // 7. Validar ecrã de sucesso
    await expect(page.getByText(/pedido confirmado/i)).toBeVisible();
    await expect(page.locator('body')).toContainText(/VZ-/);
  });

  // Cenário 2: Aplicação e recálculo do cupom de desconto
  test('CT-UI-02: Aplicar cupom de desconto no carrinho e validar exibição', async ({ page }) => {
    await page.getByRole('button', { name: /adicionar ao carrinho/i }).first().click();
    await page.getByRole('link', { name: /carrinho/i }).or(page.locator('a[href*="carrinho"]')).click();

    const inputCupom = page.getByPlaceholder(/cupom/i).or(page.getByLabel(/cupom/i));
    await inputCupom.fill('BEMVINDO10');
    await page.getByRole('button', { name: /aplicar cupom/i }).click();

    await expect(page.getByText(/cupom bemvindo10 aplicado/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /remover cupom/i })).toBeVisible();
  });

  // Cenário 3: Validação de mensagens obrigatórias no formulário
  test('CT-UI-03: Validar impedimento de submissão sem dados no formulário', async ({ page }) => {
    await page.getByRole('button', { name: /adicionar ao carrinho/i }).first().click();
    await page.getByRole('link', { name: /carrinho/i }).or(page.locator('a[href*="carrinho"]')).click();
    await page.getByRole('button', { name: /finalizar compra/i }).or(page.getByRole('link', { name: /finalizar compra/i })).click();

    // Submeter diretamente em branco
    await page.getByRole('button', { name: /confirmar pedido/i }).click();

    await expect(page.getByText(/informe o nome completo/i)).toBeVisible();
    await expect(page.getByText(/informe o e-mail/i)).toBeVisible();
    await expect(page.getByText(/informe o cep/i)).toBeVisible();
  });

});