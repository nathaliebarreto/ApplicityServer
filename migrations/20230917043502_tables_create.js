/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.uuid('id').primary();
            table.string('name_first').notNullable();
            table.string('name_last').notNullable();
            table.string('gender').notNullable();
            table.string('race').notNullable();
            table.string('ethnicity').notNullable();
            table.string('user_email').notNullable();
            table.string('linked_in').notNullable();
            table.timestamps(true, true);
        })
        .createTable('companies', (table) => {
            table.uuid('id').primary();
            table.string('name').notNullable();
            table.string('location').notNullable();
            table.integer('transperancy_rating').notNullable();
            table.timestamps(true, true);
        })
        .createTable('reviews', (table) => {
            table.uuid('id').primary();
            table
                .uuid('company_id')
            table
                .uuid('user_id')
            table.string('company_name').notNullable();
            table.integer('interview_quantity').notNullable();
            table.string('response_date').notNullable();
            table.string('salary_offered').notNullable();
            table.integer('company_transparency').notNullable();
            table.string('comments').notNullable();
            table.timestamps(true, true);
        })
        .createTable('applications', (table) => {
            table.uuid('id').primary();
            table
                .uuid('user_id')
            table
                .uuid('company_id')
            table.string('company_name').notNullable();
            table.string('role_name').notNullable();
            table.boolean('interview');
            table.string('response_date');
            table.string('job_connection');
            table.string('salary').notNullable();
            table.boolean('follow_up');
            table.string('job_info').notNullable();
            table.timestamps(true, true);
            })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
    .dropTable('reviews')
    .dropTable('companies')
    .dropTable('users')
    .dropTable('applications')
};
