const pool = require("../config/db.config");

const uploadImagesDb = async ({ photo_path, house_id }) => {
  const { rows: image } = await pool.query(
    "INSERT INTO house_photo(path, house_id) VALUES($1, $2) RETURNING path, house_id",
    [photo_path, house_id]
  );

  return image[0];
};

const uploadUserImageDb = async ({ user_id, profile_avatar }) => {
  const { rows: image } = await pool.query(
    "UPDATE users SET profile_avatar = $1 WHERE user_id = $2 RETURNING user_id, profile_avatar",
    [profile_avatar, user_id]
  );

  return image[0];
};

const getHouseImagesByIdDb = async (house_id) => {
  const { rows: images } = await pool.query(
    "SELECT path FROM house_photo WHERE house_id = $1",
    [house_id]
  );

  return images;
};

module.exports = { uploadImagesDb, getHouseImagesByIdDb, uploadUserImageDb };
