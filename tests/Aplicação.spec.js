const {test} = require('@playwright/test');
const {Preenche} = require('../pages/pages');

test.describe('Preenche',() =>{
    test('Acessa a aplicação', async ({page}) =>{
        const preenche = new Preenche(page);
       
        // 1. Acessar a pagina de Login
        await preenche.goto();
       
    });
});