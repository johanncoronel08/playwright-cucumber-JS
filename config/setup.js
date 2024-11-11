const { Before, After, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let URL;
let page



function getPage() {
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
    const context = await browser.newContext({
        viewport: { width: 1500, height: 600 } // Esto permite el viewport completo de la ventana del navegador
    });
    page = await browser.newPage();
})


After(async function (scenario) {

    await browser.close();  // Cierra el navegador
});

module.exports = { getPage }