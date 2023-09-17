const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require('uuid');

exports.index = (_req, res) => {
    knex("reviews")
        .join("companies", "reviews.company_id", "=", "companies.id")
        .select(
            "companies.id",
            "companies.name",
            "reviews.company_name",
            "inventories.response_date",
            "inventories.sallary_offered",
            "inventories.interview_quantity",
            "inventories.company_transparency",
            "inventories.created_at",
            "inventories.updated_at"
        )
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving Reviews: ${err}`)
        );
};

exports.addReview = (req, res) => {
    //Validates the request body for filled data
    if (!req.body.company_name || !req.body.interview_quantity || !req.body.sallary_offered || !req.body.company_transparency || !req.body.response_date || !req.body.company_id) {
        return res.status(400).send('Please fill all fields');
    }

    const newReview = { ...req.body, id: uuidv4() };

    knex("reviews")
        .insert(newReview)
        .then((data) => {
            // Respond with 201 and the location of the newly created record
            const newReviewURL = `/reviews/${newReview.id}`;
            res.status(201).location(newReviewURL).send(newReviewURL);
        })
        .catch((err) => res.status(400).send(`Error creating review: ${err}`));
};

exports.review = (req, res) => {
    knex("reviews")
        .where({ id: req.params.id })
        .then((data) => {
            if (!data.length) {
                return res
                    .status(404)
                    .send(`Record with id: ${req.params.id} is not found`);
            }
            res.status(200).json(data[0]);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving review ${req.params.id} ${err}`)
        );
};

exports.updateReviews = (req, res) => {
    knex('reviews')
        .update(req.body)
        .where({ id: req.params.id })
        .then(() => {
            res.status(200).send(`Review with id: ${req.params.id} has been updated`);
        })
        .catch((err) =>
            res.status(400).send(`Error updating review ${req.params.id} ${err}`)
        );
};

exports.deleteReview = (req, res) => {
    knex("reviews")
        .where({ id: req.params.id })
        .del()
        .then((data) => {
            if (data === 0) {
                throw 'ID does not exist'
            }
            res.status(200).json({
                message: `Review item with id: ${req.params.id} has been deleted`,
                rows_deleted: data,
                id: req.params.id
            });
        })
        .catch((err) => {
            res
                .status(400)
                .send(err)
        }
        );
};