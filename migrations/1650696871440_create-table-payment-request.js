/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('payment_request', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    status: {
      type: 'TEXT',
      notNull: true,
    },
    order_id: {
      type: 'TEXT',
      notNull: true,
    },
    payment_method: {
      type: 'TEXT',
      notNull: true,
    },
    price: {
      type: 'INT',
      notNull: true,
    },
  });
};

exports.down = pgm => {
  pgm.dropTable('payment_request')
};
