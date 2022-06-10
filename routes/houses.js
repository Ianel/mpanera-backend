const express = require("express");
const {
  getAllHouses,
  createHouse,
  getHouse,
  updateHouse,
  deleteHouse,
} = require("../controllers/houses");
const router = express.Router();

router.route("/").get(getAllHouses).post(createHouse);

router.route("/:id").get(getHouse).patch(updateHouse).delete(deleteHouse);

module.exports = router;
