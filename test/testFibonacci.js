/**
 * @description: Test fibonacci generator.
 */

const Fibonacci = require("../src/fibonacci.js").Fibonacci;
const chai = require("chai");

const fib = new Fibonacci();

// Mark describe() and it() as global so that ESLint doesn't complain about these being undefined.
/* global describe, it */

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

const gen = fib.generator();

describe("gen.next().value", () => {
    it("should be 89", () => {
        chai.expect(gen.next().value).to.equal(89);
    });
});