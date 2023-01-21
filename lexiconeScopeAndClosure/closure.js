/**
 * Closure - is a function having access to the parent scope, even after the parent function has closed
 * Closure is created when we define a function and not when a function is executed.
 */

let x = 1;

const parentFunction = () => {
    let myValue = 2;
    console.log(x);
    console.log(myValue);
    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue -= 5);
    }
    return childFunction
}

const result = parentFunction()

console.log(result);

result()

result()
result()
/**
 * variables continue to increase
 */
result()

/**
 * accessibility of variables is restricted
 */
console.log(x);
console.log(myValue); /**Reference error.Value is private to parent function.
Child function only accesses it through closure */
