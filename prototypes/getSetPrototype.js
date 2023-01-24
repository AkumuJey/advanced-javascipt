/**Get and set ProtoTypeOf */
const person = {
    alive : true
}

const musician = {
    plays: true
}

Object.setPrototypeOf(musician, person)
console.log(Object.getPrototypeOf(musician));

console.log(musician.__proto__);

console.log(Object.getPrototypeOf(musician) === musician.__proto__);
console.log(musician);


/**Extending prototype to be more specific.  */
const guiterist = {
    strings: 6,
    __proto__ : musician
}

console.log(guiterist.alive);
console.log(guiterist.plays);
console.log(guiterist.strings);
console.log(guiterist);
