const { expect } = require('@playwright/test');
var randomEmail = require('random-email');
const text = require('../../resources/text.js');
const testData = require('../../resources/test-data.json');

const BasePage = require('../pages/base.page');
const AuthenticationPage = require('../pages/authentication.page');
const NavigationContainerPage = require('../pages/navigation-container.page');
const CreateAccountPage = require('../pages/create-account.page');
const CustomerAccountPage = require('../pages/customer-account.page');

describe('Authentication Tests', () => {
    beforeEach(async () => {
        context = await browser.newContext();
        page = await context.newPage();

        authenticationPage = new AuthenticationPage(page);
        basePage = new BasePage(page);
        navigationContainerPage = new NavigationContainerPage(page);
        createAccountPage = new CreateAccountPage(page);
        customerAccountPage = new CustomerAccountPage(page);
        await basePage.navigate(testData.baseURL);
        await navigationContainerPage.clickSignIn();
    });

    afterEach(async () => {
        await context.close();
    });

    it('Should be able to create an account', async () => {
        await authenticationPage.enterCreateEmail(randomEmail({ domain: 'gmail.com' }));
        await authenticationPage.submitCreateEmail();
        await createAccountPage.selectGender('F');
        await createAccountPage.enterFirstname('firstaname');
        await createAccountPage.enterLastname('lastname');
        await createAccountPage.enterPassword('test_password');
        await createAccountPage.selectDayOfBirth('10');
        await createAccountPage.selectMonthOfBirth('5');
        await createAccountPage.selectYearOfBirth('1990');
        await createAccountPage.checkSignUpForNews();
        await createAccountPage.enterAddressFirstname('addressFirstname');
        await createAccountPage.enterAddressLastname('addressLastname');
        await createAccountPage.enterAddressCompany('test_company');
        await createAccountPage.enterAddrAddress1('addressAddress1');
        await createAccountPage.enterAddrCity('Huntsville');
        await createAccountPage.selectAddrCountry('United States');
        await createAccountPage.enterAddrPostcode('35004');
        await createAccountPage.selectAddrCountry('United States');
        await createAccountPage.enterAddrMobilePhone('202-555-0177');
        await createAccountPage.selectAddrState('Texas');
        await createAccountPage.clickSubmitAccount();
        await expect(page.locator(customerAccountPage.pageHeading)).toContainText('My account');
        await expect(page.locator(customerAccountPage.info)).toContainText(text.text_WelcomeMessage);
    });
    it('Should be able to login with correct credentials', async () => {
        await authenticationPage.enterRegisteredEmail(testData.testEmail);
        await authenticationPage.enterRegisteredPassword(testData.testPassword);
        await authenticationPage.clickSignIn();
        await expect(page.locator(customerAccountPage.pageHeading)).toContainText('My account');
        await expect(page.locator(customerAccountPage.info)).toContainText(text.text_WelcomeMessage);
    });
});
