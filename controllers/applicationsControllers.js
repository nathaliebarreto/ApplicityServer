const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require('uuid');

exports.index = (_req, res) => {
    knex("applications")
        .join("users", "applications.user_id", "=", "users.id")
        .select(
            "users.id",
            "users.name",
            "applications.company_name",
            "applications.roll_name",
            "applications.interview",
            "applications.response_date",
            "applications.job_connection",
            "applications.follow_up",
            "applications.job_info"
        )
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving applications: ${err}`)
        );
};

exports.addApplication = (req, res) => {
    //Validates the request body for filled data
    if (!req.body.company_name || !req.body.roll_name || !req.body.interview || !req.body.response_date || !req.body.job_connection || !req.body.follow_up || !req.body.job_info) {
        return res.status(400).send('Please fill all fields');
    }

    const newApplication = { ...req.body, id: uuidv4() };

    knex("applications")
        .insert(newApplication)
        .then((data) => {
            // Respond with 201 and the location of the newly created record
            const newApplicationURL = `/applications/${newApplication.id}`;
            res.status(201).location(newApplicationURL).send(newApplicationURL);
        })
        .catch((err) => res.status(400).send(`Error creating application: ${err}`));
};

exports.application = (req, res) => {
    knex("applications")
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
            res.status(400).send(`Error retrieving applicaition ${req.params.id} ${err}`)
        );
};

exports.updateApplication = (req, res) => {
    knex('applications')
        .update(req.body)
        .where({ id: req.params.id })
        .then(() => {
            res.status(200).send(`Application with id: ${req.params.id} has been updated`);
        })
        .catch((err) =>
            res.status(400).send(`Error updating applicaion ${req.params.id} ${err}`)
        );
};

exports.deleteApplication = (req, res) => {
    knex("applications")
        .where({ id: req.params.id })
        .del()
        .then((data) => {
            if (data === 0) {
                throw 'ID does not exist'
            }
            res.status(200).json({
                message: `Application item with id: ${req.params.id} has been deleted`,
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