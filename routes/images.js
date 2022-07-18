const express = require("express");
const { uploadImages, getHouseImagesId } = require("../controllers/images");
const upload = require("../utils/imageUpoad");
const router = express.Router();

router.route("/").post(upload.array("imgCollection", 10), uploadImages);

router.route("/:id").get(getHouseImagesId);

module.exports = router;
