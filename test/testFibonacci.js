/**
 * @description: Test fibonacci generator.
 */

let Fibonacci = require("../src/fibonacci.js").Fibonacci;
let chai = require("chai");

let fib = new Fibonacci();

describe("fib", () => {
    it("Should be not null", () => {
        chai.expect(fib).to.be.not.null;
    });
    it("Should be an object", () => {
        chai.expect(typeof fib).to.equal("object");
    });
});

fib.nthTerm(10).then( (v) => {
    describe("fib.nthTerm 10", () => {
        it("Should equal 55", () => {
            chai.expect(v).to.equal(55); 
        });
    });
}).catch( (r) => {
    describe("fib.nthTerm 10", () => {
        it("Should equal 55", () => {
            chai.expect(r).to.equal(55);
        });
    });
} );

let gen = fib.generator();

describe("gen.next().value", () => {
    it("should be 89", () => {
        chai.expect(gen.next().value).to.equal(89);
    });
});