const controllers = require("../controllers/auth.controllers");
const express = require("express");
const { registerValidation } = require("../validators/auth");
const { validationMiddleware } = require("../middlewares/validations-middleware");
const router = express.Router();

router.route("/login").post(controllers.signin);

router.route("/register").post(registerValidation, validationMiddleware, controllers.register);

module.exports = router;
