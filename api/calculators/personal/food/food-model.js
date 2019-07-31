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
    return db('food')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('food')
        .where({id})
        .first();
    });
};

function find() {
    return db('food');
};

function findBy(item) {
    return db('food')
    .where(item)
    .first();
};

function findById(id) {
    return db('food')
    .where({id})
    .first();
};

function update(id, changes) {
    return db('food')
    .where({id})
    .update(changes)
    .then(() => {
        return db('food')
        .where({id})
        .first()
    });
};

function remove(id) {
    return db('food')
    .where({id})
    .delete();
};