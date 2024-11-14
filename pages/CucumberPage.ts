import { expect, Locator, Page } from "@playwright/test";

export class CucumberPage {

    private page: Page;
    private h1_titulo: Locator;
    private link_api_docs: Locator;
    private h1_api_docs: Locator;

    constructor(page: Page) {
        this.page = page;
        this.h1_titulo = this.page.locator("xpath=//h1[text()='Tools & techniques that elevate teams to greatness']")
        this.link_api_docs = this.page.locator("xpath=//a[text()='API Docs']")
        this.h1_api_docs = this.page.locator("xpath=//h1[text()='API Automation']")

    }

    async validarTituloPaginaPrincipal() {

        await expect(this.h1_titulo).toBeVisible();
    }

    async buscoSeccionDocs(docs: string) {
        const linkDocs = await this.page.locator("xpath=//a[text()='" + docs + "']")
        await expect(linkDocs).toBeVisible();
        await linkDocs.click();
        await expect(this.link_api_docs).toBeVisible();
        await this.link_api_docs.click();
    }

    async validoQueEstoyEnPantallaDocs() {

        await expect(this.h1_api_docs).toBeVisible();
    }

}