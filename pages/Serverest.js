import { expect } from '@playwright/test';

/* =========================
   LOGIN
========================= */
class Login {
  /**
   * @param {import('@playwright/test').Page} page
   */
   constructor(page) {
    this.page = page;
    this.inputEmail = page.getByPlaceholder(/email/i);
    this.inputSenha = page.getByPlaceholder(/senha/i);
    this.btnLogin = page.getByRole('button', { name: /entrar/i });
    this.alertError = page.getByRole('alert');
    this.menuAdmin = page.getByText(/bem vindo/i); // elemento da home
  }

  async goto() {
    await this.page.goto('/login');
  }

  async Fazer_Login(email, senha) {
    await this.inputEmail.fill(email);
    await this.inputSenha.fill(senha);
    await this.btnLogin.click();
  }

  async Verif_Login_Sucesso() {
    await expect(this.page).not.toHaveURL(/\/login/);
    await expect(this.page).toHaveURL(/\/admin\/home/);
  }

  async Verif_Login_Erro(msg) {
    await expect(this.alertError).toBeVisible();
    await expect(this.alertError).toHaveText(msg);
  }
}

/* =========================
   CADASTRO
========================= */
class Cadastro {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.btnCadastrese = this.page.getByText(/cadastre-se/i);
    this.inputNome = this.page.getByPlaceholder(/nome/i);
    this.inputEmail = this.page.getByPlaceholder(/email/i);
    this.inputSenha = this.page.getByPlaceholder(/senha/i);
    this.adm = this.page.getByLabel(/cadastrar como administrador\?/i);
    this.btnCadastrar = this.page.getByRole('button', { name: /cadastrar/i });
    this.alertError = this.page.getByRole('alert');
  }

  async Abrir_Tela_Cadastro() {
    await this.btnCadastrese.click();
    await expect(this.inputNome).toBeVisible({ timeout: 5000 });
  }

  async Fazer_Cadastro(nome, email, senha, admin = true) {
    await this.inputNome.fill(nome);
    await this.inputEmail.fill(email);
    await this.inputSenha.fill(senha);

    if (admin) {
      await this.adm.check();
    }

    await this.btnCadastrar.click();
  }

  async Verif_Cadastro_Com_Sucesso() {
    await expect(this.page).toHaveURL(/cadastrarusuarios/);
  }

  async Verif_Msg_Erro(msgEsperada) {
    await expect(this.alertError).toBeVisible();
    await expect(this.alertError).toHaveText(msgEsperada);
  }
}

/* =========================
   USUÁRIO
========================= */
class Usuario {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.listarUsuariosBtn = this.page.getByTestId('listarUsuarios');
    this.emailUsuario = this.page.getByText(/@/);
    this.alertError = this.page.getByRole('alert');
  }

  async Listar_Usuarios() {
    await this.listarUsuariosBtn.click();
    await expect(this.emailUsuario.first()).toBeVisible({ timeout: 5000 });
  }
}

module.exports = {
  Login,
  Cadastro,
  Usuario
};
