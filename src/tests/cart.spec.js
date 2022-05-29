const { expect } = require('@playwright/test');
var randomEmail = require('random-email');
require('dotenv').config();

const BasePage = require('../pages/base.page');
const AuthenticationPage = require('../pages/authentication.page');
const NavigationContainerPage = require('../pages/navigation-container.page');
const CreateAccountPage = require('../pages/create-account.page');
const CustomerAccountPage = require('../pages/customer-account.page');
const MyAccountMenuPage = require('../pages/my-account-menu.page');
const WomenNavigationPage = require('../pages/women-navigation-page');
const LayerCartPage = require('../pages/layer-cart.page');

describe('Cart Tests', () => {
    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();

        authenticationPage = new AuthenticationPage(page);
        basePage = new BasePage(page);
        navigationContainerPage = new NavigationContainerPage(page);
        createAccountPage = new CreateAccountPage(page);
        customerAccountPage = new CustomerAccountPage(page);
        myAccountMenuPage = new MyAccountMenuPage(page);
        womenNavigationPage = new WomenNavigationPage(page);
        layerCartPage = new LayerCartPage(page);
        await basePage.navigate('http://automationpractice.com/index.php');
        await navigationContainerPage.clickSignIn();
        await authenticationPage.signIn('test-gayari@gmail.com', 'test_password');
    });

    afterEach(async () => {
        await context.close();
    });

    it.only('Should add a product to the cart', async () => {
        await myAccountMenuPage.accessWomenSection();
        await expect(page.locator(myAccountMenuPage.shoppingCartQuantity)).toContainText('0');
        await womenNavigationPage.hoverProductImage(1);
        await womenNavigationPage.clickAddToCart(1);
        await expect(page.locator(layerCartPage.pageHeading)).toContainText(
            'Product successfully added to your shopping cart'
        );
        await layerCartPage.closeWindow();
        await expect(page.locator(myAccountMenuPage.shoppingCartQuantity)).toContainText('1');
    });
});
