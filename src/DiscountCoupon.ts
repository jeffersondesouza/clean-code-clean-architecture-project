import Buyer from "./Buyer";
import { ProductModel } from "./Product";

export default class DiscountCoupon {
  constructor(
    readonly code: string,
    readonly percentage: number,
    readonly dueDate: Date,
    readonly currentDate: Date
  ) {}

  getCode(): string {
    return this.code;
  }

  getPercentage(): number {
    return this.percentage / 100;
  }

  isValid() {
    // TODO: refactor according to the next classes
    /* if (!this.code || this.code?.length < 4) {
      return false;
    }

    if (this.dueDate.getFullYear() < this.currentDate.getFullYear()) {
      return false;
    }

    // TODO: refactor according to the next classes
    if (this.dueDate.getFullYear() === this.currentDate.getFullYear()) {
      if (this.dueDate.getMonth() > this.currentDate.getMonth()) {
        return false;
      }


      return false;
    }


    if (this.currentDate.getDay() > this.dueDate.getMonth()) {
      return false;
    } */

    if (!this.code || this.code?.length < 4) {
      return false;
    }

    return true;
  }
}
