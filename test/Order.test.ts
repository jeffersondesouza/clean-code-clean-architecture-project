import Buyer from "../src/Buyer";
import Order from "../src/Order";
import Product from "../src/Product";

describe("test main Order", () => {
  const buyer = new Buyer('12853067084');
  const product1 = new Product("Product 1", 100, 2);
  const product2 = new Product("Product 2", 300, 2);
  const product3 = new Product("Product 3", 200, 1);

  it("should create an order with 3 products (with description, price and quantity) and calculate the total value", () => {
    const newOrder = new Order(buyer, [product1, product2, product3]);
    expect(newOrder.getTotalValue()).toBe(1000);
  });

  it("should create an order with 3 products, associate a discount coupon and calculate the total (percentage of the total order)", () => {
    const discount = {
      valid: true,
      percentage: 30,
    };
    const newOrder = new Order(buyer, [product1, product2, product3], discount);

    expect(newOrder.getTotalValue()).toBe(700);
  });

  it("You must not create an order with an invalid cpf (throw some kind of error)", () => {
    const buyerInvalid = new Buyer('12545678900');
    const newOrder = new Order(buyerInvalid, [product1, product2, product3]);

    expect(() => newOrder.getTotalValue()).toThrowError("Invalid Document");
  });
});
