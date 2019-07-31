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
    return db('transportation')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('transportation')
        .where({id})
        .first();
    });
};

function find() {
    return db('transportation');
};

function findBy(item) {
    return db('transportation')
    .where(item)
    .first();
};

function findById(id) {
    return db('transportation')
    .where({id})
    .first();
};

function update(id, changes) {
    return db('transportation')
    .where({id})
    .update(changes)
    .then(() => {
        return db('transportation')
        .where({id})
        .first()
    });
};

function remove(id) {
    return db('transportation')
    .where({id})
    .delete();
};