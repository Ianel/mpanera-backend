const express = require("express");
const {
  getAllHouses,
  createHouse,
  getHouse,
  updateHouse,
  deleteHouse,
  markHouseAsActive,
} = require("../controllers/houses");
const router = express.Router();

router.route("/").get(getAllHouses).post(createHouse);

router
  .route("/:id")
  .get(getHouse)
  .patch(updateHouse)
  .post(markHouseAsActive)
  .delete(deleteHouse);

module.exports = router;
