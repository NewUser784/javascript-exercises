const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let arrayLength = array.length;
	return array.reduce((total, item) => {
    if (arrayLength === 1)
      return item;
    else
      return total + item;
  }, 0);
};

const multiply = function(array) {
  let arrayLength = array.length;
  return array.reduce((total, item) => {
    if (arrayLength === 1)
      return item;
    else  
      return total * item;
  }, 1);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = 1; i !== num; i++) {
      total *= (i + 1);
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
