
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('healthCare').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('healthCare').insert([
        {userId: 1, healthCareTotal: 900, insuranceCost: 300, copays: 300, rxAndMedicalEquipment: 300},
        {userId: 2, healthCareTotal: 1000, insuranceCost: 400, copays: 400, rxAndMedicalEquipment: 200},
        {userId: 3, healthCareTotal: 1500, insuranceCost: 500, copays: 500, rxAndMedicalEquipment: 500},
        {userId: 4, healthCareTotal: 2000, insuranceCost: 600, copays: 600, rxAndMedicalEquipment: 800},
        {userId: 5, healthCareTotal: 2500, insuranceCost: 500, copays: 500, rxAndMedicalEquipment: 1500},
        {userId: 6, healthCareTotal: 3000, insuranceCost: 1000, copays: 1000, rxAndMedicalEquipment: 1000},
      ]);
    });
};
