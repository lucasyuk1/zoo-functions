const data = require('../data/zoo_data');

const getSpecies = (ids) =>
  ids.map((id) => data.species.find((specie) => specie.id === id).name);

const getLocations = (ids) =>
  ids.map((id) => data.species.find((specie) => specie.id === id).location);

const { employees } = data;

const getEmployees = (ids) => {
  const employee = employees.find((person) =>
    person.id === ids.id || person.firstName === ids.name || person.lastName === ids.name);
  const { firstName, lastName, id, responsibleFor } = employee;

  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(responsibleFor),
    locations: getLocations(responsibleFor),
  };
};

const employeesArray = () =>
  employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee.responsibleFor),
    locations: getLocations(employee.responsibleFor),
  }));

function getEmployeesCoverage(obj) {
  try {
    if (!obj) return employeesArray();
    if (obj.id || obj.name) return getEmployees(obj);
  } catch (error) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
