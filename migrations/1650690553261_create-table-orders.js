/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("orders", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
    },
    status: {
      type: "TEXT",
      notNull: true,
    },
    buyer_name: {
      type: "TEXT",
      notNull: true,
    },
    shipping_address: {
      type: "TEXT",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("orders");
};
