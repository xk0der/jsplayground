/**
 * @description: Node module to generator Fibonacci sequence using genertors and promise.
 * Sequence starts at "1"
 * Example 1 1 2 3 5 8 13 21 34 55 ...
 */

/**
 * @class: Fibonacci
 * @description: Generates fibonacci sequence and caches results as well.
 * But there is no upper limit to the cache at the moment, which may result in high memory usage.
 * Ideal implementation should have cache size limit, and manegment can be done by say overwritting least accessed elements.
 */
class Fibonacci {
    #b = 0;
    #next = 1;

    #cache = [];

    constructor() {
    }

    /**
     * @function: generator()
     * @description: returns a generator object which would give the next Fibonacci term on each .next() invocation.
     */
    *generator() {
        const retval = this.#next;
        this.#next = this.#next + this.#b; 
        this.#b  = retval;
        yield retval;
        yield* this.generator();
    }

    /**
     * @function: reset()
     * @description: reset sequence back to inital state.
     */
    reset() {
        this.#b = 0;
        this.#next = 1;
    }

    /**
     * @function: nthTerm()
     * @description: Returns the n'th term from the Fibonacci sequence 
     * @param int n - term position within the sequence (1 being the first term)
     */
    nthTerm(n) {
        this.reset();
        return new Promise(  (resolve, reject) => {
            const gen = this.generator();
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
            }

            const nextTerm = gen.next();
            if(nextTerm.value === Infinity) {
                reject("Reached infinity!");
            } else {
                resolve(nextTerm.value);
            }
        });
    }
}

module.exports.Fibonacci = Fibonacci;