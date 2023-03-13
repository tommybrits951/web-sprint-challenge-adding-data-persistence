/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('projects').insert([
    { project_name: 'project 1', project_description: 'product description for project #1', project_completed: 1 },
    { project_name: 'project 2', project_description: 'product description for project #2', project_completed: 0 },
    { project_name: 'project 3', project_description: 'product description for project #3', project_completed: 0 }
  ]);
};
