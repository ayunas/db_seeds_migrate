const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: 'JH4DB1550LS000111', make: 'Acura', model: 'Integra', year: 1990, mileage: faker.random.number()},
        {id: 2, vin: '1G6CD6988G4334344', make: 'Cadillac', model: 'DeVille', year: 1986, mileage: faker.random.number()},
        {id: 3, vin: '1J4GZ58S9VC710649', make: 'Jeep', model: 'Grand Cherokee', year: 1997, mileage: faker.random.number()},
        {id: 4, vin: 'J8DE5B16477903094', make: 'GMC', model: '5500', year: 2007, mileage: faker.random.number()},
        {id: 5, vin: 'JN8AZ1MU7AW004224', make: 'nissan', model: 'murano', year: 2010, mileage: faker.random.number()},
        {id: 6, vin: 'YV1AH852071023377', make: 'volvo', model: 's80', year: 2007, mileage: faker.random.number()},
      ]);
    });
};
