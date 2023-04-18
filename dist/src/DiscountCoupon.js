"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DiscountCoupon {
    constructor(code, percentage, dueDate, currentDate) {
        this.code = code;
        this.percentage = percentage;
        this.dueDate = dueDate;
        this.currentDate = currentDate;
    }
    getCode() {
        return this.code;
    }
    getPercentage() {
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
        var _a;
        if (!this.code || ((_a = this.code) === null || _a === void 0 ? void 0 : _a.length) < 4) {
            return false;
        }
        return true;
    }
}
exports.default = DiscountCoupon;
