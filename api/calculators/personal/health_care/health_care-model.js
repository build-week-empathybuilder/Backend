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
    return db('health_care')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('health_care')
        .where({id})
        .first();
    });
};

function find() {
    return db('health_care');
};

function findBy(item) {
    return db('health_care')
    .where(item)
    .first();
};

function findById(id) {
    return db('health_care')
    .where({id})
    .first();
};

function update(item, changes) {
    return db('health_care')
    .where(item)
    .update(changes)
    .then(() => {
        return db('health_care')
        .where(item)
        .first()
    });
};

function remove(id) {
    return db('health_care')
    .where({id})
    .delete();
};