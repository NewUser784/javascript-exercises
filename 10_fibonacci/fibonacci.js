const fibonacci = function(inputNumber) {
    let sum = 0;
    let num1 = 1;
    let num2 = 1;
    inputNumber = +inputNumber;

    if (inputNumber < 0) {
        return "OOPS";
    } else if (inputNumber === 0) {
        return 0;
    } else if (inputNumber === 1 || inputNumber === 2) {
        return 1;
    } else {
        for (let i = 3; i <= inputNumber; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = fibonacci;
