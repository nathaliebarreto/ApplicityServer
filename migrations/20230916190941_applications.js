/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('applications', (table) => {
    table.uuid('id').primary();
    table
        .uuid('user_id')
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    // table
    //     .uuid('company_id')
    //     .references('companies.id')
    //     .onUpdate('CASCADE')
        // .onDelete('CASCADE');
    table.string('company_name').notNullable();
    table.string('roll_name').notNullable();
    table.boolean('interview').notNullable();
    table.string('response_date').notNullable();
    table.string('job_connection').notNullable();
    table.boolean('follow_up').notNullable();
    table.string('job_info').notNullable();
    table.timestamps(true, true);
    });
};

/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function (knex) {
    return knex.schema.dropTable('applications');
};