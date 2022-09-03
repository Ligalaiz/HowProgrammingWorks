'use strict';

const phonebook = {
  First: '+13124216700',
  Second: '+12123841000',
  Third: '+17036971776',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
