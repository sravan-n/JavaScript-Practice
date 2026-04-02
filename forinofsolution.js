dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (var item of dairy) {
        console.log(item);
    }
}

logDairy();

const animal = {
    canJump: true
}

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (var key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`)
    }
}

birdCan();

function animalCan() {
    for (var key in bird) {
        console.log(`${key}: ${bird[key]}`)
    }
}

animalCan();
