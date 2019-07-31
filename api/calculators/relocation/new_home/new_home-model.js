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
    return db('newHome')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('newHome')
        .where({id})
        .first();
    });
};

function find() {
    return db('newHome');
};

function findBy(item) {
    return db('newHome')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('newHome')
    .join('users', 'users.id', 'newHome.userId')
    .where('newHome.userId', userId)
    .select('newHome.*')
    .where('newHome.id', id)
};

function findByUser(userId) {
    return db('newHome')
    .join('users', 'users.id', 'newHome.userId')
    .select('newHome.*')
    .where('newHome.userId', userId)
};

function update(id, changes) {
    return db('newHome')
    .where({id})
    .update(changes)
    .then(() => {
        return db('newHome')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('newHome')
    .join('users', 'users.id', 'newHome.userId')
    .where('newHome.userId', userId)
    .select('newHome.*')
    .where('newHome.id', id)
    .update(changes)
    .then(() => {
        return db('newHome')
        .where({id})
        .first()
    })
};

function remove(userId, id) {
    return db('newHome')
    .join('users', 'users.id', 'newHome.userId')
    .where('newHome.userId', userId)
    .select('newHome.*')
    .where('newHome.id', id)
    .delete();
};