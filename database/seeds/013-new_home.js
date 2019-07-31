
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('new_home').del()
    .then(function () {
      // Inserts seed entries
      return knex('new_home').insert([
        {user_id: 1, new_home_total: 900, housing_deposit: 200, utilities_deposit: 300, rent: 300, miscellaneous_fees: 100},
        {user_id: 2, new_home_total: 1000, housing_deposit: 300, utilities_deposit: 400, rent: 200, miscellaneous_fees: 100},
        {user_id: 3, new_home_total: 1500, housing_deposit: 400, utilities_deposit: 500, rent: 500, miscellaneous_fees: 100},
        {user_id: 4, new_home_total: 2000, housing_deposit: 500, utilities_deposit: 600, rent: 800, miscellaneous_fees: 100},
        {user_id: 5, new_home_total: 2500, housing_deposit: 400, utilities_deposit: 500, rent: 1500, miscellaneous_fees: 100},
        {user_id: 6, new_home_total: 3000, housing_deposit: 2900, utilities_deposit: 1000, rent: 1000, miscellaneous_fees: 100},
      ]);
    });
};
