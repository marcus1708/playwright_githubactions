const { test } = require('@playwright/test');
const { Login, Usuario } = require('../pages/Serverest');

const email = 'qa@qa.io';
const senha = '123';

test.describe('Listar usuario', () => {
  test('Lista usuario cadastr.', async ({ page }) => {
    const login = new Login(page);
    const usuario = new Usuario(page);

    // 1. Acessar a página de Login
    await login.goto();

    // 2. Realizar login
    await login.Fazer_Login(email, senha);

    // 3. Validar que está na Home
    await login.Verif_Home();

    // 4. Listar usuários
    await usuario.Listar_Usuario();
  });
});
