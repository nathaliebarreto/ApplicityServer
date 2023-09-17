const knex = require('knex');
const knexConfig = require('./knexfile.js');

const db = knex(knexConfig);

const seedFiles = [
    require('./seeds/users'),
    require('./seeds/companies'),
    require('./seeds/applications'),
    require('./seeds/reviews'),
];

Promise.all(seedFiles.map(seedFile => seedFile.seed(db)))
    .then(() => {
        console.log('All the Seed files executed successfully.');
        process.exit(0);
    })
    .catch(err => {
        console.log('Error seeding the database:', err);
        process.exit(1);
    });