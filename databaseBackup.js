/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 * reviews
 */
exports.up = function (knex) {
    return knex.schema.createTable('reviews', (table) => {
    table.uuid('id').primary();
    table
        .uuid('company_id')
        .references('companies.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    // table
    //     .uuid('user_id')
    //     .references('users.id')
    //     .onUpdate('CASCADE')
    //     .onDelete('CASCADE');
    table.string('company_name').notNullable();
    table.integer('interview_quantity').notNullable();
    table.string('response_date').notNullable();
    table.string('salary_offered').notNullable();
    table.integer('company_transparency').notNullable();
    table.string('comments').notNullable();
    table.timestamps(true, true);
    });
};

/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function (knex) {
    return knex.schema.dropTable('reviews');
};

//FIX SALLARY 


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * users
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


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 * companies
 */
exports.up = function (knex) {
    return knex.schema.createTable('companies', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('location').notNullable();
    table.integer('transperancy_rating').notNullable();
    table.timestamps(true, true);
    });
};

/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function (knex) {
    return knex.schema.dropTable('companies');
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 * applications
 */


exports.up = function (knex) {
    return knex.schema.createTable('applications', (table) => {
    table.uuid('id').primary();
    // table
    //     .uuid('user_id')
    //     .references('users.id')
    //     .onUpdate('CASCADE')
    //     .onDelete('CASCADE');
    table
        .uuid('company_id')
        // .references('companies.id')
        // .onUpdate('CASCADE')
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