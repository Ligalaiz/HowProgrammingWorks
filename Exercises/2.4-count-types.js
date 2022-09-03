'use strict';

const countTypesInArray = (arr) => {
  const hash = {};

  for (const val of arr) {
    if (hash[typeof val]) {
      hash[typeof val] = hash[typeof val] + 1;
    } else {
      hash[typeof val] = 1;
    }
  }
  return hash;
};

module.exports = { countTypesInArray };
