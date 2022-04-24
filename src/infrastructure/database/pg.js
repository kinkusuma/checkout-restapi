const { Pool } = require("pg");
require("dotenv").config();
const pg = new Pool();

module.exports = pg;
