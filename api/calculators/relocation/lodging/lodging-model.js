const db = require('../../../../database/dbConfig')

module.exports = {
    add,
    find,
    findBy,
    findByUser,
    findByItemId,
    update,
    updateByItemId,
    remove,
};

function add(item) {
    return db('lodging')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('lodging')
        .where({id})
        .first();
    });
};

function find() {
    return db('lodging');
};

function findBy(item) {
    return db('lodging')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('lodging')
    .join('users', 'users.id', 'lodging.userId')
    .where('lodging.userId', userId)
    .select('lodging.*')
    .where('lodging.id', id)
};

function findByUser(userId) {
    return db('lodging')
    .join('users', 'users.id', 'lodging.userId')
    .select('lodging.*')
    .where('lodging.userId', userId)
};

function update(id, changes) {
    return db('lodging')
    .where({id})
    .update(changes)
    .then(() => {
        return db('lodging')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('lodging')
    .join('users', 'users.id', 'lodging.userId')
    .where('lodging.userId', userId)
    .select('lodging.*')
    .where('lodging.id', id)
    .update(changes)
    .then(() => {
        return db('lodging')
        .where({id})
        .first()
    })
};

function remove(userId, id) {
    return db('lodging')
    .join('users', 'users.id', 'lodging.userId')
    .where('lodging.userId', userId)
    .select('lodging.*')
    .where('lodging.id', id)
    .delete();
};