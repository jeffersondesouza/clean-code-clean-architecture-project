export interface ProductModel {
  description: string;
  price: number;
  quantity: number;
  getProducePrice: () => number;
}

export default class Product implements ProductModel {
  constructor(
    readonly description: string,
    readonly price: number,
    readonly quantity: number
  ) {}

  public getDescription(): string {
    return this.description;
  }
  public getPrice(): number {
    return this.price;
  }
  public getQuantity(): number {
    return this.quantity;
  }
  public getProducePrice(): number {
    return this.quantity * this.price;
  }
}
