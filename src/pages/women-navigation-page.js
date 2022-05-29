const BasePage = require('./base.page');

class WomenNavigationPage extends BasePage {
    constructor(page) {
        super(page);

        this.addToCartButton = '(//a[@title="Add to cart"])';
        this.productImage = '(//div[@class="product-image-container"])'
    }

    async clickAddToCart(index) {
        await this.page.click(this.addToCartButton + '[' + index + ']');
    }
    
    async clickAddToCart(index) {
        await this.page.click(this.addToCartButton + '[' + index + ']');
    }
}
module.exports = WomenNavigationPage;
