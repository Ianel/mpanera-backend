const controllers = require("../controllers/users.controllers");
const express = require('express');
const router = express.Router();

router
    .route('/')
    .get(controllers.getAllUsers)

router
    .route('/:id')
    .get(controllers.getUser)
    .patch(controllers.updateUser)
    .delete(controllers.deleteUser);

module.exports = router;