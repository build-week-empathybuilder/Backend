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
    return db('housing')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('housing')
        .where({id})
        .first();
    });
};

function find() {
    return db('housing');
};

function findBy(item) {
    return db('housing')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('housing')
    .join('users', 'users.id', 'housing.userId')
    .where('housing.userId', userId)
    .select('housing.*')
    .where('housing.id', id)
}

function findByUser(userId) {
    return db('housing')
    .join('users', 'users.id', 'housing.userId')
    .select('housing.*')
    .where('housing.userId', userId)
};

function update(id, changes) {
    return db('housing')
    .where({id})
    .update(changes)
    .then(() => {
        return db('housing')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('housing')
    .join('users', 'users.id', 'housing.userId')
    .where('housing.userId', userId)
    .select('housing.*')
    .where('housing.id', id)
    .update(changes)
    .then(() => {
        return db('housing')
        .where({id})
        .first()
    })
}

function remove(userId, id) {
    return db('housing')
    .join('users', 'users.id', 'housing.userId')
    .where('housing.userId', userId)
    .select('housing.*')
    .where('housing.id', id)
    .delete();
};