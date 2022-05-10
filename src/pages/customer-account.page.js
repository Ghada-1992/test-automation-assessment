const BasePage = require('./base.page');

class CustomerAccountPage extends BasePage {
    constructor(page) {
        super(page);

        this.info = '.info-account';
    }
}
module.exports = CustomerAccountPage;
