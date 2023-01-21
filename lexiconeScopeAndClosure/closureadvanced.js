/**
 * IIFE (Immediately Invoked Function Expression)
 */

const privateCounter = (() => {
    let count = 0
    console.log(`Initial value: ${count}`);
    return () => {count += 1;
    console.log(count);}
})();

