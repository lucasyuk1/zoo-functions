const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const fSpecieId = data.employees.find((firstSpecie) => firstSpecie.id === id).responsibleFor[0];
  const { residents } = data.species.find((resident) => resident.id === fSpecieId);
  const ageOrder = residents.sort((a, b) => b.age - a.age);
  return Object.values(ageOrder[0]);
}

module.exports = getOldestFromFirstSpecies;
