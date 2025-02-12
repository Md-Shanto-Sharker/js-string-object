// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};


for(let i in myObject){
    const result = 'key: ' + i + '| ' + 'type:' +  typeof(myObject[i])
    console.log(result);
}
