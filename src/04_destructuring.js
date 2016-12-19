
// Desctructuring Arrays
let [a, b, c, d] = [1, 2, 3, 4]
console.log(a)  // 1
console.log(c)  // 3


// Desctructuring Objects
let {occupation, father} = {occupation: 'jedi', father: 'anakin'}
console.log(occupation)  // jedi
console.log(father)  // anakin


function getCoords() {
    return {
        x: 10,
        y: 22
    }
}

let {x, y} = getCoords()
console.log(x)  // 10
console.log(y)  // 22
