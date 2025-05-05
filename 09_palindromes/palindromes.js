const palindromes = function (string) {
    let stringArray = string.toLowerCase().split("");

    // Gets array with only letters (based on the characters' ASCII codes)
    stringArray = stringArray.filter((character) => {
        let charCode = character.charCodeAt(0);
        if ((charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122)) {
            return true;
        } else {
            return false;
        }
    });

    let reversedString = stringArray.toReversed();
    return reversedString.join("") === stringArray.join("");
};

// Do not edit below this line
module.exports = palindromes;
