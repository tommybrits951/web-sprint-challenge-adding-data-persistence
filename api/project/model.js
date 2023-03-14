const db = require('../../data/dbConfig')



async function getAll() {
    const projects = await db('projects')
    return projects;
}

async function getById(id) {
    const project = await db('projects').where('project_id', id).first()
    return project;
}

async function insert(project) {
    const [id] = await db('projects').insert(project)
    const proj = getById(id);
    return proj
}
module.exports = {
    getAll,
    getById,
    insert
}