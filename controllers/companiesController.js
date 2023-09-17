const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');

exports.index = (_req, res) => {
    knex('companies')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(`Error retrieving companies ${err}`));
};

exports.addCompanies = (req, res) => {
    //Validates the request body for filled data
    if (!req.body.name || 
        !req.body.location || 
        !req.body.transperancy_rating) {
    return res.status(400).send('Please fill all fields');
    }

    const newCompany = { ...req.body, id: uuidv4() };

    knex("companies")
        .insert(newCompany)
        .then((data) => {
        // Respond with 201 and the location of the newly created record
        const newCompanyURL = `/companies/${newCompany.id}`;
        res.status(201).location(newCompanyURL).send(newCompanyURL);
        })
        .catch((err) => res.status(400).send(`Error creating inventory__ i think its supposed to be error creating new company: ${err}`));
};

exports.singleCompany = (req, res) => {
    knex("companies")
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
            res.status(400).send(`Error retrieving company ${req.params.id} ${err}`)
        );
};

exports.companiesReviews = (req, res) => {
    knex("reviews")
        .where({ company_id: req.params.id })
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res
                .status(400)
                .send(
                    `Error retrieving reviews for Company ${req.params.id} ${err}`
                )
        );
};

exports.deleteCompany = (req, res) => {
    knex("companies")
    .where({ id: req.params.id })
    .del()
    .then((data) => {
    if(data === 0) {
        throw 'ID does not exist'
    }
    res.status(200).json({
        message: `Company with id: ${req.params.id} has been deleted`,
        rows_deleted: data,
        id: req.params.id
    });
    })
    .catch((err) =>{
    res
        .status(400)
        .send(err)
    }
    );
};


// exports.updateCompany = (req, res) => {
//     knex("companies")
//         .update(req.body)
//         .where({ id: req.params.id })
//         .then(() => {
//             res
//                 .status(200)
//                 .send(`Company with id: ${req.params.id} has been updated)`);
//         })
//         .catch((err) =>
//             res.status(400).send(`Error updating Company ${req.params.id} ${err}`)
//         );
// };

