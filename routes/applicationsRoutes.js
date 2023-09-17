const router = require("express").Router();
const applicationsController = require("../controllers/applicationsControllers");

router
    .route("/")
    .get(applicationsController.index)
    .post(applicationsController.addApplication);

router
    .route("/:id")
    .get(applicationsController.application)
    .put(applicationsController.updateApplication)
    .delete(applicationsController.deleteApplication);

module.exports = router;
