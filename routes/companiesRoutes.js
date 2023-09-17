const router = require("express").Router();
const companiesController = require("../controllers/companiesController");
router;

router
    .route('/')
    .get(companiesController.index)
    .post(companiesController.addCompany);

router.route("/:id").get(companiesController.singleCompany);

router.route("/:id/reviews").get(companiesController.companiesReviews);

router.route("/:id").delete(companiesController.deleteCompanies);
    
module.exports = router;