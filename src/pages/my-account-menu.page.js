const BasePage = require('./base.page');

class MyAccountMenuPage extends BasePage {
    constructor(page) {
        super(page);

        this.womenSubMenu = 'li a[title="Women"]';
        this.shoppingCart = '.shopping_cart';
        this.shoppingCartQuantity = this.shoppingCart + ' .ajax_cart_quantity';
    }

    async accessWomenSection() {
        await this.page.click(this.womenSubMenu);
    }
}
module.exports = MyAccountMenuPage;
