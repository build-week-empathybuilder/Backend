const db = require('../../database/dbConfig.js')

module.exports = {
    find,
    findBy,
    findById,
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

// THESE METHODS WILL BE REMOVED WHEN APP IS PUBLISHED

function find() {
    return db('users').select('id','username', 'email');
}

function findById(id) {
    return db('users')
    .select('id', 'username', 'email')
    .where({id})
    .first();
}