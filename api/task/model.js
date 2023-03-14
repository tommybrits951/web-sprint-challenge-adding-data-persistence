const db = require('../../data/dbConfig')


async function getAll() {
    return db('tasks as t').leftJoin('projects as p', 't.project_id', 'p.project_id')//.select('t.*', 'p.project_name', 'p.project_description')
}

async function getById(id) {
    return db('tasks').where("task_id", id).first()
}

async function insert(task) {
    const [id] = await db('tasks').insert(task)
    const newTask = await getById(id)
    return newTask
}

module.exports = {
getAll,
getById,
insert
}
