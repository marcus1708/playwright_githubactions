import { expect } from '@playwright/test';

 class Preenche {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Seletor para o campo de email e senha (via regex)

  }

  async goto() {
    await this.page.goto('file:///C:/Users/ADM/Desktop/playwright_githubactions/src/index.html');
    await this.page.waitForLoadState('load');
  } 


}

module.exports = {Preenche};