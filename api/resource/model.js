const db = require('../../data/dbConfig')


async function getAll() {
    return db('resources')
}

async function getById(id) {
    return db('resources').where("resource_id", id).first()
}

module.exports = {
    getAll,
    getById
}