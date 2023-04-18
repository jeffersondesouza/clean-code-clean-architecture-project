"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Buyer_1 = __importDefault(require("../src/Buyer"));
const DiscountCoupon_1 = __importDefault(require("../src/DiscountCoupon"));
const Order_1 = __importDefault(require("../src/Order"));
const Product_1 = __importDefault(require("../src/Product"));
describe("test main Order", () => {
    const buyer = new Buyer_1.default("12853067084");
    const product1 = new Product_1.default("Product 1", 100, 2);
    const product2 = new Product_1.default("Product 2", 300, 2);
    const product3 = new Product_1.default("Product 3", 200, 1);
    it("should create an order with 3 products (with description, price and quantity) and calculate the total value", () => {
        const newOrder = new Order_1.default(buyer, [product1, product2, product3]);
        expect(newOrder.getFinalPrice()).toBe(1000);
    });
    it("should create an order with 3 products, associate a discount coupon and calculate the total (percentage of the total order)", () => {
        const discount = new DiscountCoupon_1.default("qwer", 30, new Date("2023-11-01T13:00:00.000Z"), new Date());
        const newOrder = new Order_1.default(buyer, [product1, product2, product3], discount);
        expect(newOrder.getFinalPrice()).toBe(700);
    });
    it("You must not create an order with an invalid cpf (throw some kind of error)", () => {
        const buyerInvalid = new Buyer_1.default("12545678900");
        const newOrder = new Order_1.default(buyerInvalid, [product1, product2, product3]);
        expect(() => newOrder.getFinalPrice()).toThrowError("Invalid Document");
    });
});
