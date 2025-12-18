const {test} = require('@playwright/test');
const {Login,Cadastro,Usuario} = require('../pages/Serverest');

const email = 'qa@qa.io';
const senha = '123';

test.describe('Listar usuario',() =>{
    test('Lista usuario cadastr.', async ({page}) =>{
        const login = new Login(page);
        const usuario = new Usuario(page);
        const cadastro = new Cadastro(page);
        
        // 1. Acessar a pagina de Login
        await login.goto();
        await login.Fazer_Login(email, senha);
        await cadastro.Verif_Home();
        await usuario.Listar_Usuario();
    });
});