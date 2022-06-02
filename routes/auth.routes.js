const controllers = require("../controllers/auth.controllers");
const express = require("express");
const router = express.Router();

router.route("/login").post(controllers.signin);

router.route("/register").post(controllers.register);

module.exports = router;
