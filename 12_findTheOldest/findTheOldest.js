const findTheOldest = function(people) {
    let biggestAge = 0;
    let oldestPersonObject;

    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let currentAge;
        if (person.yearOfDeath === undefined) {
            currentAge = 2025 - person.yearOfBirth;
        } else {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        }
        
        if (currentAge > biggestAge) {
            biggestAge = currentAge;
            oldestPersonObject = person;
        }
    }

    return oldestPersonObject;
};

// Do not edit below this line
module.exports = findTheOldest;
