const db = require('../../../../database/dbConfig')

module.exports = {
    add,
    find,
    findBy,
    findByUser,
    findByItemId,
    update,
    updateByItemId,
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

function findByItemId(userId, id) {
    return db('calc1')
    .join('users', 'users.id', 'calc1.userId')
    .where('calc1.userId', userId)
    .select('calc1.*')
    .where('calc1.id', id)
}

function findByUser(userId) {
    return db('calc1')
    .join('users', 'users.id', 'calc1.userId')
    .select('calc1.*')
    .where('calc1.userId', userId)
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

function updateByItemId(userId, id, changes) {
    return db('calc1')
    .join('users', 'users.id', 'calc1.userId')
    .where('calc1.userId', userId)
    .select('calc1.*')
    .where('calc1.id', id)
    .update(changes)
    .then(() => {
        return db('calc1')
        .where({id})
        .first()
    })
}

function remove(userId, id) {
    return db('calc1')
    .join('users', 'users.id', 'calc1.userId')
    .where('calc1.userId', userId)
    .select('calc1.*')
    .where('calc1.id', id)
    .delete();
};