const { test } = require('@playwright/test');
const { Login, Cadastro } = require('../pages/Serverest');

test.describe('Cadastro com Sucesso', () => {
  test('Realiza Cadastro com Sucesso', async ({ page }) => {
    const login = new Login(page);
    const cadastro = new Cadastro(page);

    const nome = 'QA Teste';
    const email = `qa${Date.now()}@qa.com`; // evita usuário duplicado
    const senha = '123456';

    // 1. Acessar a página de Login
    await login.goto();

    // 2. Abrir tela de cadastro
    await cadastro.Abrir_Tela_Cadastro();

    // 3. Preencher os dados de cadastro
    await cadastro.Fazer_Cadastro(nome, email, senha);

    // 4. Verificar se o cadastro foi realizado com sucesso
    await cadastro.Verif_Cadastro_Com_Sucesso();
  });
});
