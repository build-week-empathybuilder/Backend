
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('calc2').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('calc2').insert([
        {userId: 1, newHousingTotal: 1200, workLifeTotal: 500, lodgingTotal: 300, newHomeTotal: 900, newTransportationTotal: 1600, miscellaneousExpensesTotal: 700},
        {userId: 2, newHousingTotal: 1400, workLifeTotal: 600, lodgingTotal: 250, newHomeTotal: 1000, newTransportationTotal: 1500, miscellaneousExpensesTotal: 800},
        {userId: 3, newHousingTotal: 2000, workLifeTotal: 700, lodgingTotal: 200, newHomeTotal: 1500, newTransportationTotal: 1400, miscellaneousExpensesTotal: 900},
        {userId: 4, newHousingTotal: 2600, workLifeTotal: 800, lodgingTotal: 150, newHomeTotal: 2000, newTransportationTotal: 1300, miscellaneousExpensesTotal: 1000},
        {userId: 5, newHousingTotal: 3200, workLifeTotal: 900, lodgingTotal: 100, newHomeTotal: 2500, newTransportationTotal: 1200, miscellaneousExpensesTotal: 1100},
        {userId: 6, newHousingTotal: 3800, workLifeTotal: 1000, lodgingTotal: 50, newHomeTotal: 3000, newTransportationTotal: 1100, miscellaneousExpensesTotal: 1200},
      ]);
    });
};
