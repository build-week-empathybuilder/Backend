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

function findById(id) {
    return db('healthCare')
    .where({id})
    .first();
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

function remove(id) {
    return db('healthCare')
    .where({id})
    .delete();
};