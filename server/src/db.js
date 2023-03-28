const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
  user: 'ccdgpnko',
  password: '4krpBUOBB2BGdgOKabKWYloEfrYulCWg',
  host: 'babar.db.elephantsql.com',
  port: 5432,
  database: 'ccdgpnko',
});

module.exports = pool;