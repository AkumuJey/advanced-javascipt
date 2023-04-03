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
