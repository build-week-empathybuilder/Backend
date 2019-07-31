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
    return db('utilities')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('utilities')
        .where({id})
        .first();
    });
};

function find() {
    return db('utilities');
};

function findBy(item) {
    return db('utilities')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('utilities')
    .join('users', 'users.id', 'utilities.userId')
    .where('utilities.userId', userId)
    .select('utilities.*')
    .where('utilities.id', id)
};

function findByUser(userId) {
    return db('utilities')
    .join('users', 'users.id', 'utilities.userId')
    .select('utilities.*')
    .where('utilities.userId', userId)
};

function update(id, changes) {
    return db('utilities')
    .where({id})
    .update(changes)
    .then(() => {
        return db('utilities')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('utilities')
    .join('users', 'users.id', 'utilities.userId')
    .where('utilities.userId', userId)
    .select('utilities.*')
    .where('utilities.id', id)
    .update(changes)
    .then(() => {
        return db('utilities')
        .where({id})
        .first()
    })
};

function remove(userId, id) {
    return db('utilities')
    .join('users', 'users.id', 'utilities.userId')
    .where('utilities.userId', userId)
    .select('utilities.*')
    .where('utilities.id', id)
    .delete();
};