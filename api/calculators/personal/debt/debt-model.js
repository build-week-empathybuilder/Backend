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

function findById(id) {
    return db('debt')
    .where({id})
    .first();
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

function remove(id) {
    return db('debt')
    .where({id})
    .delete();
};