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
    return db('calc2')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('calc2')
        .where({id})
        .first();
    });
};

function find() {
    return db('calc2');
};

function findBy(item) {
    return db('calc2')
    .where(item)
    .first();
};

function findById(id) {
    return db('calc2')
    .where({id})
    .first();
};

function update(id, changes) {
    return db('calc2')
    .where({id})
    .update(changes)
    .then(() => {
        return db('calc2')
        .where({id})
        .first()
    });
};

function remove(id) {
    return db('calc2')
    .where({id})
    .delete();
};