const controllers = require("../controllers/housing.controllers");
const express = require('express');
const router = express.Router();

router
    .route('/')
    .get(controllers.getAllHouses)
    .post(controllers.createHouse);

router
    .route('/:id')
    .get(controllers.getHouse)
    .patch(controllers.updateHouse)
    .delete(controllers.deleteHouse);


module.exports = router;