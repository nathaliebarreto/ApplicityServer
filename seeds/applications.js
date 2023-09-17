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
      id: "4567",
      user_id: "123456",
      // company_id: "3456",
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

