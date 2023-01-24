
/**Circle references are not allowed in proto */
/**Proto value must be an object */
/**An object can only inherit from another object */

const car = {
    doors: 2,
    seats: 'Vinyl',
    get seatMaterial() {
        return this.seats
    },
    set seatMaterial(material) {
        this.seats = material
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car)
luxuryCar.seatMaterial = 'Leather'


console.log(luxuryCar.seats);
console.log(luxuryCar.valueOf());
/**Getting keys of an Object */
console.log(Object.keys(luxuryCar));

/**Looping through each object key */
Object.keys(luxuryCar).forEach(key => console.log(key))

/**for in loop grabs even inherited keys*/
for (let key in luxuryCar) {
    console.log(key);
}
