const pool = require("../config/db.config");

const publishedOn = new Date(Date.now());

const createHouseDb = async ({
  area,
  label,
  city,
  postal_code,
  region,
  country,
  adress,
  rent_price,
  rooms_number,
  description,
  state,
  end_date,
  open_date,
  house_type_id,
  user_id,
}) => {
  const { rows: houses } = await pool.query(
    `INSERT INTO houses
        (area, label, city, postal_code, region,
        country, adress,rent_price, rooms_number, 
        description, state, end_date, open_date, 
        published_on, house_type_id, user_id) 
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING 
        area, label, city, postal_code, region,
        country, adress,rent_price, rooms_number, 
        description, state, end_date, open_date, 
        published_on, house_type_id, user_id
    `,
    [
      area,
      label,
      city,
      postal_code,
      region,
      country,
      adress,
      rent_price,
      rooms_number,
      description,
      state,
      end_date,
      open_date,
      publishedOn,
      house_type_id,
      user_id,
    ]
  );

  return houses[0];
};

const getHouseByIdDb = async (id) => {
  const { rows: house } = await pool.query(
    "SELECT * FROM houses WHERE house_id = $1",
    [id]
  );

  return house[0];
};

const getAllHousesDb = async () => {
  const { rows: houses, rowCount: nbOfHouses } = await pool.query(
    "SELECT * FROM houses"
  );

  return { houses, nbOfHouses };
};

const deleteHouseDb = async (id) => {
  const { rows: house } = await pool.query(
    `DELETE FROM houses WHERE house_id = $1 
    RETURNING 
        area, label, city, postal_code, region,
        country, adress,rent_price, rooms_number, 
        description, state, end_date, open_date, 
        published_on, house_type_id, user_id`,
    [id]
  );

  return house;
};

const updateHouseDb = async (
  id,
  {
    area,
    label,
    city,
    postal_code,
    region,
    country,
    adress,
    rent_price,
    rooms_number,
    description,
    state,
    end_date,
    open_date,
    house_type_id,
    user_id,
  }
) => {
  const { rows: house } = await pool.query(
    `UPDATE houses SET area = $1, label = $2, city = $3,
    postal_code = $4, region = $5, country = $6, adress = $7,
    rent_price = $8, rooms_number = $9, description = $10,
    state = $11, end_date = $12, open_date = $13, published_on = $14,
    house_type_id = $15, user_id = $16 WHERE house_id = $17 
    RETURNING 
        house_id, area, label, city, postal_code, region,
        country, adress,rent_price, rooms_number, 
        description, state, end_date, open_date, 
        published_on, house_type_id, user_id
    `,
    [
      area,
      label,
      city,
      postal_code,
      region,
      country,
      adress,
      rent_price,
      rooms_number,
      description,
      state,
      end_date,
      open_date,
      publishedOn,
      house_type_id,
      user_id,
      id,
    ]
  );

  return house;
};

module.exports = {
  createHouseDb,
  getHouseByIdDb,
  getAllHousesDb,
  updateHouseDb,
  deleteHouseDb,
};
