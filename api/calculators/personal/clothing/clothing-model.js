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
    return db('clothing')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('clothing')
        .where({id})
        .first();
    });
};

function find() {
    return db('clothing');
};

function findBy(item) {
    return db('clothing')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('clothing')
    .join('users', 'users.id', 'clothing.userId')
    .where('clothing.userId', userId)
    .select('clothing.*')
    .where('clothing.id', id)
};

function findByUser(userId) {
    return db('clothing')
    .join('users', 'users.id', 'clothing.userId')
    .select('clothing.*')
    .where('clothing.userId', userId)
};

function update(id, changes) {
    return db('clothing')
    .where({id})
    .update(changes)
    .then(() => {
        return db('clothing')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('clothing')
    .join('users', 'users.id', 'clothing.userId')
    .where('clothing.userId', userId)
    .select('clothing.*')
    .where('clothing.id', id)
    .update(changes)
    .then(() => {
        return db('clothing')
        .where({id})
        .first()
    })
}

function remove(userId, id) {
    return db('clothing')
    .join('users', 'users.id', 'clothing.userId')
    .where('clothing.userId', userId)
    .select('clothing.*')
    .where('clothing.id', id)
    .delete();
};