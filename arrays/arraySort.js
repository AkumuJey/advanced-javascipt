const names = ["Njuguna", "Yara", "Musyimi", "Joel", "Sharon", "Alifya"]

// let sortedNames = names.sort()
// let reverseSort = names.reverse()
console.log(names.sort());
console.log(names.reverse());


const scores = [34, 65, 78, 9, 23, 222, 77, 99, 11, 14]
console.log(scores.sort((a, b) => a - b));
console.log(scores.sort((a, b) => b - a));

// Sorting an array in random order
const points = [40, 101, 13, 56, 25, 10, 33, 74];
console.log(points.sort(() => 0.5 - Math.random()));


//Fisher Yate Shuffle
const yateShuffle = (array) => {
    for (let i = array.length -1; i > 0 ; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let k = array[i]
        array[i] = array[j]
        array[j] = k
    }
    console.log(array);
}

console.log(scores);
yateShuffle(scores)
console.log(scores);

let ages = [12, 45, 66, 79, 32, 44, 27, 89, 93]
//First method of determining the maximum and minimum
    let sortedAges = ages.sort((a, b) => a -b)
    console.log(sortedAges[0]); //Smalletst
    console.log(sortedAges[sortedAges.length - 1]); //Largest

//Maximum age using max method
let findMaxOrMin = (array, num) => {
    if (num > 0) {
        return Math.max.apply(null, array)
    }
    return Math.min.apply(null, array)
}

console.log(findMaxOrMin(ages, 1));
console.log(findMaxOrMin(ages, 0));

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

//sorting method
cars.sort((a, b) => a.year - b.year)
