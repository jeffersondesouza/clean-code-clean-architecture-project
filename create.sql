drop table products.product_transaction;

drop table products.discount_coupon;

create table products.product_transaction (
  id serial,
  products text,
  full_price numeric,
  discount_coupon numeric,
  final_price numeric,
  buyer_document text
);

create table products.discount_coupon (
  id serial,
  code text,
  percentage numeric,
  due timestamp
);

insert into
  products.product_transaction (
    products,
    full_price,
    discount_coupon,
    final_price,
    buyer_document
  )
values
  (
    '[{name: "pc", quantity: 2}, {name: "mouse", quantity: 1}]',
    1000,
    20,
    8000,
    '00063969092'
  );

insert into
  products.product_transaction (
    products,
    full_price,
    discount_coupon,
    final_price,
    buyer_document
  )
values
  (
    '[{name: "pc", quantity: 2}, {name: "mouse", quantity: 1}]',
    1000,
    20,
    8000,
    '00063969092'
  );

insert into
  products.discount_coupon (code, percentage, due)
values
  ('qwer', 50, '2023-11-01T10:00:00');

insert into
  products.discount_coupon (code, percentage, due)
values
  ('rewq', 10, '2023-07-01T10:00:00');

insert into
  products.discount_coupon (code, percentage, due)
values
  ('ivld', 10, '2023-01-01T10:00:00');