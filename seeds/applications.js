/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("applications").del();

  await knex("applications").insert([
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeak0",
      users_id: "2922c286-16cd-4d43-ab98-c79f698aeac0",
      company_name: "google",
      roll_name: "engineer",
      interview: true,
      response_date: "08-16-2023",
      job_connection: "someone.linkedin.com",
      follow_up: true,
      job_info: "fulltime entry level blah blah"
    }
  ]);
};