
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lodging').del()
    .then(function () {
      // Inserts seed entries
      return knex('lodging').insert([
        {user_id: 1, lodging_total: 300, hotel_rate: 100, expected_length_of_stay: 100},
        {user_id: 2, lodging_total: 400, hotel_rate: 150, expected_length_of_stay: 150},
        {user_id: 3, lodging_total: 500, hotel_rate: 200, expected_length_of_stay: 100},
        {user_id: 4, lodging_total: 600, hotel_rate: 200, expected_length_of_stay: 200},
        {user_id: 5, lodging_total: 700, hotel_rate: 100, expected_length_of_stay: 100},
        {user_id: 6, lodging_total: 800, hotel_rate: 300, expected_length_of_stay: 300},
      ]);
    });
};
