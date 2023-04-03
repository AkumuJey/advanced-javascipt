let names = []
names[0] = "Akumu"
names[1] = "John"
names[2] = "Joseph"

// console.log(names);

let cars = new Array("Prado", "merc", "BM")
// console.log(cars);

cars[4] = 'Peng'
// console.log(cars);
// console.log(typeof(cars[3])); //undefined

let schools = ['Maseno', 'Asumbi', 'Mbita', 'Mangu']
// schools.forEach((school) => console.log(school.toLocaleUpperCase()))

//Array methods
const matunda = ['Mangoes', 'Oranges', 'Water melons']

let x = matunda.toString()
let y = matunda.join('&')
// console.log(x);
// console.log(y); //it allows the addition of a separator.

//adding to a list using pus method.
const students = ['jooel', 'yara','fidel','sharon', 'alifya']

students.push('Kevin')
console.log(students);

students.pop()
console.log(students);

students.shift()
console.log(students);

let shoes = ['nike', 'akala', 'bata']
shoes.unshift('Puma')
console.log(shoes);

megaArray = matunda.concat(students, shoes)
console.log(megaArray);

const myArray = [[1,2,3], [4,5], ['Akumu', 'Jey']]
console.log(myArray);
console.log(myArray.flat());

const homes = ['Asumbi', 'Rangwe', 'Maseno', 'Blocks']
homes.splice(2, 0, 'KNH', 'Hall 10') //The first is the starting point, second number to be deleted, the rest names to be added
console.log(homes);

//splice can also be sued to delete elements in an array e.g homes.slice(0, 1)


let nyumbani = homes.slice(2) //This takes everything from 2 onwards
let qwetu = homes.slice(0,1) //Takes 0 only

console.log(nyumbani);
console.log(qwetu);