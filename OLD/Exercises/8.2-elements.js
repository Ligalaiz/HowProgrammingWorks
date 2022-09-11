'use strict';

const removeElements = (array, ...items) => {
  for (let i = 0; i < items.length; i += 1) {
    const index = array.indexOf(items[i]);
    if (index !== -1) {
      array.splice(index, 1);
      i -= 1;
    }
  }
};

module.exports = { removeElements };
