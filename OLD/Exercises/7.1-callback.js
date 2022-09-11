'use strict';

const iterate = (obj, callback) => {
  for (const [key, value] of Object.entries(obj)) {
    callback(key, value, obj);
  }
};

module.exports = { iterate };
