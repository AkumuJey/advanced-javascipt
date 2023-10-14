const person = {
    name: 'Akumu',
    age: 45,
    greeting: () => console.log("Good Morning!"),
    reminder(){
        console.log(`${this.name}`);
    }
}

const countriesVisited = ['Kenya', {
    visited: 'yes',
    favorite: 'true'
}, 'Tanzania']

person.countriesVisited = countriesVisited

console.log(person);
person.greeting()
person.reminder()