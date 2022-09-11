'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Impement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet


const Press = function() {
  let count = 1;
  let fn = checkPin;

  this.press = (args) => {
    if (count < 4) {
      fn = fn.bind(null, ...args);
      count += 1;
      return this;
    }

    count = 1;
    const result = fn(...args);
    fn = checkPin;
    return result;
  };

  return this.press;
};

const press = new Press();

module.exports = { press };
