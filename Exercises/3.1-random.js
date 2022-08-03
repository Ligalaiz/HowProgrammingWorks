'use strict';

const random = (min, max) => {
  if (min === 0 || max === 0) return 0;
  if (min === max) return min;
  return Math.floor(Math.random() *  max - min + 1 + min);
};

module.exports = { random };
