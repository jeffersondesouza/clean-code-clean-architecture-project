"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Order_1 = __importDefault(require("./Order"));
const Buyer_1 = __importDefault(require("./Buyer"));
const Product_1 = __importDefault(require("./Product"));
const DiscountCoupon_1 = __importDefault(require("./DiscountCoupon"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const port = 3000;
/*
  ROTAS
    - [ ] Add order
    - [ ] Delete Order
*/
app.get("/", function (_req, res) {
    res.send("Well come to clean code ORDER API");
});
app.get("/orders", function (req, res) {
    const connection = (0, pg_promise_1.default)()(process.env.DB_URI || "");
    connection
        .query("select * from products.product_transaction")
        .then((data) => res.json(data))
        .then(() => res.sendStatus(200));
});
app.get("/orders/:id", function (req, res) {
    const connection = (0, pg_promise_1.default)()(process.env.DB_URI || "");
    connection
        .query(`select * from products.product_transaction where id = $1`, [
        req.params.id,
    ])
        .then((data) => res.json(data))
        .then(() => res.sendStatus(200));
});
app.post("/orders", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = (0, pg_promise_1.default)()(process.env.DB_URI || "");
        const { products, buyer, discountCupon } = req.body;
        const coupons = yield connection.query(`select * from products.discount_coupon where code = $1`, [discountCupon]);
        const coupon = coupons === null || coupons === void 0 ? void 0 : coupons[0];
        const order = new Order_1.default(new Buyer_1.default(buyer), products.map((product) => new Product_1.default(product.description, product.price, product.quantity)), new DiscountCoupon_1.default(coupon === null || coupon === void 0 ? void 0 : coupon.code, coupon === null || coupon === void 0 ? void 0 : coupon.percentage, new Date(coupon === null || coupon === void 0 ? void 0 : coupon.dueDate), new Date()));
        yield connection.query(`insert into products.product_transaction(
        products,
        full_price,
        discount,
        final_price,
        buyer
      ) values(
        \${body.products},
        \${body.full_price},
        \${body.final_price},
        \${body.final_price},
        \${body.buyer_document},
      )`, {
            body: order.getSaveBody(),
        });
        res.sendStatus(200);
    });
});
app.put("/orders/:id", function (req, res) {
    res.send("user " + JSON.stringify(req.params.id));
});
app.delete("/orders/:id", function (req, res) {
    res.send("user " + JSON.stringify(req.params.id));
});
app.get("/discount-coupon", function (req, res) {
    const connection = (0, pg_promise_1.default)()(process.env.DB_URI || "");
    connection
        .query("select * from products.discount_coupon")
        .then((data) => res.json(data))
        .then(() => res.sendStatus(200));
});
app.get("/discount-coupon/:code", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = (0, pg_promise_1.default)()(process.env.DB_URI || "");
        const query = yield connection.query(`select * from products.discount_coupon where code = $1`, [req.params.code]);
        res.json(query);
        res.sendStatus(200);
    });
});
app.listen(3000, () => {
    console.log("App runnnig");
});
