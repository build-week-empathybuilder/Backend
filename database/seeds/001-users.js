const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Mack3', password: bcrypt.hashSync('pass', 10)},
        {username: 'Will', password: bcrypt.hashSync('pass', 10)},
        {username: 'Will1', password: bcrypt.hashSync('pass', 10)},
        {username: 'Justine', password: bcrypt.hashSync('pass', 10)},
        {username: 'Justine1', password: bcrypt.hashSync('pass', 10)},
        {username: 'Lambda', password: bcrypt.hashSync('pass', 10)},
      ]);
    });
};
