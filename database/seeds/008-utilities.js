
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('utilities').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('utilities').insert([
        {userId: 1, utilitiesTotal: 100, electricity: 20, gas: 20, water: 20, phoneMobile: 20, internet: 10, cable: 10},
        {userId: 2, utilitiesTotal: 90, electricity: 20, gas: 20, water: 20, phoneMobile: 10, internet: 10, cable: 10},
        {userId: 3, utilitiesTotal: 80, electricity: 20, gas: 20, water: 10, phoneMobile: 10, internet: 10, cable: 10},
        {userId: 4, utilitiesTotal: 70, electricity: 20, gas: 10, water: 10, phoneMobile: 10, internet: 10, cable: 10},
        {userId: 5, utilitiesTotal: 60, electricity: 10, gas: 10, water: 10, phoneMobile: 10, internet: 10, cable: 10},
        {userId: 6, utilitiesTotal: 50, electricity: 10, gas: 10, water: 10, phoneMobile: 10, internet: 5, cable: 5},
      ]);
    });
};
