const { Pool } = require("pg");
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} = require("../constants");

const pool = new Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};