const BasePage = require('./base.page');

class LayerCartPage extends BasePage {
    constructor(page) {
        super(page);

        this.pageHeading = '.layer_cart_product h2';
        this.closeWindowButton = '.cross';
    }

    async closeWindow() {
        await this.page.click(this.closeWindowButton);
    }
}
module.exports = LayerCartPage;
