const db = require('../../data/dbConfig')


async function getAll() {
    return db('task')
}

async function getById(id) {
    return db('task').where("task_id", id).first()
}

module.exports = {
getAll,
getById
}
