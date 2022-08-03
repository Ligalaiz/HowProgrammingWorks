'use strict';

const phonebook = [
  { name: 'First', phone: '+13124216700' },
  { name: 'Second', phone: '+12123841000' },
  { name: 'Third', phone: '+17036971776' },
];

const findPhoneByName = (name) => {
  for (const item of phonebook) {
    if (item.name === name) return item.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
