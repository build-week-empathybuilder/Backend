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
    return db('newTransportation')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('newTransportation')
        .where({id})
        .first();
    });
};

function find() {
    return db('newTransportation');
};

function findBy(item) {
    return db('newTransportation')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('newTransportation')
    .join('users', 'users.id', 'newTransportation.userId')
    .where('newTransportation.userId', userId)
    .select('newTransportation.*')
    .where('newTransportation.id', id)
};

function findByUser(userId) {
    return db('newTransportation')
    .join('users', 'users.id', 'newTransportation.userId')
    .select('newTransportation.*')
    .where('newTransportation.userId', userId)
};

function update(id, changes) {
    return db('newTransportation')
    .where({id})
    .update(changes)
    .then(() => {
        return db('newTransportation')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('newTransportation')
    .join('users', 'users.id', 'newTransportation.userId')
    .where('newTransportation.userId', userId)
    .select('newTransportation.*')
    .where('newTransportation.id', id)
    .update(changes)
    .then(() => {
        return db('newTransportation')
        .where({id})
        .first()
    })
};

function remove(userId, id) {
    return db('newTransportation')
    .join('users', 'users.id', 'newTransportation.userId')
    .where('newTransportation.userId', userId)
    .select('newTransportation.*')
    .where('newTransportation.id', id)
    .delete();
};