import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserType, Page } from "@playwright/test";
import CustomWorld from "./world";


const { Before, After, AfterAll, BeforeAll } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

setWorldConstructor(CustomWorld)


Before(async function (this: CustomWorld) {
    await this.init();
    this.setPagesObjects();

})


After(async function (this: CustomWorld) {

    await this.browser!.close();  // Cierra el navegador
});
