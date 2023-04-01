let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate"); //gives reference to where it first appears

let lastIndex = text.lastIndexOf("locate") //Gives reference to where locate last appears. This searches from the end of the string.
//console.log(lastIndex); { both indexOf and lastIndexOf return -1 if the desired string is not found.}

let modifiedIndex = text.lastIndexOf("locate", 15); //This does not search beyond index 15 f the string.
// console.log(modifiedIndex);


// text.search("locate", 15) is similar with text.indexOf("locate", 15) minor diferences

let words = "The rain in SPAIN stays mainly in the plain"
let match = words.match(/ain/g)
let matchAll = words.matchAll(/ain/g)
// console.log(matchAll);

// includes method returns a boolean if a value is found

let found = words.includes('rain')
// it can also receive a second argument on where to start
let startSearch = words.includes('rain', 10)
console.log(startSearch);


//starts with and ends with also return boolean values. Receives a second argument on where to search. e.g.
//.startsWith('The', 14) ie 0-14

