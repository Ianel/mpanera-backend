const pool = require("../config/db.config");

const uploadImagesDb = async ({ photo, house_id }) => {
  const { rows: image } = await pool.query(
    "INSERT INTO house_photo(path, house_id) VALUES($1, $2) RETURNING path, house_id",
    [photo, house_id]
  );

  return image[0];
};

module.exports = { uploadImagesDb };
