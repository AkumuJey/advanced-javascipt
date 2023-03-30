let text = "Akumu Jey"
// Finding length of a string
let length = text.length


// Extracting String Parts

let extract = text.slice(6,9) //The last index is ignored hence you can use bigger figure to include everything.

//You can also omit the second character e.g let extract = text.slice(6)
// Negative indexes are counted from the back

let email = 'josephowino7@gmail.com'
let username = email.slice(-email.length, -10)
console.log(username);

