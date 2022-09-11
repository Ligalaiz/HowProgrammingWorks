'use strict';

const rangeOdd = (a, b) => {
  if (b < a) return [];
  const array = [...new Array(b - a + 1)];
  const result = array.map((_, i) => a + i).filter((item) => item % 2);

  return result;
};

module.exports = { rangeOdd };
