const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species
  .find((specie) => animal === specie.name)
  .residents.every((resident) => resident.age >= age);

module.exports = getAnimalsOlderThan;
