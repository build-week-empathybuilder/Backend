
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('debt').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('debt').insert([
        {user_id: 1, debt_total: 1600, personal_loans: 500, student_loans: 500, credit_card_payments: 600},
        {user_id: 2, debt_total: 1500, personal_loans: 500, student_loans: 500, credit_card_payments: 500},
        {user_id: 3, debt_total: 1400, personal_loans: 300, student_loans: 300, credit_card_payments: 800},
        {user_id: 4, debt_total: 1300, personal_loans: 400, student_loans: 400, credit_card_payments: 500},
        {user_id: 5, debt_total: 1200, personal_loans: 400, student_loans: 400, credit_card_payments: 400},
        {user_id: 6, debt_total: 1100, personal_loans: 500, student_loans: 500, credit_card_payments: 100}
      ]);
    });
};
