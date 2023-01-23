const person = {
    alive : true
}

const musician = {
    plays: true
}

console.log(musician.plays); /**True */
console.log(musician.alive); /**Undefined */


musician.__proto__ = person /**Old method of doing things */

console.log(musician.alive); /**True inherited alive attribute */
console.log(musician);


