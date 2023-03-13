/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('task').truncate()
  await knex('task').insert([
    { task_description: 'description for task 1', task_notes: 'non', task_completed: 1, project_id: 1},
    { task_description: 'description for task 2', task_notes: 'non', task_completed: 1, project_id: 1},
    { task_description: 'description for task 3', task_notes: 'non', task_completed: 1, project_id: 1}
  ]);
};
