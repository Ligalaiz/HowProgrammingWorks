'use strict';

const range = (a, b) => {
  if (b < a) return [];
  const array = [...new Array(b - a + 1)];
  const result = array.map((_, i) => a + i);

  return result;
};

module.exports = { range };
