'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i += 1) {
    const type = types[i].name.toLowerCase();
    const typeArg = typeof args[i];

    if (type !== typeArg) throw new TypeError('wrong type 1');
  }
  const result = fn(...args);
  const typeRes = typeof result;
  const typeControl = types[types.length - 1].name.toLowerCase();

  if (typeRes !== typeControl) throw new TypeError('wrong type2');
  return result;
};

module.exports = { contract };
