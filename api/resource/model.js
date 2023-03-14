const db = require('../../data/dbConfig')


async function getAll() {
    return await db('resources')
}

async function getById(id) {
    return await db('resources').where("resource_id", id).first()
}

async function insert(resource) {
    const [id] = await db("resources").insert(resource)
    const res = await getById(id)
    return res;
}
module.exports = {
    getAll,
    getById, 
    insert
}