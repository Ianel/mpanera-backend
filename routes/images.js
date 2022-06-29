const express = require("express");
const { uploadImages } = require("../controllers/images");
const router = express.Router();

router.route("/").post(uploadImages);

module.exports = router;
