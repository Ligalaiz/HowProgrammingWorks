'use strict';


const sum = (...args) => {
  let r = 0;
  let l = args.length - 1;
  while (l >= 0) {
    r += args[l];
    l -= 1;
  }
  return r;
};

module.exports = { sum };
