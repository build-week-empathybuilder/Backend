
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('calc1').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('calc1').insert([
        {userId: 1, foodTotal: 500, transportationTotal: 300, healthCareTotal: 900, debtTotal: 1600, housingTotal: 700, utilitiesTotal: 100, clothingTotal: 100},
        {userId: 2, foodTotal: 600, transportationTotal: 250, healthCareTotal: 1000, debtTotal: 1500, housingTotal: 800, utilitiesTotal: 90, clothingTotal: 110},
        {userId: 3, foodTotal: 700, transportationTotal: 200, healthCareTotal: 1500, debtTotal: 1400, housingTotal: 900, utilitiesTotal: 80, clothingTotal: 120},
        {userId: 4, foodTotal: 800, transportationTotal: 150, healthCareTotal: 2000, debtTotal: 1300, housingTotal: 1000, utilitiesTotal: 70, clothingTotal: 130},
        {userId: 5, foodTotal: 900, transportationTotal: 100, healthCareTotal: 2500, debtTotal: 1200, housingTotal: 1100, utilitiesTotal: 60, clothingTotal: 140},
        {userId: 6, foodTotal: 1000, transportationTotal: 50, healthCareTotal: 3000, debtTotal: 1100, housingTotal: 1200, utilitiesTotal: 50, clothingTotal: 150},
      ]);
    });
};
