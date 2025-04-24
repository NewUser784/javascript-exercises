const sumAll = function(num1 = 0, num2 = 0) {
    let sum = 0;

    if (num1 < num2) {
        for (; num1 <= num2; num1++) {
            sum += num1;
        }
    } else {
        for (; num2 <= num1; num2++) {
            sum += num2;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
