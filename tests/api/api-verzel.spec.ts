import { test, expect } from '@playwright/test';

test.describe('Suíte de Testes Automatizados de API - Verzel Store', () => {

  // CT-API-01: Listagem de produtos (Catálogo)
  test('CT-API-01: [GET /api/produtos] Deve listar produtos com sucesso e validar estrutura', async ({ request }) => {
    const response = await request.get('/api/produtos');
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThan(0);

    // Validação de contrato do primeiro elemento retornado
    const primeiroItem = body[0];
    expect(primeiroItem).toHaveProperty('id');
    expect(primeiroItem).toHaveProperty('nome');
    expect(primeiroItem).toHaveProperty('preco');
    expect(typeof primeiroItem.preco).toBe('number');
  });

  // CT-API-02: Criação de pedido com sucesso (Happy Path)
  test('CT-API-02: [POST /api/pedidos] Deve criar um pedido com sucesso gerando número VZ', async ({ request }) => {
    const payloadValido = {
      cliente: {
        nome: 'Guilherme Licati',
        email: 'guilherme.api@teste.com',
        cep: '72870-000'
      },
      itens: [
        {
          produtoId: 'P001',
          quantidade: 1
        }
      ],
      cupom: 'BEMVINDO10'
    };

    const response = await request.post('/api/pedidos', {
      data: payloadValido
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('numero');
    expect(body.numero).toMatch(/^VZ-\d{6}$/);
    expect(body.total).toBeGreaterThan(0);
  });

  // CT-API-03: Validação de payload inválido (Negativo)
  test('CT-API-03: [POST /api/pedidos] Deve rejeitar criação de pedido sem dados obrigatórios', async ({ request }) => {
    const payloadInvalido = {
      cliente: {},
      itens: [
        {
          produtoId: 'P001',
          quantidade: 1
        }
      ]
    };

    const response = await request.post('/api/pedidos', {
      data: payloadInvalido
    });

    expect(response.status()).toBe(422);
    const body = await response.json();
    expect(body.erro.codigo).toBe('DADOS_INVALIDOS');
    expect(body.erro.mensagem).toContain('Existem campos inválidos no pedido.');
  });

});