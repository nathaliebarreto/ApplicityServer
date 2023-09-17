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
      name_first: "bobby",
      name_last: "brown",
      gender: "Female",
      race: "white",
      ethnicity: "Latina",
      user_email: "email@email.com",
      linked_in: "whatever.com",
    }
  ]);
};


