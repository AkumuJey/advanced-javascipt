let x = 1;

const parentFunction = () => {
    let myValue = 2;
    console.log(x);
    console.log(myValue);
    const childFunction = () => {
        console.log(x += 5);
        console.log(myValue -= 5);
    }
    childFunction()
}

parentFunction()

/**
 * Lexicone scope and not closure. The child function has access to parent function and global variables.
 */


