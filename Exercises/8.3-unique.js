'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const hash = {};

  return array.filter((i) => {
    const temp = hash?.[i];

    if (temp) return false;
    hash[i] = i;
    return true;
  });
};

module.exports = { unique };
