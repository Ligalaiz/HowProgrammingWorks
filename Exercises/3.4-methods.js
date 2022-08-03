'use strict';

const methods = (iface) => {
  const objectKeys = Object.keys(iface);

  const result = objectKeys.reduce((acc, cur) => {
    acc.push([iface[cur].name, iface[cur].length]);

    return acc;
  }, []);

  return result;
};

module.exports = { methods };
