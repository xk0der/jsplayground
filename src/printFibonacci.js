/**
 * @description: Try out Fibonacci generator
 * @author: xk0der (Amit Singh)
 */

let Fibonacci = require("./fibonacci.js").Fibonacci;

/**
 * @function: th()
 * @description: Given a number, decides the ordinal indicator for it. 
 * @param int n 
 */
function th(n) {
    let digit = (n+"").substr((n+"").length - 1, 1);
    switch(digit * 1) {
        case 1:
                return n + "st";
        case 2:
                return n + "nd";
        case 3:
                return n + "rd";
        default:
                return n + "th";
    }
 
}

let fib = new Fibonacci();

fib.nthTerm(100).then((v) => {
    console.log( th(100) + " term = " + v)
}).then(() => {
    console.log("");
    console.log("Printing first 10 terms")
    fib.reset();
    let gen = fib.generator();
    for (let i = 0; i < 10; ++i) {
        console.log(gen.next().value);
    };
}).catch((reason) => {
    console.log("Failed with : " + reason);
});

fib.nthTerm(3).then((v) => {
    console.log(th(3) + " term = " + v)
});

console.log('Waiting for result');
