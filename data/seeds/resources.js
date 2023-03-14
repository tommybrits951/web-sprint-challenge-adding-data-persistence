/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').truncate()
  await knex('resources').insert([
    { resource_name: 'resource 1', resource_description: 'resource 1 description' },
    { resource_name: 'resource 2', resource_description: 'resource 2 description' },
    { resource_name: 'resource 3', resource_description: 'resource 3 description' }
  ]);
};
