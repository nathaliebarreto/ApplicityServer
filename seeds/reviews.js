/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("reviews").del();
  await knex("reviews").insert([
    {
      id: "23456",
      company_id: "3456",
      // user_id: "123456",
      company_name: "google",
      interview_quantity: 5,
      response_date: "08-16-2023",
      salary_offered: "60,000 - 70,000",
      company_transparency: 5,
      comments: "great company culture they take forever to respond to applications but I love working for this company"
    }
  ]);
};


