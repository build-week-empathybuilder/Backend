
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('newTransportation').del()
    .then(function () {
      // Inserts seed entries
      return knex('newTransportation').insert([
        {userId: 1, newTransportationTotal: 1600, carRental: 400, movingTruckRental: 500, gas: 600, airlineBusTickets: 100},
        {userId: 2, newTransportationTotal: 1500, carRental: 400, movingTruckRental: 500, gas: 500, airlineBusTickets: 100},
        {userId: 3, newTransportationTotal: 1400, carRental: 200, movingTruckRental: 300, gas: 800, airlineBusTickets: 100},
        {userId: 4, newTransportationTotal: 1300, carRental: 300, movingTruckRental: 400, gas: 500, airlineBusTickets: 100},
        {userId: 5, newTransportationTotal: 1200, carRental: 300, movingTruckRental: 400, gas: 400, airlineBusTickets: 100},
        {userId: 6, newTransportationTotal: 1100, carRental: 400, movingTruckRental: 500, gas: 100, airlineBusTickets: 100}
      ]);
    });
};
