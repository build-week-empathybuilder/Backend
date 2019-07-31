const db = require('../../../../database/dbConfig')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove,
};

function add(item) {
    return db('lodging')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('lodging')
        .where({id})
        .first();
    });
};

function find() {
    return db('lodging');
};

function findBy(item) {
    return db('lodging')
    .where(item)
    .first();
};

function findById(id) {
    return db('lodging')
    .where({id})
    .first();
};

function update(id, changes) {
    return db('lodging')
    .where({id})
    .update(changes)
    .then(() => {
        return db('lodging')
        .where({id})
        .first()
    });
};

function remove(id) {
    return db('lodging')
    .where({id})
    .delete();
};