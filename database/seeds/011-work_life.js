
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workLife').del()
    .then(function () {
      // Inserts seed entries
      return knex('workLife').insert([
        {userId: 1, workLifeTotal: 500, incomeLoss: 300, jobSkillsTraining: 100, miscellaneousFees: 100},
        {userId: 2, workLifeTotal: 600, incomeLoss: 400, jobSkillsTraining: 100, miscellaneousFees: 100},
        {userId: 3, workLifeTotal: 700, incomeLoss: 400, jobSkillsTraining: 200, miscellaneousFees: 100},
        {userId: 4, workLifeTotal: 800, incomeLoss: 600, jobSkillsTraining: 100, miscellaneousFees: 100},
        {userId: 5, workLifeTotal: 900, incomeLoss: 700, jobSkillsTraining: 100, miscellaneousFees: 100},
        {userId: 6, workLifeTotal: 1000, incomeLoss: 800, jobSkillsTraining: 100, miscellaneousFees: 100},
      ]);
    });
};
