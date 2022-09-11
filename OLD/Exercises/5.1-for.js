'use strict';

const sum = (...args) => {
  let result = 0;
  for (let i = 0; i < args.length; i += 1) result += args[i];
  return result;
};

module.exports = { sum };
