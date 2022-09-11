'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) =>
  array1.filter((i) => {
    const index = array2.indexOf(i);

    if (index !== -1) return false;
    return true;
  });

module.exports = { difference };
