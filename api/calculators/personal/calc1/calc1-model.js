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
    return db('calc1')
    .insert(item)
    .then(ids => {
        const [id] = ids;
        return db('calc1')
        .where({id})
        .first();
    });
};

function find() {
    return db('calc1');
};

function findBy(item) {
    return db('calc1')
    .where(item)
    .first();
};

function findById(id) {
    return db('calc1')
    .where({id})
    .first();
};

function update(id, changes) {
    return db('calc1')
    .where({id})
    .update(changes)
    .then(() => {
        return db('calc1')
        .where({id})
        .first()
    });
};

function remove(id) {
    return db('calc1')
    .where({id})
    .delete();
};