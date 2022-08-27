const express = require("express");
const { addServices, getServicesById } = require("../controllers/services");
const router = express.Router();

router.route("/").post(addServices);

router.route("/:id").get(getServicesById);

module.exports = router;
