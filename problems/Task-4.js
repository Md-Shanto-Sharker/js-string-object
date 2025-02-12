// Task-4
// Count the number of properties.
// Input:

let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

// let count = 0;
// for (let i in student) {
//   count++;
// }
// console.log(count);




// another way>>>>>>>>

let count = Object.keys(student).length;
console.log(count);