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
    return db('transportation')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('transportation')
        .where({id})
        .first();
    });
};

function find() {
    return db('transportation');
};

function findBy(item) {
    return db('transportation')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('transportation')
    .join('users', 'users.id', 'transportation.userId')
    .where('transportation.userId', userId)
    .select('transportation.*')
    .where('transportation.id', id)
}

function findByUser(userId) {
    return db('transportation')
    .join('users', 'users.id', 'transportation.userId')
    .select('transportation.*')
    .where('transportation.userId', userId)
};

function update(id, changes) {
    return db('transportation')
    .where({id})
    .update(changes)
    .then(() => {
        return db('transportation')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('transportation')
    .join('users', 'users.id', 'transportation.userId')
    .where('transportation.userId', userId)
    .select('transportation.*')
    .where('transportation.id', id)
    .update(changes)
    .then(() => {
        return db('transportation')
        .where({id})
        .first()
    })
}

function remove(userId, id) {
    return db('transportation')
    .join('users', 'users.id', 'transportation.userId')
    .where('transportation.userId', userId)
    .select('transportation.*')
    .where('transportation.id', id)
    .delete();
};