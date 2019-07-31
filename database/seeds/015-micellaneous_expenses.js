
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('miscellaneousExpenses').del()
    .then(function () {
      // Inserts seed entries
      return knex('miscellaneousExpenses').insert([
        {userId: 1, miscellaneousExpensesTotal: 700, storageUnit: 100, furnitureAppliances: 300, petExpenses: 100, cellPhoneDisconnectionFees: 100, additionalSecurityMeasures: 100},
        {userId: 2, miscellaneousExpensesTotal: 800, storageUnit: 100, furnitureAppliances: 400, petExpenses: 100, cellPhoneDisconnectionFees: 100, additionalSecurityMeasures: 100},
        {userId: 3, miscellaneousExpensesTotal: 900, storageUnit: 100, furnitureAppliances: 500, petExpenses: 100, cellPhoneDisconnectionFees: 100, additionalSecurityMeasures: 100},
        {userId: 4, miscellaneousExpensesTotal: 1000, storageUnit: 200, furnitureAppliances: 500, petExpenses: 100, cellPhoneDisconnectionFees: 100, additionalSecurityMeasures: 100},
        {userId: 5, miscellaneousExpensesTotal: 1100, storageUnit: 200, furnitureAppliances: 600, petExpenses: 100, cellPhoneDisconnectionFees: 100, additionalSecurityMeasures: 100},
        {userId: 6, miscellaneousExpensesTotal: 1200, storageUnit: 300, furnitureAppliances: 600, petExpenses: 100, cellPhoneDisconnectionFees: 100, additionalSecurityMeasures: 100},
      ]);
    });
};
