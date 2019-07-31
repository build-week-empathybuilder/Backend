
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('miscellaneous_expenses').del()
    .then(function () {
      // Inserts seed entries
      return knex('miscellaneous_expenses').insert([
        {user_id: 1, miscellaneous_expenses_total: 700, storage_unit: 100, furniture_appliances: 300, pet_expenses: 100, cell_phone_disconnection_fees: 100, additional_security_measures: 100},
        {user_id: 2, miscellaneous_expenses_total: 800, storage_unit: 100, furniture_appliances: 400, pet_expenses: 100, cell_phone_disconnection_fees: 100, additional_security_measures: 100},
        {user_id: 3, miscellaneous_expenses_total: 900, storage_unit: 100, furniture_appliances: 500, pet_expenses: 100, cell_phone_disconnection_fees: 100, additional_security_measures: 100},
        {user_id: 4, miscellaneous_expenses_total: 1000, storage_unit: 200, furniture_appliances: 500, pet_expenses: 100, cell_phone_disconnection_fees: 100, additional_security_measures: 100},
        {user_id: 5, miscellaneous_expenses_total: 1100, storage_unit: 200, furniture_appliances: 600, pet_expenses: 100, cell_phone_disconnection_fees: 100, additional_security_measures: 100},
        {user_id: 6, miscellaneous_expenses_total: 1200, storage_unit: 300, furniture_appliances: 600, pet_expenses: 100, cell_phone_disconnection_fees: 100, additional_security_measures: 100},
      ]);
    });
};
