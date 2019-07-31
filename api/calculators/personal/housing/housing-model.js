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
    return db('housing')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('housing')
        .where({id})
        .first();
    });
};

function find() {
    return db('housing');
};

function findBy(item) {
    return db('housing')
    .where(item)
    .first();
};

function findById(id) {
    return db('housing')
    .where({id})
    .first();
};

function update(id, changes) {
    return db('housing')
    .where({id})
    .update(changes)
    .then(() => {
        return db('housing')
        .where({id})
        .first()
    });
};

function remove(id) {
    return db('housing')
    .where({id})
    .delete();
};F