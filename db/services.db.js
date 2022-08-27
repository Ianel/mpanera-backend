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

const updateServicesDb = async (
  id,
  {
    interior_toilets,
    outdoor_toilets,
    garage,
    garden,
    running_water,
    swimming_pool,
  }
) => {
  const { rows: services } = await pool.query(
    "UPDATE services SET interior_toilets = $1, outdoor_toilets = $2, garage = $3, garden = $4, running_water = $5, swimming_pool = $6 WHERE services_id = $7 RETURNING *",
    [
      interior_toilets,
      outdoor_toilets,
      garage,
      garden,
      running_water,
      swimming_pool,
      id,
    ]
  );

  return services[0];
};

module.exports = { addServicesDb, getServicesByIdDb, updateServicesDb };
