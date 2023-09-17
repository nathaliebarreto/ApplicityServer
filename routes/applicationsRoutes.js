const router = require("express").Router();
const applicationsController = require("../controllers/applicationsControllers");

router
    .route("/")
    .get(applicationsController.index)
    .post(applicationsController.addApplication);
    // .post((request, response) => {
    //     const jsonResponse = { message: "You have made a post request" };
    //     console.log(request.body)
    //     response.json(request.body);
    // });

router
    .route("/:id")
    .get(applicationsController.application)
    .put(applicationsController.updateApplication)
    .delete(applicationsController.deleteApplication);

module.exports = router;
