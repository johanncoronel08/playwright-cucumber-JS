// @ts-check

import { Given, When, Then } from '@cucumber/cucumber';



Given("ingreso a la url {string}", async function (url) {

    await this.page.goto(url, { waitUntil: "load", timeout: 60000 });

})

When("valido que estoy en la página principal", async function () {
    await this.cucumberPage.validarTituloPaginaPrincipal();

})

When("busco {string}", async function (docs) {
    await this.cucumberPage.buscoSeccionDocs(docs)
})

Then("valido que estoy en Docs", async function () {
    await this.cucumberPage.validoQueEstoyEnPantallaDocs();

})

/*After(async function (scenario) {

    await browser.close();  // Cierra el navegador
});*/