'use strict';

const square = (a) => a ** 2;

const cube = (a) => a ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
  const result = [];
  for (let i = 0; i <= 9; i += 1) result.push(average(square(i), cube(i)));
  return result;
};

module.exports = { square, cube, average, calculate };
