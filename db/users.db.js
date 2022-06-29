const pool = require("../config/db.config");

const getAllUsersDb = async () => {
  const { rows: users, rowCount: nbOfUsers } = await pool.query(
    "SELECT * FROM users"
  );

  return { users, nbOfUsers };
};

const getUserDb = async (id) => {
  const { rows: user } = await pool.query(
    "SELECT * FROM users WHERE user_id = $1",
    [id]
  );

  return user[0];
};

module.exports = { getAllUsersDb, getUserDb };