const removeFromArray = function(array = []) {
    let indexOfValue;
    let i = 1;

    for (; i < arguments.length; ) {
        indexOfValue = array.indexOf(arguments[i]);
        if(indexOfValue === -1) {
            i++;
        } else {
            array.splice(indexOfValue, 1);
        }
    }
    return array;
}



// Do not edit below this line
module.exports = removeFromArray;
