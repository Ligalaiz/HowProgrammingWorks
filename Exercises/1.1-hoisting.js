'use strict';

const fn = () => {
  console.log(a);
  function a() {
    return  'a';
  }
  return a;
};

module.exports = { fn };
