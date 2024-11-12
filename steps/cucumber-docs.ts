// @ts-check

import { expect } from "@playwright/test";
import { Given, When, Then } from '@cucumber/cucumber';

import { getPage } from '../config/setup'
import { Page } from 'playwright';





var page: Page = getPage();
Given("ingreso a la url {string}", async function (url) {

    await getPage().goto(url, { waitUntil: "load", timeout: 60000 });

})

When("valido que estoy en la página principal", async function () {
    const titulo = await getPage().locator("xpath=//h1[text()='Tools & techniques that elevate teams to greatness']")
    await expect(titulo).toBeVisible();

})

When("busco {string}", async function (docs) {
    const linkDocs = await getPage().locator("xpath=//a[text()='" + docs + "']")
    await expect(linkDocs).toBeVisible();
    await linkDocs.click();
    const linkApiDocs = await getPage().locator("xpath=//a[text()='API Docs']")
    await expect(linkApiDocs).toBeVisible();
    await linkApiDocs.click();
})

Then("valido que estoy en Docs", async function () {
    const h1ApiDocs = await getPage().locator("xpath=//h1[text()='API Automation']")
    await expect(h1ApiDocs).toBeVisible();

})

/*After(async function (scenario) {

    await browser.close();  // Cierra el navegador
});*/