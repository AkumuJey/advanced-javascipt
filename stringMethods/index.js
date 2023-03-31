let text = "Akumu Jey"
// Finding length of a string
let length = text.length


// Extracting String Parts

let extract = text.slice(6,9) //The last index is ignored hence you can use bigger figure to include everything.

//You can also omit the second character e.g let extract = text.slice(6)
// Negative indexes are counted from the back

let email = 'josephowino7@gmail.com'
let username = email.slice(-email.length, -10)


//Substring method also works as slice but treats negative values as 1 
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);


//substr() works as slic but second parameter specieis length of extracted part
const sab = str.substr(7, 6)
const sab1 = str.substr(-4)

//Replace
let name = 'I love Music. Ohangla is my favorite. Ohangla strikes.'
let correction = name.replace("Ohangla", "Hiphop")
let caseInsensitive = name.replace(/oHangla/i, 'Benga')
let replaceAll = name.replace(/Ohangla/g, 'Benga')
// console.log(correction,'\n', caseInsensitive, '\n', replaceAll);

//str.replaceAll() methods works without ading 'g' regular expression. Its an ES2021 feature. Does not work on internet explorer.

let upperCase = name.toUpperCase()
let lowerCase = name.toLowerCase()
// console.log(upperCase, '\n', lowerCase);
let home = "Asumbi"
let expression = 'I love '
let sum = expression.concat(home, ' so much')
// console.log(sum);

//trim() removes wite spaces on both ends of the string

let myName = "  Joseph Akumu  "
const text1 = myName.trim()

const text2 = myName.trimStart()
const text3 = myName.trimEnd()
// console.log(text1, '\n', text2, '\n', text3);

// padStart and padEnd

let number = 6
let displayNo = number.toString().padStart(5, '0')
let displayNew = number.toString().padEnd(6, 'x')

// console.log(displayNo, '\n', displayNew);

// Extracting string characters
let string = "Hello"
// let char = string.charAt(0)
let char = string.charCodeAt(0)
let m = string[0]
// console.log(char, '\n', m); 
//Missing character is returned as undefined with string[index] while string.charAt[index] returns empty string


// converting a string to an array
let fruits = 'Oranges, Mangoes, Pineaples, Bananas'
let fruitsArray = fruits.split(',')
console.log(fruitsArray);
