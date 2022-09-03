'use strict';

const max = (matrix) => {
  let maxValue = 0;

  for (let item = 0; item < matrix.length; item += 1) {
    const currentMaxValue = Math.max(...matrix[item].flat(Infinity));

    if (currentMaxValue > maxValue) maxValue = currentMaxValue;
  }

  return maxValue;
};

module.exports = { max };
