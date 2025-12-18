import { expect } from '@playwright/test';

 class Login {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Seletor para o campo de email e senha (via regex)
    this.inputEmail = this.page.getByPlaceholder(/email/i);
    this.inputSenha = this.page.getByPlaceholder(/senha/i);
    this.btnLogin = this.page.getByRole('button', { name: 'Entrar' });
    this.alertError = this.page.getByRole('alert');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async Fazer_Login(email, senha) {
    await this.inputEmail.fill(email);
    await this.inputSenha.fill(senha);
    await this.btnLogin.click();
  }

  async Verif_Msg_Erro(msgEsperada) {
    await expect(this.alertError).toBeVisible();
    await expect(this.alertError).toHaveText(msgEsperada);
  }

  async Verif_Pag_Login() {
    await expect(this.page).toHaveURL(/\/login/);
  }
}
 class Cadastro {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Seletor para o campo de email e senha (via regex)
    this.inputNome = this.page.getByPlaceholder(/nome/i);
    this.inputEmail = this.page.getByPlaceholder(/email/i);
    this.inputSenha = this.page.getByPlaceholder(/senha/i);
    this.btnCadastrar = this.page.getByRole('button', { name: /cadastrar/i });
    this.btnCadastrese = this.page.getByText(/cadastre-se/i);
    this.adm = this.page.getByLabel(/cadastrar como administrador\?/i);
    this.alertError = this.page.getByRole('alert');
  }
  async Cadastrar(){
    await this.btnCadastrese.click();
    await expect(this.inputNome).toBeVisible({ timeout: 5000 });
  }


  async Fazer_Cadastro(nome,email, senha) {
    await this.inputNome.fill(nome);
    await this.inputEmail.fill(email);
    await this.inputSenha.fill(senha);
    await this.adm.check();
    await this.btnCadastrar.click();
  }

  async Verif_Msg_Erro(msgEsperada) {
    await expect(this.alertError).toBeVisible();
    await expect(this.alertError).toHaveText(msgEsperada);
  }

  async Verif_Home() {
    await expect(this.page).toHaveURL('https://front.serverest.dev/admin/home');
  }
}
 class Usuario {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Seletor para o campo de email e senha (via regex)
    this.emailuser = page.getByText('qa@qa.io');
    this.List_User = page.getByTestId('listarUsuarios')
    this.alertError = this.page.getByRole('alert');
    
  }
  async Listar_Usuario(){
    await this.List_User.click();
    await expect(this.emailuser).toBeVisible({ timeout: 5000 });
  }

}
module.exports = {Login, Cadastro,Usuario};