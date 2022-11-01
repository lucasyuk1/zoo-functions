const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  return data.employees
    .find((flName) => employeeName === flName.firstName || employeeName === flName.lastName);
};

module.exports = getEmployeeByName;
