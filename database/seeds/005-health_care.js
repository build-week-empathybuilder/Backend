
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('health_care').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('health_care').insert([
        {user_id: 1, health_care_total: 900, insurance_cost: 300, copays: 300, rx_and_medical_equipment: 300},
        {user_id: 2, health_care_total: 1000, insurance_cost: 400, copays: 400, rx_and_medical_equipment: 200},
        {user_id: 3, health_care_total: 1500, insurance_cost: 500, copays: 500, rx_and_medical_equipment: 500},
        {user_id: 4, health_care_total: 2000, insurance_cost: 600, copays: 600, rx_and_medical_equipment: 800},
        {user_id: 5, health_care_total: 2500, insurance_cost: 500, copays: 500, rx_and_medical_equipment: 1500},
        {user_id: 6, health_care_total: 3000, insurance_cost: 1000, copays: 1000, rx_and_medical_equipment: 1000},
      ]);
    });
};
