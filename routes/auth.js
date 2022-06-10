const express = require("express");
const { signup, signin } = require("../controllers/auth");
const router = express.Router();

router.route("/register").post(signup);

router.route("/login").post(signin);

module.exports = router;