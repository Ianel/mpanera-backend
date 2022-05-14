const { Pool, Client } = require('pg');

const connectWithPool = () => {
    const pool = new Pool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
    });

    pool.on("connect", () => {
        console.log("Database connected");
    });

    return pool;
}

const connectWithClient = () => {
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
}

module.exports = [connectWithPool(), connectWithClient() ];

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