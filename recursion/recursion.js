const countToTen = (num = 1) => {
    while (num <= 10) {
        console.log(num);
        num += 1
    }
}

// countToTen()

/**Recursive functions have 2 parts 
 * 1) Recursive call to the function.
 * 2) At least one condition to exit.
 */


const recurTen = (num = 21) => {
   if (num > 30) return;
   console.log(num);
   num ++
   recurTen(num)
}

recurTen()

/**Recurssion creates readerbility and keeps code dry.
 * Affects permormance and is hard to debug
 */



