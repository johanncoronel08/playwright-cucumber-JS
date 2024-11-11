// @ts-check

const { expect } = require("@playwright/test");
const { chromium } = require('playwright');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

const { screen } = require('electron');
import { timeout } from '../playwright.config';
import { getPage } from './../config/setup'


/*Before(async function () {
    
    browser = await chromium.launch({
        channel: 'chrome',
        headless: false
    });
    const context = await browser.newContext({
        viewport: { width: 1500, height: 600 } // Esto permite el viewport completo de la ventana del navegador
    });
    page = await browser.newPage();
})*/






Given("ingreso a la url {string}", async function (url) {

    await getPage().goto(url, { waitUntil: "load", timeout: 60000 });
})

When("valido que estoy en la página principal", async function () {
    const h1CucumberTitle = await getPage().locator("xpath=//h1[text()='Tools & techniques that elevate teams to greatness']")
    await expect(h1CucumberTitle).toBeVisible();
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