// const people = [
//     {name: "Carly", yearOfBirth: 1942, yearOfDeath: 1970,},
//     {name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011,},
//     {name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941,},
//     {name: "Carly", yearOfBirth: 2018,},
//     {name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011,},
//     {name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941,},
//   ]

const findTheOldest = function(people) {

//if someone is living populate yearOfDeath with current year
    people.forEach(person => {
        if (person.hasOwnProperty('yearOfDeath') === false) {
            const d = new Date();
            const year = d.getFullYear();        
            person.yearOfDeath = year;
        };
    });

//calculate oldest person by age
    const oldestPerson = people.reduce((prev, current) => {
            const prevAge = prev.yearOfDeath - prev.yearOfBirth;
            const currentAge = current.yearOfDeath - current.yearOfBirth;
            return prevAge > currentAge ? prev : current;
        }
    );
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;