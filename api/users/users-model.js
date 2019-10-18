const db = require('../../database/dbConfig.js')

module.exports = {
    find,
    findBy,
    add,
    remove,
}

function find() {
    return db('users')
}

function add(user) {
    return db('users')
    .insert(user)
    .then(ids => {
        const [id] = ids;
        return db('users')
        .where({id})
        // THIS WAS ADDED TO STOP CRASHING MY TESTS!
        .select('users.username', 'users.email')
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
    .first()
}