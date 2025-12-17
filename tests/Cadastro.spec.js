const {test} = require('@playwright/test');
const {Login,Cadastro} = require('../pages/Serverest');

const nome = 'QA';
const email = 'qa@qa.io';
const senha = '123';

test.describe('Cadastro com Sucesso',() =>{
    test('Realiza Cadsatro com Sucesso', async ({page}) =>{
        const login = new Login(page);
        const cadastro = new Cadastro(page);
       
        // 1. Acessar a pagina de Login
        await login.goto();
        await cadastro.Cadastrar();
        // 2. Preencher os dados de cadastro
        await cadastro.Fazer_Cadastro(nome,email, senha);
        // 3. Verificar se o cadastro foi realizado com sucesso
        await cadastro.Verif_Home();
    });
});