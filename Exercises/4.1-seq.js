'use strict';

const seq = (a, r = []) =>
  (typeof a !== 'number' ?
    (s) => seq(s, [...r, a]) :
    r.reduceRight((c, u) => u(c), a));

module.exports = { seq };
