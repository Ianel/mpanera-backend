const { uploadImagesDb } = require("../db/images.db");

class ImageServices {
  async uploadImage(data) {
    const image = await uploadImagesDb(data);

    return image;
  }
}

module.exports = new ImageServices();
