// Recursive Funnction

function greet(name) {
    console.log('Hello ', name);
    greet(name);
}

// greet('Sravan')

var counter = 100;

function greet_100(name) {
    if (counter == 0) {
        console.log('Reached Limit');
    } else {
        console.log('Hello ', name)
        counter--;
        greet_100(name)
    }
}

greet_100('Sravan')