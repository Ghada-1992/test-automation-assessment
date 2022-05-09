const { test, expect } = require('@playwright/test');

const BasePage = require('../pages/base.page');
const AuthenticationPage = require('../pages/authentication.page');
const NavigationContainerPage = require('../pages/navigation-container.page');

test.describe('Account Tests', () => {
    test.beforeEach(async ({ page }) => {
        authenticationPage = new AuthenticationPage(page);
        basePage = new BasePage(page);
        navigationContainerPage = new NavigationContainerPage(page);
        await basePage.navigate('http://automationpractice.com/index.php');
        await navigationContainerPage.clickSignIn();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    test('Should be able to create an account', async () => {
        await authenticationPage.enterCreateEmail('test-bitpanda@gmail.com');
        await authenticationPage.submitCreateEmail();
    });
});
