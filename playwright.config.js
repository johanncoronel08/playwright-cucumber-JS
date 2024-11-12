const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: "./steps",
    use: {
        headless: false, // Cambiar a false si quieres ver el navegador durante las pruebas
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
        trace: 'on-first-retry',
    },
});