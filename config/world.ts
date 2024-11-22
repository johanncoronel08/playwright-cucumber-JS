import { World } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "@playwright/test";
import { CucumberPage } from "../pages/CucumberPage";

export default class extends World {
    page!: Page
    browser: Browser | undefined
    cucumberPage!: CucumberPage

    constructor(options: any) {
        super(options);
        this.browser = undefined;
    }

    setPagesObjects() {
        if (this.page) {
            this.cucumberPage = new CucumberPage(this.page);
        } else {
            throw new Error("Page is undefined when setting up Page Objects.");
        }
    }
    async init() {
        this.browser = await chromium.launch({
            channel: 'chrome',
            headless: false
        });
        this.page = await this.browser.newPage();
    }
}
