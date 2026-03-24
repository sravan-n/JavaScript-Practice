/* Recursion - Fibonacci Series
    Base cases
    fib(0) = 0
    finb(1) = 1

    Formaula for Fibonacci
    fib(n) = fib(n-1)fib(n-2)
*/


function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;

    return fib(n-1) + fib(n-2)
}

// console.log(fib(0))
// console.log(fib(1))
// console.log(fib(3))
// console.log(fib(4))
console.log(fib(10))
console.log(fib(20))
