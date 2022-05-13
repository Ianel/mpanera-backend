const controllers = require("../controllers/housing.controllers");
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

