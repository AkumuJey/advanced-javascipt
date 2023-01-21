/**
 * IIFE (Immediately Invoked Function Expression)
 */

const privateCounter = (() => {
    let count = 0
    console.log(`Initial value: ${count}`);
    return () => {count += 1;
    console.log(count);}
})();

privateCounter()
privateCounter()
privateCounter()
privateCounter()

const credits = ((num) => {
    let credits = num
    console.log(`Initial credits value: ${credits}`);
    return () => {
        credits = (credits * Math.random() * 8.8).toFixed(0)
        if (credits % 2 == 0) {
            console.log(`${credits} is even`);
        } else console.log(`${credits} is odd`);
    }
})(3)


credits()
credits()
credits()
credits()
credits()
credits()
credits()
credits()
credits()
credits()
credits()
credits()