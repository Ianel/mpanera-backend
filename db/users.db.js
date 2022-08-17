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

const updateUserDb = async (
  id,
  {
    firstname,
    lastname,
    email,
    phone_number,
    city,
    country,
    postal_code,
    region,
    gender,
    birthdate,
    adress,
    facebook_name,
    profile_avatar,
    about,
  }
) => {
  const { rows: user } = await pool.query(
    "UPDATE users SET firstname = $1, lastname = $2, email = $3, phone_number = $4, city = $5, country = $6, postal_code = $7, region = $8, gender = $9, birthdate = $10, adress = $11, facebook_name = $12, profile_avatar = $13, about = $14 WHERE user_id = $15;",
    [
      firstname,
      lastname,
      email,
      phone_number,
      city,
      country,
      postal_code,
      region,
      gender,
      birthdate,
      adress,
      facebook_name,
      profile_avatar,
      about,
      id,
    ]
  );

  return user[0];
};

module.exports = { getAllUsersDb, getUserDb, updateUserDb };
