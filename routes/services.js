const express = require("express");
const {
  addServices,
  getServicesById,
  updateService,
} = require("../controllers/services");
const router = express.Router();

router.route("/").post(addServices);

router.route("/:id").get(getServicesById).patch(updateService);

module.exports = router;
