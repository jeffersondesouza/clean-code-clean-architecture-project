"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(buyer, products, discount) {
        this.buyer = buyer;
        this.products = products;
        this.discount = discount;
    }
    getTotalPrice() {
        if (!this.buyer.isDocumentValid()) {
            throw new Error("Invalid Document");
        }
        const fullValue = this.products.reduce((total, product) => total + product.getProducePrice(), 0);
        return fullValue;
    }
    getFinalPrice() {
        var _a;
        if (!this.buyer.isDocumentValid()) {
            throw new Error("Invalid Document");
        }
        const fullValue = this.getTotalPrice();
        if (!((_a = this.discount) === null || _a === void 0 ? void 0 : _a.isValid())) {
            return fullValue;
        }
        const discountedValue = fullValue * this.discount.getPercentage();
        return fullValue - discountedValue;
    }
    getSaveBody() {
        var _a;
        return {
            products: JSON.stringify(this.products),
            discount_coupon: (_a = this.discount) === null || _a === void 0 ? void 0 : _a.getCode(),
            full_price: this.getTotalPrice(),
            final_price: this.getFinalPrice(),
            buyer_document: this.buyer.getDocument(),
        };
    }
}
exports.default = Order;
