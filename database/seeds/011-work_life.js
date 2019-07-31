
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('work_life').del()
    .then(function () {
      // Inserts seed entries
      return knex('work_life').insert([
        {user_id: 1, work_life_total: 500, income_loss: 300, job_skills_training: 100, miscellaneous_fees: 100},
        {user_id: 2, work_life_total: 600, income_loss: 400, job_skills_training: 100, miscellaneous_fees: 100},
        {user_id: 3, work_life_total: 700, income_loss: 400, job_skills_training: 200, miscellaneous_fees: 100},
        {user_id: 4, work_life_total: 800, income_loss: 600, job_skills_training: 100, miscellaneous_fees: 100},
        {user_id: 5, work_life_total: 900, income_loss: 700, job_skills_training: 100, miscellaneous_fees: 100},
        {user_id: 6, work_life_total: 1000, income_loss: 800, job_skills_training: 100, miscellaneous_fees: 100},
      ]);
    });
};
