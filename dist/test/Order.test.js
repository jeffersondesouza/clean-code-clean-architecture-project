"use strict";
describe("test main Order", () => {
    it("should create an order with 3 products (with description, price and quantity) and calculate the total value", () => {
        const newOrder = new Order();
        expect(newOrder.totalValue).toBe(1000);
    });
    it("should create an order with 3 products, associate a discount coupon and calculate the total (percentage of the total order)", () => { });
    it("You must not create an order with an invalid cpf (throw some kind of error)", () => { });
});
