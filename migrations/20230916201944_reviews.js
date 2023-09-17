/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
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