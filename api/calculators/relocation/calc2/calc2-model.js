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
    return db('calc2')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('calc2')
        .where({id})
        .first();
    });
};

function find() {
    return db('calc2');
};

function findBy(item) {
    return db('calc2')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('calc2')
    .join('users', 'users.id', 'calc2.userId')
    .where('calc2.userId', userId)
    .select('calc2.*')
    .where('calc2.id', id)
};

function findByUser(userId) {
    return db('calc2')
    .join('users', 'users.id', 'calc2.userId')
    .select('calc2.*')
    .where('calc2.userId', userId)
};

function update(id, changes) {
    return db('calc2')
    .where({id})
    .update(changes)
    .then(() => {
        return db('calc2')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('calc2')
    .join('users', 'users.id', 'calc2.userId')
    .where('calc2.userId', userId)
    .select('calc2.*')
    .where('calc2.id', id)
    .update(changes)
    .then(() => {
        return db('calc2')
        .where({id})
        .first()
    })
};

function remove(userId, id) {
    return db('calc2')
    .join('users', 'users.id', 'calc2.userId')
    .where('calc2.userId', userId)
    .select('calc2.*')
    .where('calc2.id', id)
    .delete();
};