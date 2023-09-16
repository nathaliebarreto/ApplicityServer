/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("companies").del();
  await knex("companies").insert([
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeav0",
      name: "google",
      location: "remote",
      transperancy_rating: "5",
    }
  ]);
};