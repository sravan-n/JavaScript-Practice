// Functional Programming

function convertUsdToInr(usd, exchangeRate) {
    return usd * exchangeRate
}

var usd = 100;
var exchangeRate = 96;

var inr = convertUsdToInr(usd, exchangeRate)
console.log(inr)

// First-class Functions

function addNum(a, b) {
    return a + b
}

function randomNum() {
    return Math.floor(Math.random() * 10)
}

function specific() {
    return 92
}

var useRandom = true

if (useRandom) {
    getNumber = randomNum
} else {
    getNumber = specific
}

console.log(addNum(getNumber(), getNumber()))

// Higher Order Function

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2())
}

addTwoNums(specific, randomNum)
addTwoNums(specific, specific)
