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
    return db('healthCare')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('healthCare')
        .where({id})
        .first();
    });
};

function find() {
    return db('healthCare');
};

function findBy(item) {
    return db('healthCare')
    .where(item)
    .first();
};

function findByItemId(userId, id) {
    return db('healthCare')
    .join('users', 'users.id', 'healthCare.userId')
    .where('healthCare.userId', userId)
    .select('healthCare.*')
    .where('healthCare.id', id)
}

function findByUser(userId) {
    return db('healthCare')
    .join('users', 'users.id', 'healthCare.userId')
    .select('healthCare.*')
    .where('healthCare.userId', userId)
};

function update(id, changes) {
    return db('healthCare')
    .where({id})
    .update(changes)
    .then(() => {
        return db('healthCare')
        .where({id})
        .first()
    });
};

function updateByItemId(userId, id, changes) {
    return db('healthCare')
    .join('users', 'users.id', 'healthCare.userId')
    .where('healthCare.userId', userId)
    .select('healthCare.*')
    .where('healthCare.id', id)
    .update(changes)
    .then(() => {
        return db('healthCare')
        .where({id})
        .first()
    })
}

function remove(userId, id) {
    return db('healthCare')
    .join('users', 'users.id', 'healthCare.userId')
    .where('healthCare.userId', userId)
    .select('healthCare.*')
    .where('healthCare.id', id)
    .delete();
};