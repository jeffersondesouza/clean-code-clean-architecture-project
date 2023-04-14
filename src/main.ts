import pgp from "pg-promise";
import dotenv from "dotenv";
dotenv.config();

console.log("START");

const connection = pgp()(
  "postgres://postgres:duppoe@localhost:5432/cleanarchdb"
);
const query = connection.query("select * from products.product_transaction");
/* .then((res) => console.log(res)) */ console.log("END", process.env.DB_URI);
