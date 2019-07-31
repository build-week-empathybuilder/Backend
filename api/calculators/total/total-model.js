const db = require('../../../database/dbConfig.js')

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
    return db('total')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('total')
        .where({id})
        .first();
    });
};

function find() {
    return db('total');
};

function findBy(item) {
    return db('total')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('total')
    .join('users', 'users.id', 'total.userId')
    .where('total.userId', userId)
    .select('total.*')
    .where('total.id', id)
};

function findByUser(userId) {
    return db('total')
    .join('users', 'users.id', 'total.userId')
    .select('total.*')
    .where('total.userId', userId)
};

function update(id, changes) {
    return db('total')
    .where({id})
    .update(changes)
    .then(() => {
        return db('total')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('total')
    .join('users', 'users.id', 'total.userId')
    .where('total.userId', userId)
    .select('total.*')
    .where('total.id', id)
    .update(changes)
    .then(() => {
        return db('total')
        .where({id})
        .first()
    })
};

function remove(userId, id) {
    return db('total')
    .join('users', 'users.id', 'total.userId')
    .where('total.userId', userId)
    .select('total.*')
    .where('total.id', id)
    .delete();
};