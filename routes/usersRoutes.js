const router = require("express").Router();
const userController = require("../controllers/usersController");

router
    .route('/')
    .get(userController.index)
    .post(userController.addUsers);

router.route("/:id").get(userController.singleUser);

router.route("/:id/applications").get(userController.userApplications);

router.route("/:id").delete(userController.deleteUser);

module.exports = router;