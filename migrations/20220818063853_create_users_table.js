/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments(),
            table.string('email'),
            table.string('password'),
            table.timestamps(true, true),
            table.integer('created_by').nullable,
            table.integer('updated_by').nullable,
            table.integer('status').defaultTo(1)

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
