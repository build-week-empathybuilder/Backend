
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();
      users
      .string('username', 255)
      .notNullable()
      .unique();
      users
      .string('password', 255)
      .notNullable();
      users
      .string('email', 255)
      .notNullable();
  })
  .createTable('calc1', calc1 => {
    calc1.increments();
    
    calc1.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    calc1.integer('food_total')
    .unsigned();

    calc1.integer('transportation_total')
    .unsigned();

    calc1.integer('health_care_total')
    .unsigned();

    calc1.integer('debt_total')
    .unsigned();

    calc1.integer('housing_total')
    .unsigned();

    calc1.integer('utilities_total')
    .unsigned();

    calc1.integer('clothing_total')
    .unsigned();
  })
  .createTable('food', food => {
    food.increments();

    food.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('calc1')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    food.integer('groceries')
    .unsigned();

    food.integer('restaurants_takeout')
    .unsigned();

    food.integer('food_total')
    .unsigned();
  })
  .createTable('transportation', car => {
    car.increments();

    car.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('calc1')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    car.integer('car_insurance')
    .unsigned();

    car.integer('car_payment')
    .unsigned();

    car.integer('gas')
    .unsigned();

    car.integer('parking')
    .unsigned();

    car.integer('public_transit_costs')
    .unsigned();

    car.integer('transportation_total')
    .unsigned();
  })
  .createTable('health_care', health => {
    health.increments();

    health.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('calc1')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    health.integer('insurance_cost')
    .unsigned();

    health.integer('copays')
    .unsigned();

    health.integer('rx_and_medical_equipment')
    .unsigned();

    health.integer('health_care_total')
    .unsigned();
  })
  .createTable('debt', debt => {
    debt.increments();

    debt.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('calc1')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    debt.integer('personal_loans')
    .unsigned();

    debt.integer('student_loans')
    .unsigned();

    debt.integer('credit_card_payments')
    .unsigned();

    debt.integer('debt_total')
    .unsigned();
  })
  .createTable('housing', housing => {
    housing.increments();

    housing.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('calc1')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    housing.integer('rent')
    .unsigned();

    housing.integer('deposit')
    .unsigned();

    housing.integer('housing_total')
    .unsigned();
  })
  .createTable('utilities', utilities => {
    utilities.increments();

    utilities.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('calc1')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    utilities.integer('electricity')
    .unsigned();

    utilities.integer('gas')
    .unsigned();

    utilities.integer('water')
    .unsigned();

    utilities.integer('phone_mobile')
    .unsigned();

    utilities.integer('internet')
    .unsigned();

    utilities.integer('cable')
    .unsigned();

    utilities.integer('utilities_total')
    .unsigned();
  })
  .createTable('clothing', clothing => {
    clothing.increments();

    clothing.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('calc1')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');

    clothing.integer('adults')
    .unsigned();

    clothing.integer('children')
    .unsigned();

    clothing.integer('cleaning_laundry')
    .unsigned();

    clothing.integer('clothing_total')
    .unsigned();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
