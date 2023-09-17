/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('name_first').notNullable();
    table.string('name_last').notNullable();
    table.string('gender').notNullable();
    table.string('race').notNullable();
    table.string('ethnicity').notNullable();
    table.string('user_email').notNullable();
    table.string('linked_in').notNullable();
    table.timestamps(true, true);
    });
};

/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function (knex) {
    return knex.schema.dropTable("users");
};