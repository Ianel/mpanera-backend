const pool = require("../config/db.config");

const getUserByTel = async (tel) => {
  const { rows: user } = await pool.query(
    "SELECT * FROM users WHERE phone_number = $1",
    [tel]
  );

  return user[0];
};

const createUserDb = async (tel, password) => {
  const { rows: user } = await pool.query(
    "INSERT INTO users(phone_number, password) VALUES($1, $2) RETURNING phone_number, user_id",
    [tel, password]
  );

  return user[0];
};

module.exports = {
  getUserByTel,
  createUserDb,
};
