
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transportation').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('transportation').insert([
        {user_id: 1, transportation_total: 300, car_insurance: 100, car_payment: 100, gas: 50, parking: 50, public_transit_costs: 0},
        {user_id: 2, transportation_total: 400, car_insurance: 150, car_payment: 150, gas: 25, parking: 25, public_transit_costs: 50},
        {user_id: 3, transportation_total: 500, car_insurance: 200, car_payment: 100, gas: 50, parking: 50, public_transit_costs: 100},
        {user_id: 4, transportation_total: 600, car_insurance: 200, car_payment: 200, gas: 50, parking: 50, public_transit_costs: 100},
        {user_id: 5, transportation_total: 700, car_insurance: 100, car_payment: 100, gas: 200, parking: 100, public_transit_costs: 200},
        {user_id: 6, transportation_total: 800, car_insurance: 300, car_payment: 300, gas: 200, parking: 0, public_transit_costs: 0},
      ]);
    });
};
