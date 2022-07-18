const { uploadImagesDb, getHouseImagesByIdDb } = require("../db/images.db");

class ImageServices {
  async uploadImage(data) {
    const image = await uploadImagesDb(data);

    return image;
  }

  async getHouseImagesById(house_id) {
    const images = await getHouseImagesByIdDb(house_id);

    return images;
  }
}

module.exports = new ImageServices();
