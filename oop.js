// Functional Programming
var shoes = 100;
var tax = 1.2;

function total(shoes, tax) {
    return shoes + ((shoes * tax)/100)
}

var price = total(shoes, tax);
console.log(price);

// Object Oriented Programming
var purchase = {
    shoes: 100,
    tax: 1.2,
    cal_total: function() {
        return this.shoes + ((this.shoes * this.tax)/100)
    }
}

console.log(purchase.cal_total())

var purchase2 = {
    shoes: 150,
    tax: 1.2,
    cal_total: function() {
        return this.shoes + ((this.shoes * this.tax)/100)
    }
}

console.log(purchase2.cal_total())

// OOPS Concepts

// Inherticane, Abstraction, Encapsulation and Polymorphism

class Bird {
    constructor(name) {
        this.name = name;
    }
    useWings() { // ABSTRACTION - Hide complexity and exposes a single interface
        console.log(`${this.name} Flying!`)
    }
}

class Eagle extends Bird { // Eagle class INHERITED from Bird class
    useWings() {
        super.useWings(); // super access method from parent class
        console.log("Very high!!")
    }
}

class Penguin extends Bird {
    useWings() {
        console.log(`${this.name} Diving!!`)
    }
}

var sparrow = new Bird('sparrow');
var eagle = new Eagle('Bald Eagle');
var penguin = new Penguin('Aritic Penguin')

sparrow.useWings(); // useWings method dipslays POLYMORPHISM which is a single method represents different implementations
eagle.useWings();
penguin.useWings();

// Encapsulation - Keeps data private

class BankAccount {
    constructor() {
        this.balance = 100 // not truly private but treated as internal
    }

    deposit(amount) {
        console.log(`Balance after Deposit - ${this.balance + amount}`)
    }
}

var myAcct = new BankAccount()
myAcct.deposit(500)