
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('newHome').del()
    .then(function () {
      // Inserts seed entries
      return knex('newHome').insert([
        {userId: 1, newHomeTotal: 900, housingDeposit: 200, utilitiesDeposit: 300, rent: 300, miscellaneousFees: 100},
        {userId: 2, newHomeTotal: 1000, housingDeposit: 300, utilitiesDeposit: 400, rent: 200, miscellaneousFees: 100},
        {userId: 3, newHomeTotal: 1500, housingDeposit: 400, utilitiesDeposit: 500, rent: 500, miscellaneousFees: 100},
        {userId: 4, newHomeTotal: 2000, housingDeposit: 500, utilitiesDeposit: 600, rent: 800, miscellaneousFees: 100},
        {userId: 5, newHomeTotal: 2500, housingDeposit: 400, utilitiesDeposit: 500, rent: 1500, miscellaneousFees: 100},
        {userId: 6, newHomeTotal: 3000, housingDeposit: 2900, utilitiesDeposit: 1000, rent: 1000, miscellaneousFees: 100},
      ]);
    });
};
