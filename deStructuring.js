// Object De-Structuring
const person = {
    fName: 'sravan',
    age: 30,
    city: 'ofallon'
}

let { fName, age } = person

// console.log(fName); // same as person.fName
// console.log(age); // same as person.age

const car = {
    model: 'tesla',
    color: 'red'
}

let { model: brand, color} = car
// console.log(brand) // initiates brabd variable witg data from model
// console.log(model) // Throws exception
// console.log(car.model)

const car2 = {
    model2: 'tesla',
    color2: 'red'
}

let {model2, color2 = 'blue'} = car2;
console.log(color2) // provideds original value red only, provided blue only color2 does not exist in car2 object

// Array de-structuring
const brands = ['tesla', 'bmw', 'audi', 'tata', 'benz'];
let [brand1, brand2] = brands;
console.log(brand1)

// skipping the values
let [,brandA,,brandB] = brands
console.log(brandA) // returns bmw