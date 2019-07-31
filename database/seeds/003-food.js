
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {userId: 1, foodTotal: 500, groceries: 300, restaurantsTakeout: 200},
        {userId: 2, foodTotal: 600, groceries: 500, restaurantsTakeout: 100},
        {userId: 3, foodTotal: 700, groceries: 400, restaurantsTakeout: 300},
        {userId: 4, foodTotal: 800, groceries: 600, restaurantsTakeout: 200},
        {userId: 5, foodTotal: 900, groceries: 700, restaurantsTakeout: 200},
        {userId: 6, foodTotal: 1000, groceries: 800, restaurantsTakeout: 200},
      ]);
    });
};
