const router = require("express").Router();
const reviewController = require("../controllers/reviewsController");
router;

router
    .route("/")
    .get(reviewController.index)
    .post(reviewController.addReview);

router
    .route("/:id")
    .get(reviewController.review)
    .put(reviewController.updateReview)
    .delete(reviewController.deleteReview);

module.exports = router;
