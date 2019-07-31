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

function findById(id) {
    return db('clothing')
    .where({id})
    .first();
};

function update(item, changes) {
    return db('clothing')
    .where(item)
    .update(changes)
    .then(() => {
        return db('clothing')
        .where(item)
        .first()
    });
};

function remove(id) {
    return db('clothing')
    .where({id})
    .delete();
};