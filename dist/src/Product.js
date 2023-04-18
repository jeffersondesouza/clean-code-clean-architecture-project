"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(description, price, quantity) {
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
    getDescription() {
        return this.description;
    }
    getPrice() {
        return this.price;
    }
    getQuantity() {
        return this.quantity;
    }
    getProducePrice() {
        return this.quantity * this.price;
    }
}
exports.default = Product;
