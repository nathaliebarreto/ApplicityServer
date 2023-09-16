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
      id: "2922c286-16cd-4d43-ab98-c79f698aeac0",
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


