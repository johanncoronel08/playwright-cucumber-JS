import { setWorldConstructor, World } from "@cucumber/cucumber";
import CustomWorld from "./world";


const { Before, After, AfterAll, BeforeAll } = require('@cucumber/cucumber');

setWorldConstructor(CustomWorld)

//Hooks Cucumber

Before(async function (this: CustomWorld) {
    await this.init();
    this.setPagesObjects();

})


After(async function (this: CustomWorld) {

    await this.browser!.close();  // Cierra el navegador
});
