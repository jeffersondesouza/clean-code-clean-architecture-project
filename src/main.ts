import pgp from "pg-promise";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import Order from "./Order";
import Buyer from "./Buyer";
import Product, { ProductModel } from "./Product";
import DiscountCoupon from "./DiscountCoupon";

dotenv.config();
const app = express();
app.use(bodyParser.json());
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
  const connection = pgp()(process.env.DB_URI || "");
  connection
    .query("select * from products.product_transaction")
    .then((data) => res.json(data))
    .then(() => res.sendStatus(200));
});

app.get("/orders/:id", function (req, res) {
  const connection = pgp()(process.env.DB_URI || "");
  connection
    .query(`select * from products.product_transaction where id = $1`, [
      req.params.id,
    ])
    .then((data) => res.json(data))
    .then(() => res.sendStatus(200));
});

app.post("/orders", async function (req, res) {
  const connection = pgp()(process.env.DB_URI || "");

  const { products, buyer, discountCupon } = req.body;
  const coupons = await connection.query(
    `select * from products.discount_coupon where code = $1`,
    [discountCupon]
  );

  const coupon = coupons?.[0];

  const order = new Order(
    new Buyer(buyer),
    products.map(
      (product: ProductModel) =>
        new Product(product.description, product.price, product.quantity)
    ),
    new DiscountCoupon(
      coupon?.code,
      coupon?.percentage,
      new Date(coupon?.dueDate),
      new Date()
    )
  );

  await connection.query(
    `insert into products.product_transaction(
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
      )`,
    {
      body: order.getSaveBody(),
    }
  );

  res.sendStatus(200);
});

app.put("/orders/:id", function (req, res) {
  res.send("user " + JSON.stringify(req.params.id));
});

app.delete("/orders/:id", function (req, res) {
  res.send("user " + JSON.stringify(req.params.id));
});

app.get("/discount-coupon", function (req, res) {
  const connection = pgp()(process.env.DB_URI || "");
  connection
    .query("select * from products.discount_coupon")
    .then((data) => res.json(data))
    .then(() => res.sendStatus(200));
});

app.get("/discount-coupon/:code", async function (req, res) {
  const connection = pgp()(process.env.DB_URI || "");

  const query = await connection.query(
    `select * from products.discount_coupon where code = $1`,
    [req.params.code]
  );
  res.json(query);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("App runnnig");
});
