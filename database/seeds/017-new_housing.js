
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('newHousing').del()
    .then(function () {
      // Inserts seed entries
      return knex('newHousing').insert([
        {userId: 1, newHousingTotal: 1200, lodgingTotal: 300, hotelRate: 100, expectedLengthOfStay: 100, newHomeTotal: 900, housingDeposit: 200, utilitiesDeposit: 300, rent: 300, miscellaneousFees: 100},
        {userId: 2, newHousingTotal: 1400, lodgingTotal: 400, hotelRate: 150, expectedLengthOfStay: 150, newHomeTotal: 1000, housingDeposit: 300, utilitiesDeposit: 400, rent: 200, miscellaneousFees: 100},
        {userId: 3, newHousingTotal: 2000, lodgingTotal: 500, hotelRate: 200, expectedLengthOfStay: 100, newHomeTotal: 1500, housingDeposit: 400, utilitiesDeposit: 500, rent: 500, miscellaneousFees: 100},
        {userId: 4, newHousingTotal: 2600, lodgingTotal: 600, hotelRate: 200, expectedLengthOfStay: 200, newHomeTotal: 2000, housingDeposit: 500, utilitiesDeposit: 600, rent: 800, miscellaneousFees: 100},
        {userId: 5, newHousingTotal: 3200, lodgingTotal: 700, hotelRate: 100, expectedLengthOfStay: 100, newHomeTotal: 2500, housingDeposit: 400, utilitiesDeposit: 500, rent: 1500, miscellaneousFees: 100},
        {userId: 6, newHousingTotal: 3800, lodgingTotal: 800, hotelRate: 300, expectedLengthOfStay: 300, newHomeTotal: 3000, housingDeposit: 2900, utilitiesDeposit: 1000, rent: 1000, miscellaneousFees: 100},
      ]);
    });
};
