require("dotenv").config();
// Export the Knex configuration object
module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    database: "applicityDB",
    user: process.env.DB_LOCAL_USER,
    // "root"
    password: process.env.DB_LOCAL_PASSWORD,
    // "rootroot"
  },
};

// module.exports = {
//   client: "mysql",
//   connection: {
//     host: "127.0.0.1",
//     // database: process.env.DB_LOCAL_DBNAME,
//     database: "applicityDB",
//     // user: process.env.DB_LOCAL_USER,
//     user: "root",
//     // password: process.env.DB_LOCAL_PASSWORD,
//     password: "rootroot",
//     charset: "utf8",
//   },
// };
