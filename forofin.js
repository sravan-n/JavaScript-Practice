// Array
const colors = ['red', 'green', 'yellow']
for (var color of colors) {
    console.log(color);
}

// Unlike arrays - Objects are not iterbale directly
// To iterate through object need to know build in oject menthods

const person = {
    fname: 'sravan',
    lname: 'kumar',
    age: 30, 
    city: 'ofallon',
    sex: 'm'
}

console.log(Object.keys(person)); // returns all keys in object as array
console.log(Object.values(person)); // returns all values in object as array
console.log(Object.entries(person)); // returns array of arrays with pair of value and key

for (var key of Object.keys(person)) {
    console.log(` key is ${key} and value is ${person[key]}`)
}

// for ... in loops through objects keys

for (var x in person) {
    console.log(x)
}