const { Pool, Client } = require("pg");

const connectWithPool = () => {
  const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  });

  pool.connect();

  return pool;
};

/* const connectWithClient = () => {
  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  });

  client.connect();

  client.on("connect", () => {
    console.log("Database connected");
  });

  return client;
};

const client = connectWithClient();
 */
const pool = connectWithPool();

module.exports = [pool];

// Database connection

/* async function poolDemo() {
    const pool = new Pool({
        host: "localhost",
        user: "postgres",
        password: "postgres",
        port: 5432,
        database: "mpanera",
    });
    const now = await pool.query("SELECT * FROM users;");
    await pool.end();

    return now;
} */

/* async function clientDemo() {
    const client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
    });
    client.connect();
    const now = await client.query("SELECT * FROM users;");
    await client.end();

    return now;
} */

/* (async () => {
   /*  const poolResult = await poolDemo();
    console.log(poolResult["rows"]); */
/* 
    const clientResult = await clientDemo();
    console.log({ clientResult });  
  })(); */

//module.exports = pool;
