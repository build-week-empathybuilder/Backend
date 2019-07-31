
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('new_transportation').del()
    .then(function () {
      // Inserts seed entries
      return knex('new_transportation').insert([
        {user_id: 1, new_transportation_total: 1600, car_rental: 400, moving_truck_rental: 500, gas: 600, airline_bus_tickets: 100},
        {user_id: 2, new_transportation_total: 1500, car_rental: 400, moving_truck_rental: 500, gas: 500, airline_bus_tickets: 100},
        {user_id: 3, new_transportation_total: 1400, car_rental: 200, moving_truck_rental: 300, gas: 800, airline_bus_tickets: 100},
        {user_id: 4, new_transportation_total: 1300, car_rental: 300, moving_truck_rental: 400, gas: 500, airline_bus_tickets: 100},
        {user_id: 5, new_transportation_total: 1200, car_rental: 300, moving_truck_rental: 400, gas: 400, airline_bus_tickets: 100},
        {user_id: 6, new_transportation_total: 1100, car_rental: 400, moving_truck_rental: 500, gas: 100, airline_bus_tickets: 100}
      ]);
    });
};
