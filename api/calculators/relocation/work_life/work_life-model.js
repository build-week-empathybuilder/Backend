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
    return db('workLife')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('workLife')
        .where({id})
        .first();
    });
};

function find() {
    return db('workLife');
};

function findBy(item) {
    return db('workLife')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('workLife')
    .join('users', 'users.id', 'workLife.userId')
    .where('workLife.userId', userId)
    .select('workLife.*')
    .where('workLife.id', id)
};

function findByUser(userId) {
    return db('workLife')
    .join('users', 'users.id', 'workLife.userId')
    .select('workLife.*')
    .where('workLife.userId', userId)
};

function update(id, changes) {
    return db('workLife')
    .where({id})
    .update(changes)
    .then(() => {
        return db('workLife')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('workLife')
    .join('users', 'users.id', 'workLife.userId')
    .where('workLife.userId', userId)
    .select('workLife.*')
    .where('workLife.id', id)
    .update(changes)
    .then(() => {
        return db('workLife')
        .where({id})
        .first()
    })
};

function remove(userId, id) {
    return db('workLife')
    .join('users', 'users.id', 'workLife.userId')
    .where('workLife.userId', userId)
    .select('workLife.*')
    .where('workLife.id', id)
    .delete();
};