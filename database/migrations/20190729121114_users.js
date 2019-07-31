
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
    
    calc1.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    calc1.integer('foodTotal')
    .unsigned();

    calc1.integer('transportationTotal')
    .unsigned();

    calc1.integer('healthCareTotal')
    .unsigned();

    calc1.integer('debtTotal')
    .unsigned();

    calc1.integer('housingTotal')
    .unsigned();

    calc1.integer('utilitiesTotal')
    .unsigned();

    calc1.integer('clothingTotal')
    .unsigned();
  })
  .createTable('food', food => {
    food.increments();

    food.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    food.integer('groceries')
    .unsigned();

    food.integer('restaurantsTakeout')
    .unsigned();

    food.integer('foodTotal')
    .unsigned();
  })
  .createTable('transportation', car => {
    car.increments();

    car.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    car.integer('carInsurance')
    .unsigned();

    car.integer('carPayment')
    .unsigned();

    car.integer('gas')
    .unsigned();

    car.integer('parking')
    .unsigned();

    car.integer('publicTransit')
    .unsigned();

    car.integer('transportationTotal')
    .unsigned();
  })
  .createTable('healthCare', health => {
    health.increments();

    health.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    health.integer('insuranceCost')
    .unsigned();

    health.integer('copays')
    .unsigned();

    health.integer('rxAndMedicalEquipment')
    .unsigned();

    health.integer('healthCareTotal')
    .unsigned();
  })
  .createTable('debt', debt => {
    debt.increments();

    debt.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    debt.integer('personalLoans')
    .unsigned();

    debt.integer('studentLoans')
    .unsigned();

    debt.integer('creditCardPayments')
    .unsigned();

    debt.integer('debtTotal')
    .unsigned();
  })
  .createTable('housing', housing => {
    housing.increments();

    housing.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    housing.integer('rent')
    .unsigned();

    housing.integer('deposit')
    .unsigned();

    housing.integer('housingTotal')
    .unsigned();
  })
  .createTable('utilities', utilities => {
    utilities.increments();

    utilities.integer('userId')
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

    utilities.integer('phoneMobile')
    .unsigned();

    utilities.integer('internet')
    .unsigned();

    utilities.integer('cable')
    .unsigned();

    utilities.integer('utilitiesTotal')
    .unsigned();
  })
  .createTable('clothing', clothing => {
    clothing.increments();

    clothing.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    clothing.integer('adults')
    .unsigned();

    clothing.integer('children')
    .unsigned();

    clothing.integer('cleaningLaundry')
    .unsigned();

    clothing.integer('clothingTotal')
    .unsigned();
  })
  // This is where the tables under CALC2 begin!
  .createTable('calc2', calc2 => {
    calc2.increments();

    calc2.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    calc2.integer('workLifeTotal')
    .unsigned();

    calc2.integer('lodgingTotal')
    .unsigned();

    calc2.integer('newHomeTotal')
    .unsigned();

    calc2.integer('newTransportationTotal')
    .unsigned();

    calc2.integer('miscellaneousExpensesTotal')
    .unsigned();
  })
  .createTable('workLife', work => {
    work.increments();

    work.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    work.integer('incomeLoss')
    .unsigned();

    work.integer('jobSkillsTraining')
    .unsigned();

    work.integer('miscellaneousFees')
    .unsigned();

    work.integer('workLifeTotal')
    .unsigned();
  })
  .createTable('lodging', lodge => {
    lodge.increments();

    lodge.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    lodge.integer('hotelRate')
    .unsigned();

    lodge.integer('expectedLengthOfStay')
    .unsigned();

    lodge.integer('lodgingTotal')
    .unsigned();
  })
  .createTable('newHome', home => {
    home.increments();

    home.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    home.integer('housingDeposit')
    .unsigned();

    home.integer('utilitiesDeposit')
    .unsigned();

    home.integer('rent')
    .unsigned();

    home.integer('miscellaneousFees')
    .unsigned();

    home.integer('newHomeTotal')
    .unsigned();
  })
  .createTable('newTransportation', transport => {
    transport.increments();

    transport.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    transport.integer('carRental')
    .unsigned();

    transport.integer('movingTruckRental')
    .unsigned();

    transport.integer('gas')
    .unsigned();

    transport.integer('airlineBusTickets')
    .unsigned();

    transport.integer('newTransportationTotal')
    .unsigned();
  })
  .createTable('miscellaneousExpenses', misc => {
    misc.increments();

    misc.integer('userId')
    .unsigned()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');

    misc.integer('storageUnit')
    .unsigned();

    misc.integer('furnitureAppliances')
    .unsigned();

    misc.integer('petExpenses')
    .unsigned();

    misc.integer('cellPhoneDisconnectionFees')
    .unsigned();

    misc.integer('additionalSecurityMeasures')
    .unsigned();

    misc.integer('miscellaneousExpensesTotal')
    .unsigned();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
