const db = require('../../database/dbConfig.js')

module.exports = {
    findBy,
    add,
    remove,
}

function add(user) {
    return db('users')
    .insert(user)
    .then(ids => {
        const [id] = ids;
        return db('users')
        .where({id})
        .first();
    })
}

function remove(id) {
    return db('users')
    .where({id})
    .delete();
}

function findBy(user) {
    return db('users')
    .where(user)
}