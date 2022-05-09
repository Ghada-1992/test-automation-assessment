// import { PlaywrightTestConfig } from '@playwright/test';
const { devices } = require('@playwright/test');

const config = {
    timeout: 60000,
    use: {
        headless: false,
        baseURL: 'http://automationpractice.com/index.php',
        viewport: { width: 1280, height: 720 },
        launchOptions: {
            slowMo: 500,
        },
        video: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'Desktop Chromium',
            use: {
                browserName: 'chromium',
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 1280, height: 720 },
            },
        },
    ],
};
module.exports = config;
