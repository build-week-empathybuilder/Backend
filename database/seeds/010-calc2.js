
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('calc2').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('calc2').insert([
        {user_id: 1, work_life_total: 500, lodging_total: 300, new_home_total: 900, new_transportation_total: 1600, miscellaneous_expenses_total: 700},
        {user_id: 2, work_life_total: 600, lodging_total: 250, new_home_total: 1000, new_transportation_total: 1500, miscellaneous_expenses_total: 800},
        {user_id: 3, work_life_total: 700, lodging_total: 200, new_home_total: 1500, new_transportation_total: 1400, miscellaneous_expenses_total: 900},
        {user_id: 4, work_life_total: 800, lodging_total: 150, new_home_total: 2000, new_transportation_total: 1300, miscellaneous_expenses_total: 1000},
        {user_id: 5, work_life_total: 900, lodging_total: 100, new_home_total: 2500, new_transportation_total: 1200, miscellaneous_expenses_total: 1100},
        {user_id: 6, work_life_total: 1000, lodging_total: 50, new_home_total: 3000, new_transportation_total: 1100, miscellaneous_expenses_total: 1200},
      ]);
    });
};
