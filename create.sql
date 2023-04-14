drop table products.product_transaction;

create table products.product_transaction (
  product_number text,
  description text,
  quantity numeric,
  value numeric,
  off_value numeric,
  total_value numeric,
  buyer_document text
);

insert into
  products.product_transaction (product_number, description, quantity, value, off_value, total_value, buyer_document)
values
  (
    '1234',
    'Computador dell',
    3,
    1000,
    100,
    2900,
    '53368887025'
  );

insert into
  products.product_transaction (product_number, description, quantity, value, off_value, total_value, buyer_document)
values
  (
    '1235',
    'Mouse',
    1,
    500,
    0,
    500,
    '53368887025'
  );
