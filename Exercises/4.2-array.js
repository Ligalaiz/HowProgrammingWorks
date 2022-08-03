'use strict';

const array = () => {
  let s = [];
  const f = (v) => s[v];
  f.push = (v) => s = [...s, v];
  f.pop = () => s.splice(s.length - 1, 1)[0];
  return f;
};

module.exports = { array };
