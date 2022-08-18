const {
  uploadImagesDb,
  getHouseImagesByIdDb,
  uploadUserImageDb,
} = require("../db/images.db");

class ImageServices {
  async uploadImage(data) {
    const image = await uploadImagesDb(data);

    return image;
  }

  async getHouseImagesById(house_id) {
    const images = await getHouseImagesByIdDb(house_id);

    return images;
  }

  async uploadUserImage(data) {
    const image = await uploadUserImageDb(data);

    return image;
  }
}

module.exports = new ImageServices();
