const router = require("express").Router();
const companiesController = require("../controllers/companiesController");

router
    .route('/')
    .get(companiesController.index)
    .post(companiesController.addCompanies);

router.route("/:id").get(companiesController.singleCompany);

router.route("/:id/reviews").get(companiesController.companiesReviews);

router.route("/:id").delete(companiesController.deleteCompany);

module.exports = router;