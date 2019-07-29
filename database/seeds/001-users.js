
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Mack3', password: 'pass'},
        {username: 'Will', password: 'pass'},
        {username: 'Will1', password: 'pass'},
        {username: 'Justine', password: 'pass'},
        {username: 'Justine1', password: 'pass'},
        {username: 'Lambda', password: 'pass'},
      ]);
    });
};
