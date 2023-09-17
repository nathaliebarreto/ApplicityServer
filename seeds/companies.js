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
      id: "3456",
      name: "google",
      location: "remote",
      transperancy_rating: 5,
    }
  ]);
};