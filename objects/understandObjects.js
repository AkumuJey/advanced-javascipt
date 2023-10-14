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
person.reminder = () => console.log('Hellow World');

person.reminder()

console.log(Object.hasOwn(person));
console.log(Object.hasOwnProperty(person));

// const myNotification = new Notification('Hello')
// myNotification.body()

console.log(Object.getPrototypeOf(person))

class School{
    name
    constructor(name) {
        this.name = name
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

const giles = new School("Giles");
giles.introduceSelf();
giles.name = "Yell"
giles.introduceSelf()

class classRoom extends School {
    announcement
    #year
    constructor(name, announcement, year){
        super(name)
        this.announcement=announcement;
        this.#year = year
    }
    helloClass() {
        console.log(`${this.announcement}`);
    }
    canPlayGolf() {
        return this.#year > 5
    }
}

const w = new classRoom('Maseno', 'Best class', 4)
console.log(w.canPlayGolf());