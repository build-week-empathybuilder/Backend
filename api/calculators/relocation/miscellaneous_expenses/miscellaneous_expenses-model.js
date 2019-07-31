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
    return db('miscellaneousExpenses')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('miscellaneousExpenses')
        .where({id})
        .first();
    });
};

function find() {
    return db('miscellaneousExpenses');
};

function findBy(item) {
    return db('miscellaneousExpenses')
    .where(item)
    .first();
};

function findById(id) {
    return db('miscellaneousExpenses')
    .where({id})
    .first();
};

function update(id, changes) {
    return db('miscellaneousExpenses')
    .where({id})
    .update(changes)
    .then(() => {
        return db('miscellaneousExpenses')
        .where({id})
        .first()
    });
};

function remove(id) {
    return db('miscellaneousExpenses')
    .where({id})
    .delete();
};