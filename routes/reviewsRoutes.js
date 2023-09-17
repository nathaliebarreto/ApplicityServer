const router = require("express").Router();
const reviewController = require("../controllers/reviewsController");

router
    .route("/")
    .get(reviewController.index)
    .post(reviewController.addReview);

router
    .route("/:id")
    .get(reviewController.review)
    .put(reviewController.updateReviews)
    .delete(reviewController.deleteReview);

module.exports = router;
