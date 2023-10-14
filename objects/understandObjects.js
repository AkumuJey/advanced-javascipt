const person = {
    name: 'Akumu',
    age: 45,
    greeting: () => console.log("Good Morning!")
}

const countriesVisited = ['Kenya', {
    visited: 'yes',
    favorite: 'true'
}, 'Tanzania']

person.countriesVisited = countriesVisited

console.log(person);
person.greeting()