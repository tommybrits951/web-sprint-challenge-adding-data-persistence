/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments('project_id')
    tbl.string('project_name', 120).notNullable().unique()
    tbl.string('project_description')
    tbl.boolean('project_completed').defaultTo(0).notNullable()
  })
  .createTable('resources', tbl => {
    tbl.increments('resource_id')
    tbl.string('resource_name', 120).notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
