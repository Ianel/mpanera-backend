const ImageServices = require("../services/images-services");
const multer = require("multer");
const uuidv4 = require("uuid/v4");

exports.uploadImages = async (req, res) => {
  const DIR = "./public/";
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(" ").join("-");
      cb(null, uuidv4() + "-" + fileName);
    },
  });
  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  }).array("imgCollection", 9);

  const reqFiles = [];
  const url = req.protocol + "://" + req.get("host");
  for (var i = 0; i < req.files.length; i++) {
    reqFiles.push(url + "/public/" + req.files[i].filename);
  }

  reqFiles.forEach(async (imageFile) => {
    const image = await ImageServices.uploadImage(imageFile, 5);
  });

  res.status(201).json({
    status: "success",
    results: reqFiles,
  });
};
