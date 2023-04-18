"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateCPF_1 = __importDefault(require("./validateCPF"));
class Buyer {
    constructor(document) {
        this.document = document;
    }
    getDocument() {
        return this.document;
    }
    isDocumentValid() {
        return (0, validateCPF_1.default)(this.document);
    }
}
exports.default = Buyer;
