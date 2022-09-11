'use strict';

const fn = () => {
  const a = {
    name: 'a',
  };

  let b = {
    name: 'b',
  };

  a.name = 'b';

  b.name = 'a';

  b = {};
};

module.exports = { fn };
