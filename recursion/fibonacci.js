/**Fibonacci concept 
 * 0, 1, 1, 2, 3, 5,8
*/

/**Fibonacci without recursion */
const fibonacci = (num, array = [0,1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1
    }
    return array
}

const fibo = (num) => {
    let array = [0, 1]
    for (let index = 2; index < num; index++) {
        array.push(array[index-1] + array[index-2])
    }
    return array
}
// console.log(fibo(14));
// console.log(fibonacci(12));

const fib = (num, array = [0, 1]) => {
    if (num <= 2) {
        return array
    }
    let m = array.length
    array.push(array[m-1] + array[m-2])
    fib(num-1, array)
    return array
}

/**Finding position of fib number */
const findPos = (pos) =>{
    if (pos <= 1) return pos
    let array =[0,1]
    for (let index = 2; index <= pos; index++) {
        const [nextLast, last] = array.slice(-2)
        array.push(nextLast + last)
    }
    return array[pos]
}


/**Finding position of fib number with recursssion */

const getPos = (pos) => {
    if (pos <= 1) return pos
    return getPos(pos-1) + getPos(pos-2)
}

/**Shortenning the function with ternary operator. */
const getPosBetter =(pos) => pos <=1 ? pos : getPosBetter(pos-1) + getPosBetter(pos -2)

console.log(getPos(10));
console.log(findPos(10));
console.log(getPosBetter(10));