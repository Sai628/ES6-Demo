
// Unique Property Keys
const key = Symbol()
const keyTwo = Symbol()
const object = {}

object.key = 'Such magic.'
object.keyTwo = 'Much Uniqueness'

console.log(key === keyTwo)  // false


// Symbols as Concepts
/*
const anakin = 'jedi'
const yoda = 'jedi master'
const luke = 'jedi'
*/

const anakin = Symbol()
const yoda = Symbol()
const luke = Symbol()
