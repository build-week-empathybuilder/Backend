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
    return db('food')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('food')
        .where({id})
        .first();
    });
};

function find() {
    return db('food');
};

function findBy(item) {
    return db('food')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('food')
    .join('users', 'users.id', 'food.userId')
    .where('food.userId', userId)
    .select('food.*')
    .where('food.id', id)
}

function findByUser(userId) {
    return db('food')
    .join('users', 'users.id', 'food.userId')
    .select('food.*')
    .where('food.userId', userId)
};

function update(id, changes) {
    return db('food')
    .where({id})
    .update(changes)
    .then(() => {
        return db('food')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('food')
    .join('users', 'users.id', 'food.userId')
    .where('food.userId', userId)
    .select('food.*')
    .where('food.id', id)
    .update(changes)
    .then(() => {
        return db('food')
        .where({id})
        .first()
    })
}

function remove(userId, id) {
    return db('food')
    .join('users', 'users.id', 'food.userId')
    .where('food.userId', userId)
    .select('food.*')
    .where('food.id', id)
    .delete();
};