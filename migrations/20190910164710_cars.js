
exports.up = function(knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments();
    table.string('vin', 17).unique().notNullable();
    table.string('make', 128).notNullable();
    table.string('model', 128).notNullable();
    table.integer('mileage').notNullable();
    table.integer('year').notNullable();
    table.string('transmission', 6);
    table.string('title_status',10);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
