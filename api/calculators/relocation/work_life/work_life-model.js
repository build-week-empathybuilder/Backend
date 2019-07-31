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
    return db('workLife')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('workLife')
        .where({id})
        .first();
    });
};

function find() {
    return db('workLife');
};

function findBy(item) {
    return db('workLife')
    .where(item)
    .first();
};

function findById(id) {
    return db('workLife')
    .where({id})
    .first();
};

function update(id, changes) {
    return db('workLife')
    .where({id})
    .update(changes)
    .then(() => {
        return db('workLife')
        .where({id})
        .first()
    });
};

function remove(id) {
    return db('workLife')
    .where({id})
    .delete();
};