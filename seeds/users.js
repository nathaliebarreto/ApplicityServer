/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: "123456",
      name_first: "Nathalie",
      name_last: "Barreto",
      gender: "Female",
      race: "white",
      ethnicity: "Latina",
      user_email: "ireenatbarr@gmail.com",
      linked_in: "whatever.com",
    }
  ]);
};


