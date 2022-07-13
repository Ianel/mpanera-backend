const express = require("express");
const upload = require("../utils/imageUpoad");
const router = express.Router();

router.route("/").post(upload.array("imgCollection", 10), (req, res, next) => {
  const imagesNames = req.files.map((file) => file["path"]);

  console.log(req.files);

  res.status(201).json({
    status: "success",
    results: req.files,
  });
});

module.exports = router;
