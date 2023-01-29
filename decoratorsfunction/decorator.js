/**Decorators wrap another function in another function */
/**Support the principle of DRY code  */

let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num)
}
/**Let is recommended for use with decorator functions */

const callCounter = (fn) => {
    let count = 0;
    return (...args) => {
        console.log(`Sum has has been called ${count += 1} times`);
        return fn(...args)
    }
}

sum = callCounter(sum)

console.log(sum(2,4,6));
console.log(sum(2,4,6));
console.log(sum(2,4,6,10,123));
