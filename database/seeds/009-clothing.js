
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clothing').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('clothing').insert([
        {userId: 1, clothingTotal: 100, adults: 40, children: 40, cleaningLaundry: 20},
        {userId: 2, clothingTotal: 110, adults: 50, children: 50, cleaningLaundry: 10},
        {userId: 3, clothingTotal: 120, adults: 50, children: 50, cleaningLaundry: 20},
        {userId: 4, clothingTotal: 130, adults: 60, children: 60, cleaningLaundry: 10},
        {userId: 5, clothingTotal: 140, adults: 60, children: 60, cleaningLaundry: 20},
        {userId: 6, clothingTotal: 150, adults: 70, children: 70, cleaningLaundry: 10},
      ]);
    });
};
