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
    return db('newHousing')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('newHousing')
        .where({id})
        .first();
    });
};

function find() {
    return db('newHousing');
};

function findBy(item) {
    return db('newHousing')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('newHousing')
    .join('users', 'users.id', 'newHousing.userId')
    .where('newHousing.userId', userId)
    .select('newHousing.*')
    .where('newHousing.id', id)
};

function findByUser(userId) {
    return db('newHousing')
    .join('users', 'users.id', 'newHousing.userId')
    .select('newHousing.*')
    .where('newHousing.userId', userId)
};

function update(id, changes) {
    return db('newHousing')
    .where({id})
    .update(changes)
    .then(() => {
        return db('newHousing')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('newHousing')
    .join('users', 'users.id', 'newHousing.userId')
    .where('newHousing.userId', userId)
    .select('newHousing.*')
    .where('newHousing.id', id)
    .update(changes)
    .then(() => {
        return db('newHousing')
        .where({id})
        .first()
    })
};

function remove(userId, id) {
    return db('newHousing')
    .join('users', 'users.id', 'newHousing.userId')
    .where('newHousing.userId', userId)
    .select('newHousing.*')
    .where('newHousing.id', id)
    .delete();
};