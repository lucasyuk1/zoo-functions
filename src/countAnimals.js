const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const objAnimals = {};
  if (animal === undefined) {
    data.species.forEach((specie) => { objAnimals[specie.name] = specie.residents.length; });
    return objAnimals;
  } if (animal.sex) {
    return data.species.find((specie) => specie.name === animal.specie)
      .residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return data.species.find((specie) => specie.name === animal.specie).residents.length;
};

module.exports = countAnimals;
