/**
 * @description: Node module to generator Fibonacci sequence using genertors and promise.
 */


class Fibonacci {
    #b = 0;
    #next = 1;

    #cache = [];

    constructor() {
    }

    *generator() {
        let retval = this.#next;
        this.#next = this.#next + this.#b; 
        this.#b  = retval;
        yield retval;
        yield* this.generator();
    }

    reset() {
        this.#b = 0;
        this.#next = 1;
    }

    nthTerm(n) {
        this.reset();
        var p = new Promise(  (resolve, reject) => {
            let gen = this.generator();
            if(n <= 0) {
                reject("n must be 1 or higher")
            }

            if(typeof this.#cache[n] !== "undefined") {
                resolve(this.#cache[n]);
            }

            for(let i = 0; i < n-1; ++i) {
                let nextTerm = gen.next();
                if( nextTerm.value === Infinity) {
                    reject("Reached infinity while calculating next term!");
                }
                this.#cache[i+1] = nextTerm.value; 
            };

            let nextTerm = gen.next();
            if(nextTerm.value === Infinity) {
                reject("Reached infinity!");
            } else {
                resolve(nextTerm.value);
            }
        });
        return p;
    }
};

module.exports.Fibonacci = Fibonacci;