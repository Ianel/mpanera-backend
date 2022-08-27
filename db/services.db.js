const pool = require("../config/db.config");

const addServicesDb = async ({
  garage,
  interior_toilets,
  garden,
  outdoor_toilets,
  running_water,
  swimming_pool,
  house_id,
}) => {
  const { rows: services } = await pool.query(
    "INSERT into services(garage, interior_toilets, garden, outdoor_toilets, running_water, swimming_pool, house_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [
      garage,
      interior_toilets,
      garden,
      outdoor_toilets,
      running_water,
      swimming_pool,
      house_id,
    ]
  );

  return services[0];
};

const getServicesByIdDb = async (house_id) => {
  const { rows: services } = await pool.query(
    "SELECT * FROM services WHERE house_id = $1",
    [house_id]
  );

  return services[0];
};

module.exports = { addServicesDb, getServicesByIdDb };
