
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('housing').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('housing').insert([
        {userId: 1, housingTotal: 700, rent: 400, deposit: 300},
        {userId: 2, housingTotal: 800, rent: 400, deposit: 400},
        {userId: 3, housingTotal: 900, rent: 400, deposit: 500},
        {userId: 4, housingTotal: 1000, rent: 500, deposit: 500},
        {userId: 5, housingTotal: 1100, rent: 500, deposit: 600},
        {userId: 6, housingTotal: 1200, rent: 600, deposit: 600},
      ]);
    });
};
