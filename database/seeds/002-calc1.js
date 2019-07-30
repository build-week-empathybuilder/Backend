
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('calc1').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('calc1').insert([
        {user_id: 1, food_total: 500, transportation_total: 300, health_care_total: 900, debt_total: 1600, housing_total: 700, utilities_total: 100, clothing_total: 100},
        {user_id: 2, food_total: 600, transportation_total: 250, health_care_total: 1000, debt_total: 1500, housing_total: 800, utilities_total: 90, clothing_total: 110},
        {user_id: 3, food_total: 700, transportation_total: 200, health_care_total: 1500, debt_total: 1400, housing_total: 900, utilities_total: 80, clothing_total: 120},
        {user_id: 4, food_total: 800, transportation_total: 150, health_care_total: 2000, debt_total: 1300, housing_total: 1000, utilities_total: 70, clothing_total: 130},
        {user_id: 5, food_total: 900, transportation_total: 100, health_care_total: 2500, debt_total: 1200, housing_total: 1100, utilities_total: 60, clothing_total: 140},
        {user_id: 6, food_total: 1000, transportation_total: 50, health_care_total: 3000, debt_total: 1100, housing_total: 1200, utilities_total: 50, clothing_total: 150},
      ]);
    });
};
