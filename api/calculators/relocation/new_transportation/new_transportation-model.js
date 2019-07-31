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
    return db('newTransportation')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('newTransportation')
        .where({id})
        .first();
    });
};

function find() {
    return db('newTransportation');
};

function findBy(item) {
    return db('newTransportation')
    .where(item)
    .first();
};

function findById(id) {
    return db('newTransportation')
    .where({id})
    .first();
};

function update(id, changes) {
    return db('newTransportation')
    .where({id})
    .update(changes)
    .then(() => {
        return db('newTransportation')
        .where({id})
        .first()
    });
};

function remove(id) {
    return db('newTransportation')
    .where({id})
    .delete();
};