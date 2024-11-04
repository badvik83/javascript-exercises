const findTheOldest = function() {

  //   let oldestAge = 0;
//   let oldestPerson = [];

//   people.map((a) => {
//     if(a.yearOfDeath - a.yearOfBirth > oldestAge) {
//         oldestAge = a.yearOfDeath - a.yearOfBirth;
//         oldestPerson = a;
//     }
//     else if (!a.yearOfDeath) {
//         let currentAge = new Date().getFullYear();
//         if(currentAge - a.yearOfBirth > oldestAge) {
//             oldestAge = currentAge - a.yearOfBirth;
//             oldestPerson = a;
//         }
//     }
//   });

// console.log(oldestPerson);

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
  
  console.log(findTheOldest(people));
  
};

// Do not edit below this line
module.exports = findTheOldest;
