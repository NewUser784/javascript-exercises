const sumAll = function(num1 = 0, num2 = 0) {
    let sum = 0;
    let num1String = String(num1);
    let num2String = String(num2);

    if (num1 < 0 || num2 < 0 || num1String.includes(".") || num2String.includes(".") || typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    } else if (num1 < num2) {
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
