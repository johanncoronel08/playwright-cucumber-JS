import { Browser, BrowserType, Page } from "@playwright/test";

const { Before, After, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser: Browser;
let URL;
let page: Page;



export function getPage(): Page {
    return page;
}

Before(async function () {
    /*const display = screen.getPrimaryDisplay();

    var width = display.bounds.width;
    var height = display.bounds.height;*/
    browser = await chromium.launch({
        channel: 'chrome',
        headless: false
    });
    page = await browser.newPage();
})


After(async function () {

    await browser.close();  // Cierra el navegador
});

