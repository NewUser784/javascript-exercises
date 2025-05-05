const palindromes = function (string) {
    let reversedString = string.split("");
    reversedString.reverse();
    return reversedString.join("") === string;
};

// Do not edit below this line
module.exports = palindromes;
