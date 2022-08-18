const express = require("express");
const { uploadUserImage } = require("../controllers/images");
const upload = require("../utils/imageUpoad");
const router = express.Router();

router.route("/").post(upload.single("profileAvatar"), uploadUserImage);

module.exports = router;
