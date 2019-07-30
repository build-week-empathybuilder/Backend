
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {user_id: 1, food_total: 500, groceries: 300, restaurants_takeout: 200},
        {user_id: 2, food_total: 600, groceries: 500, restaurants_takeout: 100},
        {user_id: 3, food_total: 700, groceries: 400, restaurants_takeout: 300},
        {user_id: 4, food_total: 800, groceries: 600, restaurants_takeout: 200},
        {user_id: 5, food_total: 900, groceries: 700, restaurants_takeout: 200},
        {user_id: 6, food_total: 1000, groceries: 800, restaurants_takeout: 200},
      ]);
    });
};
