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
    return db('newHome')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('newHome')
        .where({id})
        .first();
    });
};

function find() {
    return db('newHome');
};

function findBy(item) {
    return db('newHome')
    .where(item)
    .first();
};

function findById(id) {
    return db('newHome')
    .where({id})
    .first();
};

function update(id, changes) {
    return db('newHome')
    .where({id})
    .update(changes)
    .then(() => {
        return db('newHome')
        .where({id})
        .first()
    });
};

function remove(id) {
    return db('newHome')
    .where({id})
    .delete();
};