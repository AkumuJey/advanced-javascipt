function Animal(species) {
    this.species = species;
    this.eats = true
}

Animal.prototype.walks = function () {
   return `A species ${this.species} is walking.`
}

const Bear = new Animal('bear')

console.log(Bear.species);
console.log(Bear.walks());

console.log(Bear.__proto__ === Animal.prototype);
console.log(Animal.prototype);
console.log(Bear.__proto__);


/**Modern ES^ Classes */

class Vehicle {
    constructor() {
        this.wheel = 4,
        this.motorized = true
    }
    ready() {
        return 'Ready to go.'
    }
}

class Motocycle extends Vehicle {
    constructor () {
        super()
        this.wheel = 1
    }
    wheely () {
        return 'Now on one Wheel.'
    }
}

myBike = new Motocycle()
console.log(myBike);
console.log(myBike.wheely());
console.log(myBike.ready());
console.log(myBike.motorized);
