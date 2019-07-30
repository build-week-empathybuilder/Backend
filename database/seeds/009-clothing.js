
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clothing').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('clothing').insert([
        {user_id: 1, clothing_total: 100, adults: 40, children: 40, cleaning_laundry: 20},
        {user_id: 2, clothing_total: 110, adults: 50, children: 50, cleaning_laundry: 10},
        {user_id: 3, clothing_total: 120, adults: 50, children: 50, cleaning_laundry: 20},
        {user_id: 4, clothing_total: 130, adults: 60, children: 60, cleaning_laundry: 10},
        {user_id: 5, clothing_total: 140, adults: 60, children: 60, cleaning_laundry: 20},
        {user_id: 6, clothing_total: 150, adults: 70, children: 70, cleaning_laundry: 10},
      ]);
    });
};
