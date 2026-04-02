// Part 1: Separate Array Elements
const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const [first, second, third, ...remaining] = topSixRestaurants

console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${remaining}`);

// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
    for (var val of args) {
        console.log(val);
    }
}

unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");

// Part 3: Merge Arrays
const favoriteBaseballTeams = ["Yankees", "Mets", "Dodgers", "Giants", "Red Sox", "Cubs"];
const favoriteFootballTeams = ["Patriots", "Giants", "Jets", "Eagles", "Steelers", "Cowboys"];

const favoriteTeams = [...favoriteBaseballTeams, ...favoriteFootballTeams];
console.log(favoriteTeams);

/*

Key Takeaways:    

1. Array Destructuring with the Spread Operator

The spread operator (...) simplifies breaking down arrays into individual variables and subarrays.

It enhances code readability and eliminates the need for manual slicing.

2. The Rest Operator in Functions

The rest operator (...args) enables functions to handle an unknown number of arguments dynamically.

It gathers multiple arguments into an array, making iteration and manipulation straightforward.

3. Merging Arrays with the Spread Operator

The spread operator (...) provides a clean and concise way to merge multiple arrays into a single array.

It avoids the need for loops or manual concatenation.

4. Practical Application of ES6 Features

These modern JavaScript features simplify common programming tasks, making code shorter, cleaner, and more intuitive.

*/