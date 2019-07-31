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
    return db('miscellaneousExpenses')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('miscellaneousExpenses')
        .where({id})
        .first();
    });
};

function find() {
    return db('miscellaneousExpenses');
};

function findBy(item) {
    return db('miscellaneousExpenses')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('miscellaneousExpenses')
    .join('users', 'users.id', 'miscellaneousExpenses.userId')
    .where('miscellaneousExpenses.userId', userId)
    .select('miscellaneousExpenses.*')
    .where('miscellaneousExpenses.id', id)
};

function findByUser(userId) {
    return db('miscellaneousExpenses')
    .join('users', 'users.id', 'miscellaneousExpenses.userId')
    .select('miscellaneousExpenses.*')
    .where('miscellaneousExpenses.userId', userId)
};

function update(id, changes) {
    return db('miscellaneousExpenses')
    .where({id})
    .update(changes)
    .then(() => {
        return db('miscellaneousExpenses')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('miscellaneousExpenses')
    .join('users', 'users.id', 'miscellaneousExpenses.userId')
    .where('miscellaneousExpenses.userId', userId)
    .select('miscellaneousExpenses.*')
    .where('miscellaneousExpenses.id', id)
    .update(changes)
    .then(() => {
        return db('miscellaneousExpenses')
        .where({id})
        .first()
    })
};

function remove(userId, id) {
    return db('miscellaneousExpenses')
    .join('users', 'users.id', 'miscellaneousExpenses.userId')
    .where('miscellaneousExpenses.userId', userId)
    .select('miscellaneousExpenses.*')
    .where('miscellaneousExpenses.id', id)
    .delete();
};