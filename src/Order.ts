import Buyer from "./Buyer";
import { ProductModel } from "./Product";

export interface DiscountModel {
  valid: boolean;
  percentage: number;
}

export default class Order {
  constructor(
    readonly buyer: Buyer,
    readonly products: ProductModel[],
    readonly discount?: DiscountModel
  ) {}

  getTotalValue() {
    if (!this.buyer.isDocumentValid()) {
      throw new Error("Invalid Document");
    }

    const fullValue = this.products.reduce(
      (total, product) => total + product.getProducePrice(),
      0
    );

    if (!this.discount?.valid) {
      return fullValue;
    }

    const discountedValue = (fullValue * this.discount.percentage) / 100;

    return fullValue - discountedValue;
  }
}
