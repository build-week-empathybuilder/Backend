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
    return db('debt')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('debt')
        .where({id})
        .first();
    });
};

function find() {
    return db('debt');
};

function findBy(item) {
    return db('debt')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('debt')
    .join('users', 'users.id', 'debt.userId')
    .where('debt.userId', userId)
    .select('debt.*')
    .where('debt.id', id)
}

function findByUser(userId) {
    return db('debt')
    .join('users', 'users.id', 'debt.userId')
    .select('debt.*')
    .where('debt.userId', userId)
};

function update(id, changes) {
    return db('debt')
    .where({id})
    .update(changes)
    .then(() => {
        return db('debt')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('debt')
    .join('users', 'users.id', 'debt.userId')
    .where('debt.userId', userId)
    .select('debt.*')
    .where('debt.id', id)
    .update(changes)
    .then(() => {
        return db('debt')
        .where({id})
        .first()
    })
}

function remove(userId, id) {
    return db('debt')
    .join('users', 'users.id', 'debt.userId')
    .where('debt.userId', userId)
    .select('debt.*')
    .where('debt.id', id)
    .delete();
};