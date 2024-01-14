const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((sum, current) => sum + current, 0);
};

const multiply = function(a) {
	return a.reduce((sum, current) => sum * current);
};

const power = function(a , b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else {
    let arr = [];
    for (i = a; i > 0; i--) {
      arr.push(i);
    };
    return arr.reduce((sum, current) => sum * current);
  };
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
