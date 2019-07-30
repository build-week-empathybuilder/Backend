
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('utilities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('utilities').insert([
        {user_id: 1, utilities_total: 100, electricity: 20, gas: 20, water: 20, phone_mobile: 20, internet: 10, cable: 10},
        {user_id: 2, utilities_total: 90, electricity: 20, gas: 20, water: 20, phone_mobile: 10, internet: 10, cable: 10},
        {user_id: 3, utilities_total: 80, electricity: 20, gas: 20, water: 10, phone_mobile: 10, internet: 10, cable: 10},
        {user_id: 4, utilities_total: 70, electricity: 20, gas: 10, water: 10, phone_mobile: 10, internet: 10, cable: 10},
        {user_id: 5, utilities_total: 60, electricity: 10, gas: 10, water: 10, phone_mobile: 10, internet: 10, cable: 10},
        {user_id: 6, utilities_total: 50, electricity: 10, gas: 10, water: 10, phone_mobile: 10, internet: 5, cable: 5},
      ]);
    });
};
