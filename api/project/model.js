const db = require('../../data/dbConfig')



async function getAll() {
    return await db('projects')
}

async function getById(id) {
    const project = await db('projects').where('project_id', id).first()
    return project;
}


module.exports = {
    getAll,
    getById
}