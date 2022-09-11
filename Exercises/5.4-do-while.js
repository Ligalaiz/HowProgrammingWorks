'use strict';

const sum = (...args) => {
  let r = 0;
  let l = args.length - 1;
  if (l < 0) return 0;
  do {
    r += args[l];
    l -= 1;
  } while (l >= 0);

  return r;
};

module.exports = { sum };
