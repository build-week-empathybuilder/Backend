
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('debt').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('debt').insert([
        {userId: 1, debtTotal: 1600, personalLoans: 500, studentLoans: 500, creditCardPayments: 600},
        {userId: 2, debtTotal: 1500, personalLoans: 500, studentLoans: 500, creditCardPayments: 500},
        {userId: 3, debtTotal: 1400, personalLoans: 300, studentLoans: 300, creditCardPayments: 800},
        {userId: 4, debtTotal: 1300, personalLoans: 400, studentLoans: 400, creditCardPayments: 500},
        {userId: 5, debtTotal: 1200, personalLoans: 400, studentLoans: 400, creditCardPayments: 400},
        {userId: 6, debtTotal: 1100, personalLoans: 500, studentLoans: 500, creditCardPayments: 100}
      ]);
    });
};
