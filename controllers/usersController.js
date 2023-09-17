const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');

exports.index = (_req, res) => {
    knex('users')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(`Error retrieving users ${err}`));
};

exports.addUsers = (req, res) => {
    //Validates the request body for filled data

    // console.log(req.body)
    if (!req.body.user_email) {
        return res.status(400).send('Please fill all fields');
    }

    const newUser = { ...req.body, id: uuidv4() };

    // console.log(newUser)

    knex("users")
        .insert(newUser)
        .then((data) => {
            // Respond with 201 and the location of the newly created record
            const newUserURL = `/users/${newUser.id}`;
            res.status(201).json({ newUserURL });
        })
        .catch((err) => res.status(400).send(`Error creating inventory__ i think its supposed to be error creating new User: ${err}`));
};

exports.singleUser = (req, res) => {
    knex("users")
        .where({ id: req.params.id })
        .then((data) => {
            // If record is not found, respond with 404
            if (!data.length) {
                return res
                    .status(404)
                    .send(`Record with id: ${req.params.id} is not found`);
            }

            // Knex returns an array of records, so we need to send response with a single object only
            res.status(200).json(data[0]);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving user ${req.params.id} ${err}`)
        );
};

exports.userApplications = (req, res) => {
    knex("applications")
        .where({ user_id: req.params.id })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res
                .status(400)
                .send(
                    `Error retrieving applications for Users ${req.params.id} ${err}`
                )
        );
};

exports.deleteUser = (req, res) => {
    knex("users")
        .where({ id: req.params.id })
        .del()
        .then((data) => {
            if (data === 0) {
                throw 'ID does not exist'
            }
            res.status(200).json({
                message: `User with id: ${req.params.id} has been deleted`,
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