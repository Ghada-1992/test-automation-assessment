const BasePage = require('./base.page');

class CreateAccountPage extends BasePage {
    constructor(page) {
        super(page);

        this.genderM = '#id_gender1';
        this.genderF = '#id_gender2';
        this.firstnameField = '#customer_firstname';
        this.lastnameField = '#customer_lastname';
        this.emailField = '#email';
        this.passwordField = '#passwd';
        this.uniformDays = '#uniform-days';
        this.dobDays = '#days';
        this.uniformMonths = '#uniform-months';
        this.dobMonths = '#months';
        this.uniformYears = '#uniform-years';
        this.dobYears = '#years';
        this.signForNewsLetter = '#uniform-newsletter';
        this.receiveOffers = '#uniform-option';

        this.addressFirstname = '#firstname';
        this.addressLastname = '#lastname';
        this.addressCompany = '#company';
        this.addressAddress1 = '#address1';
        this.addressAddress2 = '#address2';
        this.addressCity = '#city';
        this.uniformIdState = '#uniform-id_state';
        this.addressState = '#id_state';
        this.addressPostcode = '#postcode';
        this.uniformIdCountry = '#uniform-id_country';
        this.addressCountry = '#id_country';
        this.addressOther = '#other';
        this.addressHomePhone = '#phone';
        this.addressMobilePhone = '#phone_mobile';
        this.addressAlias = '#alias';

        this.submitAccount = '#submitAccount';
    }

    async selectGender(gender) {
        if (gender == 'F') {
            await this.page.click(this.genderF);
        } else if (gender == 'M') {
            await this.page.click(this.genderF);
        }
    }

    async enterFirstname(firstname) {
        await this.page.fill(this.firstnameField, firstname);
    }

    async enterLastname(lastname) {
        await this.page.fill(this.lastnameField, lastname);
    }

    async enterEmail(email) {
        await this.page.fill(this.emailField, email);
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordField, password);
    }

    async selectDayOfBirth(dobDays) {
        await page.click(this.uniformDays);
        await page.selectOption(dropdown, { label: dobDays });
    }

    async selectMonthOfBirth(dobMonths) {
        await page.click(this.uniformMonths);
        await page.selectOption(dropdown, { label: dobMonths });
    }

    async selectYearOfBirth(dobYears) {
        await page.click(this.uniformYears);
        await page.selectOption(dropdown, { label: dobYears });
    }

    async checkSignForNews() {
        await this.page.check(this.signForNewsLetter);
    }

    async uncheckSignForNews() {
        await this.page.uncheck(this.signForNewsLetter);
    }

    async checkReceiveOffers() {
        await this.page.check(this.receiveOffers);
    }

    async uncheckReceiveOffers() {
        await this.page.uncheck(this.receiveOffers);
    }

    async enterAddressFirstname(addressFirstname) {
        await this.page.fill(this.addressFirstname, addressFirstname);
    }

    async enterAddressLastname(addressLastname) {
        await this.page.fill(this.addressFirstname, addressLastname);
    }

    async enterAddressLastname(addressCompany) {
        await this.page.fill(this.addressCompany, addressCompany);
    }

    async enterAddrAddress1(addressAddress1) {
        await this.page.fill(this.addressAddress1, addressAddress1);
    }

    async enterAddrAddress2(addressAddress2) {
        await this.page.fill(this.addressAddress2, addressAddress2);
    }

    async enterAddrCity(addressCity) {
        await this.page.fill(this.addressCity, addressCity);
    }

    async enterAddrState(addressState) {
        await this.page.fill(this.addressState, addressState);
    }

    async enterAddrPostcode(addressPostcode) {
        await this.page.fill(this.addressPostcode, addressPostcode);
    }

    async enterAddrCountry(addressCountry) {
        await this.page.fill(this.addressCountry, addressCountry);
    }

    async enterAddrOther(addressOther) {
        await this.page.fill(this.addressCountry, addressOther);
    }

    async enterAddrHomePhone(addressHomePhone) {
        await this.page.fill(this.addressHomePhone, addressHomePhone);
    }

    async enterAddrMobilePhone(addressMobilePhone) {
        await this.page.fill(this.addressMobilePhone, addressMobilePhone);
    }

    async enterAddrAlias(addressAlias) {
        await this.page.fill(this.addressAlias, addressAlias);
    }

    async clickSubmitAccount() {
        await this.page.click(this.submitAccount);
    }
}
module.exports = CreateAccountPage;