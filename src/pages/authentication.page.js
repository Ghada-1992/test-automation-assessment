const BasePage = require('./base.page');

class AuthenticationPage extends BasePage {
    constructor(page) {
        super(page);

        this.createEmailField = '#email_create';
        this.submitCreateButton = '#SubmitCreate';

        this.registeredEmailField = '#email';
        this.registeredPasswordField = '#passwd';
        this.signInButton = '#SubmitLogin';
    }

    async enterCreateEmail(createEmail) {
        await this.page.fill(this.createEmailField, createEmail);
    }

    async submitCreateEmail() {
        await this.page.click(this.submitCreateButton);
    }

    async enterRegisteredEmail(registeredEmail) {
        await this.page.fill(this.registeredEmailField, registeredEmail);
    }

    async enterRegisteredPassword(registeredPassword) {
        await this.page.fill(this.registeredPasswordField, registeredPassword);
    }

    async clickSignIn() {
        await this.page.click(this.signInButton);
    }

    async signIn(registeredEmail, registeredPassword) {
        await this.enterRegisteredEmail(registeredEmail);
        await this.enterRegisteredPassword(registeredPassword);
    }
}
module.exports = AuthenticationPage;
