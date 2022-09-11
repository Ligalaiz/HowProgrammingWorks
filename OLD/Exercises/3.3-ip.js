'use strict';

const ipToInt = (i, c = 3) => i.split('.').map((i) => +i).reduce((a, n) => {
  for (let i = c; i > 0; i -= 1) n <<= 8;
  a += n;
  c -= 1;
  return a;
}, 0);

module.exports = { ipToInt };
