/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("person", (table) => {
    //column called id auto increments
    //youtuber says this may not be the best way, something to do with primary keys
    table.increments("id");
    table.string("email").notNullable().unique();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
