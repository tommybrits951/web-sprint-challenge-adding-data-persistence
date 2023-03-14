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
    tbl.string('resource_name', 120).notNullable().unique()
    tbl.string('resource_description', 300)
  })
  .createTable('tasks', tbl => {
    tbl.increments('task_id')
    tbl.string('task_description', 400).notNullable()
    tbl.string('task_notes', 400)
    tbl.boolean('task_completed').defaultTo(0)
    tbl.integer('project_id').unsigned().references('project_id').inTable('projects')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
