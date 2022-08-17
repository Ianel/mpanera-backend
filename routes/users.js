const express = require("express");
const { getAllUsers, getUser, updateUser } = require("../controllers/users");

const router = express.Router();

router.route("/").get(getAllUsers);

router.route("/:id").get(getUser).patch(updateUser);

module.exports = router;
