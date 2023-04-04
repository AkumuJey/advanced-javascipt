const numbers = [45, 4, 9, 16, 25];

// console.log(numbers);
// numbers.forEach(element => console.log(element * 2));
// let newNumbers = numbers.map((number) => number * 3)
// let modifiedNumbers = numbers.flatMap((number) => number * 4)

// console.log(newNumbers);
// console.log(modifiedNumbers);

// //Filter methods for generating new arrays

// let filteredNumbers = numbers.filter((number) => number>10)
// console.log(filteredNumbers);

// //Reduce method

// let sum = numbers.reduce(((num, number) => num + number ), 0)
// let sumRight = numbers.reduceRight(((num, number) => num + number ), 0) //this can also be used

// console.log(sum);
// console.log(sumRight);


//Checking if every element meets a condition.
let allNumbersAbove = numbers.every((number) => number > 15)
let someNumbersAbove = numbers.some((number) => number > 40)

console.log(allNumbersAbove);
console.log(someNumbersAbove);
