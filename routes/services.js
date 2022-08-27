const express = require("express");
const { addServices } = require("../controllers/houses");
const router = express.Router();

router.route("/").post(addServices);

module.exports = router;
