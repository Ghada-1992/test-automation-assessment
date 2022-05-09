const BasePage = require('./base.page');

class NavigationContainerPage extends BasePage {
    constructor(page) {
        super(page);

        this.signIn = 'a[class="login"]';
    }

    async clickSignIn() {
        await this.page.click(this.signIn);
    }
}
module.exports = NavigationContainerPage;
