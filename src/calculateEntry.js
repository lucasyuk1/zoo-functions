const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined' || Object.entries(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  return child * data.prices.child + adult * data.prices.adult + senior * data.prices.senior;
}

module.exports = { calculateEntry, countEntrants };
