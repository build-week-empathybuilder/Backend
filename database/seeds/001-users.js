const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Mack3', password: bcrypt.hashSync('pass', 10), email: "mack@lambdaschool.edu"},
        {username: 'Will', password: bcrypt.hashSync('pass', 10), email: "will@lambdaschool.edu"},
        {username: 'Will1', password: bcrypt.hashSync('pass', 10), email: "will@lambdaschool.edu"},
        {username: 'Justine', password: bcrypt.hashSync('pass', 10), email: "justine@lambdaschool.edu"},
        {username: 'Justine1', password: bcrypt.hashSync('pass', 10), email: "justine@lambdaschool.edu"},
        {username: 'Lambda', password: bcrypt.hashSync('pass', 10), email: "admin@lambdaschool.edu"},
      ]);
    });
};
