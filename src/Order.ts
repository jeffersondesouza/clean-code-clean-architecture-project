import Buyer from "./Buyer";
import DiscountCoupon from "./DiscountCoupon";
import { ProductModel } from "./Product";

export default class Order {
  constructor(
    readonly buyer: Buyer,
    readonly products: ProductModel[],
    readonly discount?: DiscountCoupon
  ) {}

  getTotalPrice() {
    if (!this.buyer.isDocumentValid()) {
      throw new Error("Invalid Document");
    }

    const fullValue = this.products.reduce(
      (total, product) => total + product.getProducePrice(),
      0
    );

    return fullValue;
  }

  getFinalPrice() {
    if (!this.buyer.isDocumentValid()) {
      throw new Error("Invalid Document");
    }

    const fullValue = this.getTotalPrice();

    if (!this.discount?.isValid()) {
      return fullValue;
    }

    const discountedValue = fullValue * this.discount.getPercentage();

    return fullValue - discountedValue;
  }

  getSaveBody() {
    return {
      products: JSON.stringify(this.products),
      discount_coupon: this.discount?.getCode(),
      full_price: this.getTotalPrice(),
      final_price: this.getFinalPrice(),
      buyer_document: this.buyer.getDocument(),
    };
  }
}
