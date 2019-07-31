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
    return db('utilities')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('utilities')
        .where({id})
        .first();
    });
};

function find() {
    return db('utilities');
};

function findBy(item) {
    return db('utilities')
    .where(item)
    .first();
};

function findById(id) {
    return db('utilities')
    .where({id})
    .first();
};

function update(item, changes) {
    return db('utilities')
    .where(item)
    .update(changes)
    .then(() => {
        return db('utilities')
        .where(item)
        .first()
    });
};

function remove(id) {
    return db('utilities')
    .where({id})
    .delete();
};