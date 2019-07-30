
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('housing').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('housing').insert([
        {user_id: 1, housing_total: 700, rent: 400, deposit: 300},
        {user_id: 2, housing_total: 800, rent: 400, deposit: 400},
        {user_id: 3, housing_total: 900, rent: 400, deposit: 500},
        {user_id: 4, housing_total: 1000, rent: 500, deposit: 500},
        {user_id: 5, housing_total: 1100, rent: 500, deposit: 600},
        {user_id: 6, housing_total: 1200, rent: 600, deposit: 600},
      ]);
    });
};
