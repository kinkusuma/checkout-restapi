/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable('order_item', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    price: {
      type: 'INT',
      notNull: true,
    },
    quantity: {
      type: 'INT',
      notNull: true,
    },
    total_price: {
      type: 'INT',
      notNull: true,
    },
    order_id: {
      type: 'TEXT',
      notNull: true,
    }
  });
};

exports.down = pgm => {
  pgm.dropTable('order_item')
};
