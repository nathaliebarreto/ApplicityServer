/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("reviews").del();
  await knex("reviews").insert([
    {
      id: "2922c286-16cd-4d43-ab98-c79f678aeab0",
      companies_id: "2922c286-16cd-4d43-ab98-c79f698aeav0",
      company_name: "google",
      interview_quantity: "5",
      // application_date: 20230505,
      response_date: "08-16-2023",
      sallary_offered: "60,000 - 70,000",
      company_transparency: 5,
      comments: "great company culture they take forever to respond to applications but I love working for this company"
    }
  ]);
};

