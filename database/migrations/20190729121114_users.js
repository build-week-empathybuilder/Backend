
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
  // this is where the tables under CALC1 begin!
  .createTable('calc1', calc1 => {
    calc1.increments();
    
    calc1.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
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
    .inTable('users')
    .onDelete('CASCADE')
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
    .inTable('users')
    .onDelete('CASCADE')
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
    .inTable('users')
    .onDelete('CASCADE')
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
    .inTable('users')
    .onDelete('CASCADE')
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
    .inTable('users')
    .onDelete('CASCADE')
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
    .inTable('users')
    .onDelete('CASCADE')
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
    .inTable('users')
    .onDelete('CASCADE')
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
  // This is where the tables under CALC2 begin!
  .createTable('calc2', calc2 => {
    calc2.increments();

    calc2.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    calc2.integer('work_life_total')
    .unsigned();

    calc2.integer('lodging_total')
    .unsigned();

    calc2.integer('new_home_total')
    .unsigned();

    calc2.integer('new_transportation_total')
    .unsigned();

    calc2.integer('miscellaneous_expenses_total')
    .unsigned();
  })
  .createTable('work_life', work => {
    work.increments();

    work.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    work.integer('income_loss')
    .unsigned();

    work.integer('job_skills_training')
    .unsigned();

    work.integer('miscellaneous_fees')
    .unsigned();

    work.integer('work_life_total')
    .unsigned();
  })
  .createTable('lodging', lodge => {
    lodge.increments();

    lodge.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    lodge.integer('hotel_rate')
    .unsigned();

    lodge.integer('expected_length_of_stay')
    .unsigned();

    lodge.integer('lodging_total')
    .unsigned();
  })
  .createTable('new_home', home => {
    home.increments();

    home.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    home.integer('housing_deposit')
    .unsigned();

    home.integer('utilities_deposit')
    .unsigned();

    home.integer('rent')
    .unsigned();

    home.integer('miscellaneous_fees')
    .unsigned();

    home.integer('new_home_total')
    .unsigned();
  })
  .createTable('new_transportation', transport => {
    transport.increments();

    transport.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    transport.integer('car_rental')
    .unsigned();

    transport.integer('moving_truck_rental')
    .unsigned();

    transport.integer('gas')
    .unsigned();

    transport.integer('airline_bus_tickets')
    .unsigned();

    transport.integer('new_transportation_total')
    .unsigned();
  })
  .createTable('miscellaneous_expenses', misc => {
    misc.increments();

    misc.integer('user_id')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    misc.integer('storage_unit')
    .unsigned();

    misc.integer('furniture_appliances')
    .unsigned();

    misc.integer('pet_expenses')
    .unsigned();

    misc.integer('cell_phone_disconnection_fees')
    .unsigned();

    misc.integer('additional_security_measures')
    .unsigned();

    misc.integer('miscellaneous_expenses_total')
    .unsigned();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
