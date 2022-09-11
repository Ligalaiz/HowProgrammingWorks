'use strict';

const generateKey = (length, possible) => {
  let result = '';

  const random = Math.floor(Math.random() * (possible.length - 1 + 1) + 1);
  for (let i = 0; i < length; i += 1) result += possible[random];

  return result;
};

module.exports = { generateKey };
