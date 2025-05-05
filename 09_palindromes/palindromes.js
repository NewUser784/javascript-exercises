const palindromes = function (string) {
    let stringArray = string.toLowerCase().split("");

    // Gets array with only letters (based on the characters' ASCII codes)
    stringArray = stringArray.filter((character) => {
        if (character.charCodeAt(0) < 97 || character.charCodeAt(0) > 122) {
            return false;
        } else {
            return true;
        }
    });

    let reversedString = stringArray.toReversed();
    return reversedString.join("") === stringArray.join("");
};

// Do not edit below this line
module.exports = palindromes;
