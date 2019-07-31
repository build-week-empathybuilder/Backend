
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lodging').del()
    .then(function () {
      // Inserts seed entries
      return knex('lodging').insert([
        {userId: 1, lodgingTotal: 300, hotelRate: 100, expectedLengthOfStay: 100},
        {userId: 2, lodgingTotal: 400, hotelRate: 150, expectedLengthOfStay: 150},
        {userId: 3, lodgingTotal: 500, hotelRate: 200, expectedLengthOfStay: 100},
        {userId: 4, lodgingTotal: 600, hotelRate: 200, expectedLengthOfStay: 200},
        {userId: 5, lodgingTotal: 700, hotelRate: 100, expectedLengthOfStay: 100},
        {userId: 6, lodgingTotal: 800, hotelRate: 300, expectedLengthOfStay: 300},
      ]);
    });
};
