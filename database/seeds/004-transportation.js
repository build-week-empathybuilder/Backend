
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transportation').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('transportation').insert([
        {userId: 1, transportationTotal: 300, carInsurance: 100, carPayment: 100, gas: 50, parking: 50, publicTransit: 0},
        {userId: 2, transportationTotal: 400, carInsurance: 150, carPayment: 150, gas: 25, parking: 25, publicTransit: 50},
        {userId: 3, transportationTotal: 500, carInsurance: 200, carPayment: 100, gas: 50, parking: 50, publicTransit: 100},
        {userId: 4, transportationTotal: 600, carInsurance: 200, carPayment: 200, gas: 50, parking: 50, publicTransit: 100},
        {userId: 5, transportationTotal: 700, carInsurance: 100, carPayment: 100, gas: 200, parking: 100, publicTransit: 200},
        {userId: 6, transportationTotal: 800, carInsurance: 300, carPayment: 300, gas: 200, parking: 0, publicTransit: 0},
      ]);
    });
};
