'use strict';

const ages = (persons) => {
  const result = {};

  for (const person in persons) {
    result[person] = persons[person].died - persons[person].born;
  }
  return result;
};

module.exports = { ages };
