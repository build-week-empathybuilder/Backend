
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('total').del()
    .then(function () {
      // Inserts seed entries
      return knex('total').insert([
        {userId: 1, runningTotal: 8700, calc1Total: 4700, calc2Total: 4000},
        {userId: 2, runningTotal: 8650, calc1Total: 4350, calc2Total: 4300},
        {userId: 3, runningTotal: 9900, calc1Total: 4900, calc2Total: 5000},
        {userId: 4, runningTotal: 11150, calc1Total: 5450, calc2Total: 5700},
        {userId: 5, runningTotal: 12400, calc1Total: 6000, calc2Total: 6400},
        {userId: 6, runningTotal: 13650, calc1Total: 6550, calc2Total: 7100},
      ]);
    });
};
