const sumAll = function(num1 = 0, num2 = 0) {
    let sum = 0;

    for (; num1 <= num2; num1++) {
        sum += num1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
