const ImageServices = require("../services/images-services");

exports.uploadImages = async (req, res) => {
  const imagesPath = req.files.map((fileInfo) => fileInfo["path"]);
  const { house_id } = req.body;

  imagesPath.forEach(async (image) => {
    let images = await ImageServices.uploadImage({
      photo_path: image,
      house_id: house_id,
    });
  });

  res.status(201).json({
    status: "success",
    results: req.files.map((fileInfo) => fileInfo["path"]),
  });
};

exports.getHouseImagesId = async (req, res) => {
  const { id } = req.params;

  const images = await ImageServices.getHouseImagesById(id);

  res.status(200).json({
    status: "success",
    results: images,
  });
};
